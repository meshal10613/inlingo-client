import React from 'react';
import LoginJson from '../assets/login.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import useAuthContext from '../Hooks/useAuthContext';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const { LoginUser, setUser, LoginWithGoogle } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password} = Object.fromEntries(formData.entries());

        LoginUser(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            const serverData = {
                email: email,
                lastSignInTime: user?.metadata?.lastSignInTime
            };
            axios.patch("https://assignment-11-server-omega-vert.vercel.app/users", serverData)
            .then((result) => {
                if(result.data.modifiedCount){
                    toast.success('Login successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                }
                navigate( location.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            })
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        })
    };

    const handleGoogleLogin = () => {
        LoginWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            const serverData = {
                email: user.email,
                lastSignInTime: user?.metadata?.lastSignInTime
            };
            axios.patch("https://assignment-11-server-omega-vert.vercel.app/users", serverData)
            .then((result) => {
                if(result.data.modifiedCount){
                    toast.success('Login successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                }
                navigate( location.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            })
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        })
    };

    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-20 md:mt-32 '>
            <Link to="/" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] mb-3 inline-flex items-center justify-center'> <FaArrowLeft />Back to Home</Link>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-40">
                <div>
                    <Lottie animationData={LoginJson} loop={true} style={{width: "250px"}}/>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLoginBtn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p className='text-[14px]'>Already have an account? Please <Link to="/register" className='link link-hover text-[#7F3D27]'>Register</Link></p>
                            <button type='submit' className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Login</button>
                        </form>
                        <div className="divider">Or</div>
                        {/* Google */}
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;