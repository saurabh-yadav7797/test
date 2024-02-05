import MainBoard from './MainBoard'
import './rightSlot.css'
import TernaryNav from './TernaryNav'
import TopBar from "./TopBar"
export default function RightSlot() {
    return(
        <>
            <div className="right-main">
                <TopBar></TopBar>
                <TernaryNav></TernaryNav>
                <MainBoard></MainBoard>
            </div>
            
        </>
    )
}