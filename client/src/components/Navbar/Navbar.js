import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import { setLogin } from '../../Redux/Action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'
const Navbar = () => {
    const { showLogin, showSignup, isLogin, auth } = useSelector((store) => store);
    const dispatch = useDispatch();

    const loginHandler = () => {
        if (!isLogin) {
            setLogin(true, dispatch);
        }

    }
    return (
        <>
            <nav id='navbar'>
                <div>
                    <button className='iconButton'><i className="fa-solid fa-house"></i>Home</button>
                </div>
                <h1>Movie.com</h1>
                <div>
                    {
                        auth.details ? <div id='userContainer'>
                            <div>
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <p>{auth.details.name}</p>
                        </div> : <button className='iconButton' onClick={loginHandler}><i className="fa-solid fa-arrow-right-to-bracket"></i><span>Login</span></button>
                    }
                </div>
            </nav>
            {showLogin ? <Login /> : ""}
            {showSignup ? <Signup /> : ""}
            <ToastContainer
                className='toaster'
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer />
        </>
    )
}

export default Navbar