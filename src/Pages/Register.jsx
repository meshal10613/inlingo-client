import Lottie from 'lottie-react';
import React from 'react';
import RegisterJson from "../assets/signup.json"
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import useAuthContext from '../Hooks/useAuthContext';
import { Bounce, toast } from 'react-toastify';

const Register = () => {
    const { setUser, RegisterUser, UpdateUser } = useAuthContext();

    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, name, photo} = Object.fromEntries(formData.entries());

        RegisterUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            const updateInfo = {
                displayName: name, 
                photoURL: photo,
            };
            UpdateUser(updateInfo)
            .then(
                setUser({...user, ...updateInfo}),
                toast.success('Register successfully', {
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
            )
            .catch((error) => {
                setUser(user);
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
                });
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
            });
        })
    };

    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-20 md:mt-32'>
            <Link to="/" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] mb-3 inline-flex items-center justify-center'> <FaArrowLeft />Back to Home</Link>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-40">
                <div>
                    <Lottie animationData={RegisterJson} loop={true} style={{width: "250px"}}/>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegisterBtn} className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Enter Your Name" />
                            {/* Photo */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Enter Your Photo URL" />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p className='text-[14px]'>Don't have an account? Please <Link to="/login" className='link link-hover text-[#7F3D27]'>Login</Link></p>
                            <button type='submit' className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] mt-4'>Register</button>
                        </form>
                        <div className="divider">Or</div>
                        {/* Google */}
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;