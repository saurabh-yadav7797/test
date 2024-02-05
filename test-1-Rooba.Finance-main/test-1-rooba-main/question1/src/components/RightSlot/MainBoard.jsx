import unsplash from '../../assets/images/unsplash.png';
import map from '../../assets/images/why_invest.png';
import Steps from '../Steps';
import { useState } from 'react';
export default function MainBoard() {
    const maskStyle = {
        maskType: 'alpha',
    };
    const [stepsEnabled, setStepsEnabled] = useState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6:false,
      });
    
      const handleToggleStep = (step) => {
        setStepsEnabled((prevSteps) => ({
          ...prevSteps,
          [step]: !prevSteps[step],
        }));
        if (!stepsEnabled[step] && stepsEnabled[`step${parseInt(step[4]) + 1}`] !== undefined) {
            setStepsEnabled((prevSteps) => ({
              ...prevSteps,
              [`step${parseInt(step[4]) + 1}`]: true,
            }));
          }
      };
    return (
        <>
            <div className="main-board-main">
                <div className="breadcrumb d-flex">
                    <div className="paths d-flex flex-direction-row align-items-center">
                        <span className="breadcrumb-text">jMarket</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <mask id="mask0_275_170" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                <rect width="18" height="18" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_275_170)">
                                <path d="M6.01875 16.5L4.6875 15.1688L10.8563 9L4.6875 2.83125L6.01875 1.5L13.5188 9L6.01875 16.5Z" fill="#7C7C7C" />
                            </g>
                        </svg>
                    </div>
                    <div className="paths d-flex flex-direction-row align-items-center">
                        <span className="breadcrumb-text">Category 1</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <mask id="mask0_275_170" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                <rect width="18" height="18" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_275_170)">
                                <path d="M6.01875 16.5L4.6875 15.1688L10.8563 9L4.6875 2.83125L6.01875 1.5L13.5188 9L6.01875 16.5Z" fill="#7C7C7C" />
                            </g>
                        </svg>
                    </div>
                    <div className="paths d-flex flex-direction-row align-items-center">
                        <span className="breadcrumb-text">Theme park site</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <mask id="mask0_275_170" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                <rect width="18" height="18" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_275_170)">
                                <path d="M6.01875 16.5L4.6875 15.1688L10.8563 9L4.6875 2.83125L6.01875 1.5L13.5188 9L6.01875 16.5Z" fill="#7C7C7C" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='img-main'>
                    <img src={unsplash} alt={'alt-text'} />
                </div>
                <div className='priority-info d-flex flex-direction-row'>
                    <div className='priority-left d-flex flex-direction-column'>
                        <div className='theme-text'>Theme Park Site</div>
                        <div className='d-flex flex-direction-row theme-location'>
                            <svg className='location-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                <path d="M7 12.5H9V9.5H12V7.5H9V4.5H7V7.5H4V9.5H7V12.5ZM8 17.85C10.0333 15.9833 11.5417 14.2875 12.525 12.7625C13.5083 11.2375 14 9.88333 14 8.7C14 6.88333 13.4208 5.39583 12.2625 4.2375C11.1042 3.07917 9.68333 2.5 8 2.5C6.31667 2.5 4.89583 3.07917 3.7375 4.2375C2.57917 5.39583 2 6.88333 2 8.7C2 9.88333 2.49167 11.2375 3.475 12.7625C4.45833 14.2875 5.96667 15.9833 8 17.85ZM8 20.5C5.31667 18.2167 3.3125 16.0958 1.9875 14.1375C0.6625 12.1792 0 10.3667 0 8.7C0 6.2 0.804167 4.20833 2.4125 2.725C4.02083 1.24167 5.88333 0.5 8 0.5C10.1167 0.5 11.9792 1.24167 13.5875 2.725C15.1958 4.20833 16 6.2 16 8.7C16 10.3667 15.3375 12.1792 14.0125 14.1375C12.6875 16.0958 10.6833 18.2167 8 20.5Z" fill="#1C1B1F" />
                            </svg>
                            <div className='address-text'>Address of the site</div>
                        </div>
                        <div className='location-details'>
                            <div className='tagpip'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <mask id="mask0_275_266" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                        <rect width="16" height="16" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_275_266)">
                                        <path d="M7.03329 12.1333L10.4833 8.00001H7.81663L8.29996 4.21668L5.21663 8.66668H7.53329L7.03329 12.1333ZM5.33329 14.6667L5.99996 10H2.66663L8.66663 1.33334H9.99996L9.33329 6.66668H13.3333L6.66663 14.6667H5.33329Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                                <span>Adult rides</span>
                            </div>

                            <div className='tagpip'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <mask id="mask0_275_151" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                        <rect width="16" height="16" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_275_151)">
                                        <path d="M7.99996 14.3333C6.52218 14.3333 5.26385 13.8222 4.22496 12.8C3.18607 11.7777 2.66663 10.5333 2.66663 9.06663C2.66663 8.36663 2.80274 7.69718 3.07496 7.05829C3.34718 6.4194 3.73329 5.85552 4.23329 5.36663L7.99996 1.66663L11.7666 5.36663C12.2666 5.85552 12.6527 6.4194 12.925 7.05829C13.1972 7.69718 13.3333 8.36663 13.3333 9.06663C13.3333 10.5333 12.8138 11.7777 11.775 12.8C10.7361 13.8222 9.47774 14.3333 7.99996 14.3333ZM7.99996 13C9.11107 13 10.0555 12.6194 10.8333 11.8583C11.6111 11.0972 12 10.1666 12 9.06663C12 8.5444 11.9 8.04718 11.7 7.57496C11.5 7.10274 11.2111 6.68885 10.8333 6.33329L7.99996 3.53329L5.16663 6.33329C4.78885 6.68885 4.49996 7.10274 4.29996 7.57496C4.09996 8.04718 3.99996 8.5444 3.99996 9.06663C3.99996 10.1666 4.38885 11.0972 5.16663 11.8583C5.9444 12.6194 6.88885 13 7.99996 13Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                                <span>Family rides</span>
                            </div>
                            <div className='tagpip'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <mask id="mask0_275_42" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                        <rect width="16" height="16" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_275_42)">
                                        <path d="M2.66663 6C2.47774 6 2.3194 5.93611 2.19163 5.80834C2.06385 5.68056 1.99996 5.52222 1.99996 5.33334C1.99996 5.14445 2.06385 4.98611 2.19163 4.85834C2.3194 4.73056 2.47774 4.66667 2.66663 4.66667H4.66663C5.03329 4.66667 5.34718 4.79722 5.60829 5.05834C5.8694 5.31945 5.99996 5.63334 5.99996 6H2.66663ZM3.99996 12C4.55552 12 5.02774 11.8056 5.41663 11.4167C5.80551 11.0278 5.99996 10.5556 5.99996 10C5.99996 9.44445 5.80551 8.97222 5.41663 8.58334C5.02774 8.19445 4.55552 8 3.99996 8C3.4444 8 2.97218 8.19445 2.58329 8.58334C2.1944 8.97222 1.99996 9.44445 1.99996 10C1.99996 10.5556 2.1944 11.0278 2.58329 11.4167C2.97218 11.8056 3.4444 12 3.99996 12ZM13 12C13.2777 12 13.5138 11.9028 13.7083 11.7083C13.9027 11.5139 14 11.2778 14 11C14 10.7222 13.9027 10.4861 13.7083 10.2917C13.5138 10.0972 13.2777 10 13 10C12.7222 10 12.4861 10.0972 12.2916 10.2917C12.0972 10.4861 12 10.7222 12 11C12 11.2778 12.0972 11.5139 12.2916 11.7083C12.4861 11.9028 12.7222 12 13 12ZM3.99996 11C3.72218 11 3.48607 10.9028 3.29163 10.7083C3.09718 10.5139 2.99996 10.2778 2.99996 10C2.99996 9.72222 3.09718 9.48611 3.29163 9.29167C3.48607 9.09722 3.72218 9 3.99996 9C4.27774 9 4.51385 9.09722 4.70829 9.29167C4.90274 9.48611 4.99996 9.72222 4.99996 10C4.99996 10.2778 4.90274 10.5139 4.70829 10.7083C4.51385 10.9028 4.27774 11 3.99996 11ZM13.3333 8.68334C13.6222 8.73889 13.8611 8.81389 14.05 8.90834C14.2388 9.00278 14.4444 9.15556 14.6666 9.36667V5.33334C14.6666 4.96667 14.5361 4.65278 14.275 4.39167C14.0138 4.13056 13.7 4 13.3333 4H9.13329L8.43329 3.26667L9.36663 2.33334L8.89996 1.86667L6.53329 4.23334L7.03329 4.7L7.96663 3.76667L8.66663 4.46667V6C8.66663 6.36667 8.53607 6.68056 8.27496 6.94167C8.01385 7.20278 7.69996 7.33334 7.33329 7.33334H5.98329C6.23885 7.52222 6.4444 7.71667 6.59996 7.91667C6.75552 8.11667 6.91107 8.36667 7.06663 8.66667H7.33329C8.06663 8.66667 8.6944 8.40556 9.21663 7.88334C9.73885 7.36111 9.99996 6.73334 9.99996 6V5.33334H13.3333V8.68334ZM10.6833 10.6667C10.75 10.3667 10.8305 10.125 10.925 9.94167C11.0194 9.75834 11.1666 9.55556 11.3666 9.33334H7.26663C7.31107 9.58889 7.33329 9.81111 7.33329 10C7.33329 10.1889 7.31107 10.4111 7.26663 10.6667H10.6833ZM13 13.3333C12.3555 13.3333 11.8055 13.1056 11.35 12.65C10.8944 12.1944 10.6666 11.6444 10.6666 11C10.6666 10.3556 10.8944 9.80556 11.35 9.35C11.8055 8.89445 12.3555 8.66667 13 8.66667C13.6444 8.66667 14.1944 8.89445 14.65 9.35C15.1055 9.80556 15.3333 10.3556 15.3333 11C15.3333 11.6444 15.1055 12.1944 14.65 12.65C14.1944 13.1056 13.6444 13.3333 13 13.3333ZM3.99996 13.3333C3.07774 13.3333 2.29163 13.0083 1.64163 12.3583C0.991626 11.7083 0.666626 10.9222 0.666626 10C0.666626 9.07778 0.991626 8.29167 1.64163 7.64167C2.29163 6.99167 3.07774 6.66667 3.99996 6.66667C4.92218 6.66667 5.70829 6.99167 6.35829 7.64167C7.00829 8.29167 7.33329 9.07778 7.33329 10C7.33329 10.9222 7.00829 11.7083 6.35829 12.3583C5.70829 13.0083 4.92218 13.3333 3.99996 13.3333Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                                <span>Restaurants</span>
                            </div>
                            <div className='tagpip'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <mask id="mask0_275_99" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                        <rect width="16" height="16" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_275_99)">
                                        <path d="M1.33337 14V4L4.00004 2L6.00004 3.5L8.00004 2L10 3.5L12 2L14.6667 4V14H1.33337ZM2.66671 12.6667H5.33337V4.66667L4.00004 3.66667L2.66671 4.66667V12.6667ZM6.66671 12.6667H9.33337V4.66667L8.00004 3.66667L6.66671 4.66667V12.6667ZM10.6667 12.6667H13.3334V4.66667L12 3.66667L10.6667 4.66667V12.6667Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                                <span>Premium</span>
                            </div>
                        </div>
                        <div className='link'>
                            <div className='link-cta'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <mask id="mask0_275_196" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                        <rect width="16" height="16" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_275_196)">
                                        <path d="M3.59947 13.3333L2.66614 12.3999L10.3995 4.66662H5.99947V3.33328H12.6661V9.99995H11.3328V5.59995L3.59947 13.3333Z" fill="#4375FB" />
                                    </g>
                                </svg>
                                <span className='link-text'>View opportunity on polygon</span>
                            </div>

                        </div>
                        <div className='site-info'>
                            <div><span className='site-up'>200 Acre</span> <span className='site-down'>Area</span></div>
                            <div><span className='site-up'>5 Lacks</span> <span className='site-down'>Starting price</span></div>
                            <div><span className='site-up'>10 Days</span> <span className='site-down'>Remaining days</span></div>
                            <div><span className='site-up'>2.5 years</span> <span className='site-down'>Not check</span></div>
                        </div>
                    </div>
                    <div className=' priority-right d-flex flex-direction-column'>
                        <div className='button-left'>
                            <button className='complete-button'>Complete</button>
                        </div>

                        <div className='button-left'>
                            <button className='site-visit'>
                                <span>Site visit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <mask id="mask0_275_250" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                        <rect x="12" y="12" width="12" height="12" transform="rotate(-180 12 12)" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_275_250)">
                                        <path d="M4 0.999998L9 6L4 11L3.1125 10.1125L7.225 6L3.1125 1.8875L4 0.999998Z" fill="#4375FB" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className='d-flex flex-direction-column'>
                            <div className='status-bar'>
                                <span className='amount'>Rs 20,00,000</span>
                                <span className='amount-light'>Rs 65.00,000</span>
                            </div>
                            <div className='rectangle d-flex felx-direction-row'>
                                <div className='rectangle-blue'> </div>
                                <div className='rectangle-grey'></div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='bottom-component d-flex flex-direction-row'>
                    <div className='overview d-flex flex-direction-column'>
                        <div className='overview-item'>
                            <h2 className=''>Overview</h2>
                            <p>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
                        </div>
                        <div className='overview-item'>
                            <h2 className=''>Why ?</h2>
                            <p>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
                        </div>
                        <div className='overview-item'>
                            <h2 className=''>What ?</h2>
                            <p>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
                        </div>
                        <div className='overview-item'>
                            <h2 className=''>Landmarks</h2>
                            <div className='landmarks'>
                                <div className='landmark-items'>
                                    <div className='landmark-items-left'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                                            <mask id="mask0_275_388" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="27">
                                                <rect y="0.88916" width="24" height="26" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_275_388)">
                                                <path d="M8.5 24.7225V23.0975L10.5 21.4725V15.5141L2 18.2225V16.0558L10.5 10.6391V4.68082C10.5 4.22943 10.6458 3.84575 10.9375 3.52977C11.2292 3.2138 11.5833 3.05582 12 3.05582C12.4167 3.05582 12.7708 3.2138 13.0625 3.52977C13.3542 3.84575 13.5 4.22943 13.5 4.68082V10.6391L22 16.0558V18.2225L13.5 15.5141V21.4725L15.5 23.0975V24.7225L12 23.6391L8.5 24.7225Z" fill="#4375FB" />
                                            </g>
                                        </svg>
                                        <span>Airport</span>
                                    </div>
                                    <div className='landmark-items-right'>
                                        <span className='site-up'>100km</span>
                                        <span className='site-down'>Airport</span>
                                    </div>
                                </div>
                                <div className='landmark-items'>
                                    <div className='landmark-items-left'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                                            <mask id="mask0_275_388" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="27">
                                                <rect y="0.88916" width="24" height="26" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_275_388)">
                                                <path d="M8.5 24.7225V23.0975L10.5 21.4725V15.5141L2 18.2225V16.0558L10.5 10.6391V4.68082C10.5 4.22943 10.6458 3.84575 10.9375 3.52977C11.2292 3.2138 11.5833 3.05582 12 3.05582C12.4167 3.05582 12.7708 3.2138 13.0625 3.52977C13.3542 3.84575 13.5 4.22943 13.5 4.68082V10.6391L22 16.0558V18.2225L13.5 15.5141V21.4725L15.5 23.0975V24.7225L12 23.6391L8.5 24.7225Z" fill="#4375FB" />
                                            </g>
                                        </svg>
                                        <span>Airport</span>
                                    </div>
                                    <div className='landmark-items-right'>
                                        <span className='site-up'>25km</span>
                                        <span className='site-down'>Green Which Terminal</span>
                                    </div>
                                </div>
                                <div className='landmark-items'>
                                    <div className='landmark-items-left'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                                            <mask id="mask0_275_410" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="27">
                                                <rect y="0.88916" width="24" height="26" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_275_410)">
                                                <path d="M18 25.8058V22.5558H15V20.3891H18V17.1391H20V20.3891H23V22.5558H20V25.8058H18ZM18 14.9725V5.22247H20V14.9725H18ZM4 22.5558V5.22247H6V22.5558H4ZM11 9.55581V5.22247H13V9.55581H11ZM11 16.0558V11.7225H13V16.0558H11ZM11 22.5558V18.2225H13V22.5558H11Z" fill="#4375FB" />
                                            </g>
                                        </svg>
                                        <span>Highway</span>
                                    </div>
                                    <div className='landmark-items-right'>
                                        <span className='site-up'>100km</span>
                                        <span className='site-down'>Highway number 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overview-item'>
                            <h2 className=''>Map</h2>
                            <img src={map} alt="" />
                            <div className='call-button'>
                                <button>
                                    <span>Schedule a call</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                        <mask id="mask0_275_175" style={maskStyle} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="13">
                                            <rect x="12" y="12.3892" width="12" height="12" transform="rotate(-180 12 12.3892)" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_275_175)">
                                            <path d="M4 1.38916L9 6.38916L4 11.3892L3.1125 10.5017L7.225 6.38916L3.1125 2.27666L4 1.38916Z" fill="#4375FB" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <button></button>
                        </div>
                    </div>
                    <div className='steps-container d-flex flex-direction-column'>
                    <Steps label={'Complete Profile'} enabled={stepsEnabled.step1} onToggle={() => handleToggleStep('step1')} />
      <Steps label={'Step 1'} enabled={stepsEnabled.step1 && stepsEnabled.step2} onToggle={() => handleToggleStep('step2')} />
      <Steps label={'Step 2'} enabled={stepsEnabled.step2 && stepsEnabled.step3} onToggle={() => handleToggleStep('step3')} />
      <Steps label={'Step 3'} enabled={stepsEnabled.step3 && stepsEnabled.step4} onToggle={() => handleToggleStep('step4')} />
      <Steps label={'Step 4'} enabled={stepsEnabled.step4 && stepsEnabled.step5} onToggle={() => handleToggleStep('step5')} />
      <Steps label={'Step 5'} enabled={stepsEnabled.step5 && stepsEnabled.step6} onToggle={() => handleToggleStep('step6')} />
                    </div>
                </div>
            </div>

        </>
    )
}