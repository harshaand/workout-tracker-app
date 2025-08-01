import {
    AddMedium, AddSmall, ArrowDown, ArrowLeft, ArrowRight, Bicep, BlankNarrow, BlankWide,
    Calendar, Clock, Collapse, Cross, Duplicate, Ellipsis, Folder, Lock,
    NavAdd, NavProgress, NavUser, Pencil, Progress, Question, Search, Streak,
    Target, Tick, Timer, Trash, TrophyLarge, TrophyMedium, TrophySmall, Weight, NavClock
} from '../assets/icons/icons.js';



btn--blue
btn--blue-soft
btn--red
btn--red-soft
btn--gray
btn--transparent
btn--green
/*special cases*/
btn--unchecked



btn__icon--small
btn__icon--big
btn--big
btn--big-hug
btn--big-skinny
btn--big-chunky
/*special cases*/
btn--view-all
btn--add-template







options1
option2
target
help
folder
checkbox
checkboxLocked
closeModal
closeScreen
viewAll
addTemplate
timer
backScreen
addExercise


<ButtonSmall type='options1' />
<ButtonSmall type='option2' />
<ButtonSmall type='target' />
<ButtonSmall type='help' />
<ButtonSmall type='folder' />
<ButtonSmall type='checkbox' />
<ButtonSmall type='checkboxLocked' />
<ButtonSmall type='closeModal' />
<ButtonSmall type='viewAll' />
<ButtonSmall type='viewAll' />
<ButtonSmall type='addTemplate' />
<ButtonSmall type='timer' />
<ButtonSmall type='backScreen' />
<ButtonSmall type='addExercise' />

<ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>
<ButtonBig color='gray' size='skinny' icon='add'>Add Set</ButtonBig>
<ButtonBig color='red'>Delete</ButtonBig>
<ButtonBig color='gray'>Save</ButtonBig>
<ButtonBig color='blue'>Save</ButtonBig>
<ButtonBig color='blueSoft'>Add Exercises</ButtonBig>
<ButtonBig color='redSoft'>Cancel Workout</ButtonBig>
<ButtonBig color='green' size='hug'>Finish</ButtonBig>
<ButtonBig color='blue' size='hug'>Save</ButtonBig>
<ButtonBig color='transparent' size='hug'>Save</ButtonBig>


add
archive
collapse
duplicate
delete
edit

<div className='modal-options modal-options--default-width'>
    <ButtonModal type='options' icon='add'>Add Template</ButtonModal>
    <ButtonModal type='options' icon='archive'>Rename Folder</ButtonModal>
    <ButtonModal type='options' icon='collapse'>Collapse Folder</ButtonModal>
    <ButtonModal type='options' icon='duplicate'>Duplicate</ButtonModal>
    <ButtonModal type='options' icon='edit'>Edit Template</ButtonModal>
    <ButtonModal type='optionsDelete' icon='delete'>Delete</ButtonModal>
</div>



import ModalOptionsTemplate from '../components/Modals/template/ModalOptionsTemplate.jsx'
import ModalOptionsHistory from '../components/Modals/template/ModalOptionsHistory.jsx'
import ModalOptionsFolder from '../components/Modals/template/ModalOptionsFolder.jsx'
import ModalOptionsEditTemplateScreen from '../components/Modals/template/ModalOptionsEditTemplateScreen.jsx'

import ModalDelete from '../components/Modals/boilerplate/ModalDelete.jsx'
import ModalDiscard from '../components/Modals/boilerplate/ModalDiscard.jsx'
import ModalSaveInputDescr from '../components/Modals/boilerplate/ModalSaveInputDescr.jsx'
import ModalSaveInputNoDescr from '../components/Modals/boilerplate/ModalSaveInputNoDescr.jsx'
import ModalSave from '../components/Modals/boilerplate/ModalSave.jsx'
import ModalAdd from '../components/Modals/boilerplate/ModalAdd.jsx'
import ModalSelect from '../components/Modals/boilerplate/ModalSelect.jsx'




{/* Options modals on templates screen */}
<ModalOptionsTemplate />
<ModalOptionsHistory />
<ModalOptionsFolder />
<ModalOptionsEditTemplateScreen />
{/* Add new folder (has an inputfield) */}
<ModalAdd />
{/* Select folder */}
<ModalSelect />

{/* FIXED POSITION MODALS */}
<ModalDelete />
<ModalDiscard />
<ModalSave />

{/* Save new template? Choose name for template + inputfield */}
<ModalSaveInputDescr />
{/* Choose template name + inputfield */}
<ModalSaveInputNoDescr />





exercises: [
    {
        name: 'Back Squat',
        PBs: { 1RM: 80, weight: 88, reps: 88, volume: 888 },
        history: [
            {
                date: '1/1/2025',
                workoutId: 90210,
                workout: {
                    PBs: { 1RM: true, weight: true, reps: false, volume: true },
                    sets: [
                        { weight: 2, reps: 2 },
                        { weight: 1, reps: 2 },
                        { weight: 1, reps: 1 }
                    ]
                }
            }
        ]
    }
],
strengthScores: {
    muscleGroups: { chest: 61, back: 87, glutes: 97, quads: 86 },
    chest: { benchpress: 59, chestfly: 61, cables: 31 },
    glutes: { backsquats: 97, hipthurst: 40, glutebridge: 55 },
    quads: { frontsquats: 40, squats: 97, legpress: 88 }
}