import './navbar.css'
import logo from '../assets/images/logo.png'

function Header (){
    return (
        <>
        <nav className="header d-none d-md-block">
            <div  className='d-flex justify-content-center align-items-center text-light'>
                <img src={logo} className='logo_img mb-5'/>
                <h3 className='mt-3 ms-2 fw-bold'> MyBindle</h3>
            </div>
        </nav>
        </>
    )
}

export default Header;