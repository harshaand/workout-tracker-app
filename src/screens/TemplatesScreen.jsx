import '../css/template-screen.css';
import '../css/icons.css'
import IconNavClock from '../assets/icons/IconNavClock.jsx';
import IconNavAdd from '../assets/icons/IconNavAdd.jsx';
import IconNavProgress from '../assets/icons/IconNavProgress.jsx';
import IconNavUser from '../assets/icons/IconNavUser.jsx';

import IconAddMedium from '../assets/icons/IconAddMedium.jsx';
import IconAddSmall from '../assets/icons/IconAddSmall.jsx';
import IconFolder from '../assets/icons/IconFolder.jsx';
import IconWeight from '../assets/icons/IconWeight.jsx';
import IconCross from '../assets/icons/IconCross.jsx';
import IconTick from '../assets/icons/IconTick.jsx';
import IconTrash from '../assets/icons/IconTrash.jsx';
import IconCalendar from '../assets/icons/IconCalendar.jsx';
import IconCollapse from '../assets/icons/IconCollapse.jsx';
import IconDuplicate from '../assets/icons/IconDuplicate.jsx';
import IconClock from '../assets/icons/IconClock.jsx';
import IconProgress from '../assets/icons/IconProgress.jsx';
import IconTarget from '../assets/icons/IconTarget.jsx';
import IconQuestion from '../assets/icons/IconQuestion.jsx';
import IconPencil from '../assets/icons/IconPencil.jsx';
import IconTrophyLarge from '../assets/icons/IconTrophyLarge.jsx';
import IconTrophyMedium from '../assets/icons/IconTrophyMedium.jsx';
import IconTrophySmall from '../assets/icons/IconTrophySmall.jsx';
import IconLock from '../assets/icons/IconLock.jsx';
import IconTimer from '../assets/icons/IconTimer.jsx';
import IconArrowDown from '../assets/icons/IconArrowDown.jsx';
import IconArrowLeft from '../assets/icons/IconArrowLeft.jsx';
import IconArrowRight from '../assets/icons/IconArrowRight.jsx';
import IconSearch from '../assets/icons/IconSearch.jsx';
import IconBicep from '../assets/icons/IconBicep.jsx';
import IconStreak from '../assets/icons/IconStreak.jsx';
import IconEllipsis from '../assets/icons/IconEllipsis.jsx';
import IconBlankNarrow from '../assets/icons/IconBlankNarrow.jsx';
import IconBlankWide from '../assets/icons/IconBlankWide.jsx';
const ooo = {

}
function TemplatesScreen() {
    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <button className="btn-big btn-blue-chunky"> Start an Empty Workout </button>
            </div>
            <div className="library-main-section">
                <div className="library-main-section-header">
                    <div className="testing-icon-div">
                        <IconAddMedium />
                        <IconFolder />
                        <IconWeight />
                        <IconTrash />
                        <IconCollapse />
                        <IconDuplicate />
                        <IconClock />
                        <IconTarget />
                        <IconQuestion />
                        <IconPencil />
                        <IconTrophyMedium />
                        <IconLock />
                        <IconTimer />
                        <IconSearch />
                        <IconEllipsis />
                        <IconBlankNarrow />
                        <IconBlankWide />



                    </div>
                    <div className="testing-icon-div">
                        <IconAddSmall />
                        <IconCross />
                        <IconTick />
                        <IconArrowDown />
                        <IconArrowLeft />
                        <IconArrowRight />
                        <IconTrophySmall />
                    </div>


                    <div className="testing-icon-div">
                        <IconCalendar />
                        <IconProgress />
                        <IconTrophyLarge />
                        <IconStreak />
                        <IconBicep />
                    </div>

                    <div className="testing-icon-div">
                        <IconNavClock />
                        <IconNavAdd />
                        <IconNavProgress />
                        <IconNavUser />
                    </div>

                </div>
                <div className="library-main-section-content">

                </div>
            </div>

        </div>
    )
}

export default TemplatesScreen