import { useState, useEffect } from "react";


/*
1. Write code case where if template doesn't have a folderId, it goes to 'My Templates' folder or folderId: 1




*/
// Sample templates data
const templates = [
    {
        content: 'one elephant',
        folderId: 1
    }, {
        content: '3 bananas',
        folderId: 3
    }, {
        content: 'Juan',
        folderId: 1
    }, {
        content: 'slat4life',
        folderId: 4
    }, {
        content: '7/11',
        folderId: 7
    }, {
        content: 'the devil is here',
        folderId: 6
    }, {
        content: 'one punch man',
        folderId: 1
    }, {
        content: 'i 8 a gateux',
        folderId: 8
    }
];

// Folder component to display a folder with its templates
const Folder = ({ folderId, templates }) => {
    return (
        <div >
            <h1 >Folder {folderId}</h1>
            <div >
                {templates.map((template, index) => (
                    <p key={index} >{template.content}</p>
                ))}
            </div>
        </div>
    );
};

// Main component to display all folders
const FolderList = () => {
    const [folderData, setFolderData] = useState({});

    useEffect(() => {
        // Group templates by folderId
        const groupedTemplates = templates.reduce((acc, template) => {
            if (!acc[template.folderId]) {
                acc[template.folderId] = [];
            }
            acc[template.folderId].push(template);
            return acc;
        }, {});

        setFolderData(groupedTemplates);
    }, []);

    return (
        <div >
            <h1 >Template Folders</h1>
            {Object.keys(folderData).map((folderId) => (
                <Folder
                    key={folderId}
                    folderId={folderId}
                    templates={folderData[folderId]}
                />
            ))}
        </div>
    );
};

export default FolderList;