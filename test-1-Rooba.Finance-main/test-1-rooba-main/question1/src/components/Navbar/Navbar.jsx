import logo from '../../assets/images/Logo_Back_1.svg';
import './navStyles.css'
export default function Navbar() {
    return (
        <>
            <div className="nav-sidebar">
                <div className='logo-area'><img className='logo' src={logo} alt='logo'></img></div>
                <div className='nav-option'><span className='nav-text'>Cart</span></div>
                <div className='nav-option'><span className='nav-text'>Market</span></div>
                <div className='nav-option'><span className='nav-text'>Setting</span></div>
                <div className='nav-option'><span className='nav-text'>Logout</span></div>
            </div>
        </>
        
    )
}