import { useState } from 'react'
import './RightSlot/rightSlot.css'
export default function Steps({ label, enabled, onToggle }) {
    // const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const maskStyle = {
        maskType: 'alpha',
    };
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        onToggle();
        // You can perform other actions here if needed
    };
    return (
        <>
            <div className='steps-main d-flex flex-direction-column'>
                <div className='steps-check d-flex flex-direction-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="0.5" y="0.888672" width="19" height="18" fill="white" stroke="black" />
                    </svg>
                    {buttonClicked && <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                        <mask id="mask0_275_739" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="39">
                            <rect y="0.388672" width="38" height="38" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_275_739)">
                            <path d="M15.1207 28.8887L6.0957 19.8637L8.35195 17.6074L15.1207 24.3762L29.6478 9.84909L31.904 12.1053L15.1207 28.8887Z" fill="#5BB663" />
                        </g>
                    </svg>}
                    <span>{label}</span>
                </div>
                <div className='steps-button'>
                    <div></div>
                    {!buttonClicked ? (
                        <button onClick={handleButtonClick} className={enabled ? 'complete-button' : 'complete-button-disable'} disabled={!enabled}>Complete</button>
                    ) : (
                        <button className='site-visit' style={{width:'43%'}}>
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 13" fill="none">
                                <mask id="mask0_275_193" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="13">
                                    <rect y="0.388672" width="12" height="12" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_275_193)">
                                    <path d="M2 11.3887V10.3887H10V11.3887H2ZM6 9.38867L2.5 4.88867H4.5V1.38867H7.5V4.88867H9.5L6 9.38867ZM6 7.76367L7.45 5.88867H6.5V2.38867H5.5V5.88867H4.55L6 7.76367Z" fill="#4375FB" />
                                </g>
                            </svg>
                        </button>
                    )}

                </div>
            </div>
        </>
    )
}