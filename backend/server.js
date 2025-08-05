import express from 'express';
import cors from 'cors';
import { auth } from 'express-oauth2-jwt-bearer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userTemplate from './config/userTemplate.js'
dotenv.config();

const app = express();

const verifyJwt = auth({
    audience: 'https://genmax.app/api',
    issuerBaseURL: 'https://login.genmax.app',
    tokenSigningAlg: 'RS256'
});

app.use(express.json());
app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true
}));
app.use(verifyJwt);

mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err.message)
    })


const userSchema = new mongoose.Schema({
    auth0Id: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now },
    appData: {}
});

const User = mongoose.model('User', userSchema);

app.get('/api/user/data', async (req, res) => {
    try {
        const auth0Id = req.auth.payload.sub;
        let user = await User.findOne({ auth0Id });

        if (!user) {
            const newUser = {
                auth0Id,
                appData: userTemplate
            };
            user = await User.insertOne(newUser);
        }

        res.json(user.appData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user data' });
    }
});

app.put('/api/user/data', async (req, res) => {
    try {
        const auth0Id = req.auth.payload.sub;
        const updatedUser = await User.findOneAndUpdate(
            { auth0Id },
            { appData: req.body },
            { new: false, upsert: false }
        );

        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user data' });
    }
});

app.delete('/api/user/data', async (req, res) => {
    try {
        const auth0Id = req.auth.payload.sub;
        const updatedUser = await User.findOneAndUpdate(
            { auth0Id },
            { appData: userTemplate },
            { new: false, upsert: false }
        );

        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.json({ message: 'User data reset successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to reset user data' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
