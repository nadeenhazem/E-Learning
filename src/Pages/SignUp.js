import React from 'react';
import '../stylling/Sign-login.css';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { AddNewData } from '../Redux/Slice/SignupSlice';
function SignUp(props) {
    useSelector(state => state.signup);
    const dispatch = useDispatch();

    const [isShown, setIsSHown] = useState(false);
    const [isShownC, setIsSHownC] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    const togglePasswordC = () => {
        setIsSHownC((isShownC) => !isShownC);
    };






    const [signupUser, setsignupUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm:'',

    })
    const [errors, setErrors] = useState({
        nameErr: null,
        emailErr: null,
        passwordErr: null,
        confirmErr:null,
    })

    const changeData = (e) => {
        if (e.target.name === 'email') {
            setsignupUser({
                ...signupUser,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailErr: e.target.value.length === 0 ?
                    "يجب ادخال البريد الالكتروني" :
                    !(/\S+@\S+\.\S+/.test(e.target.value)) ?
                        "your email is in correct" : null
            })

        }
        if (e.target.name === 'username') {
            setsignupUser({
                ...signupUser,
                name: e.target.value
            })
            setErrors({
                ...errors,
                nameErr: e.target.value.length === 0 ?
                    "You must enter Your Name" : null
            })
        }
        if (e.target.name === 'pass') {
            setsignupUser({
                ...signupUser,
                password: e.target.value
            })
            setErrors({
                ...errors,
                passwordErr: e.target.value.length === 0 ?
                    "You must enter Password" : null
            })
        }
        if (e.target.name === "confirm") {
            setsignupUser({
                ...signupUser,
                confirm: e.target.value
            })


            setErrors({
                confirmErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال اعادة الرقم السري" :
                        e.target.value !== signupUser.password ?
                            "غير متشابهه " : null
            })
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(AddNewData(signupUser))
        window.location.href='/login'
    }
    return (
        <section >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-xl-10 ">
                        <div className="card" id='sign-up-card'>
                            <div className="row g-0" >
                                <div className="col-md-6 col-lg-6 d-flex align-items-center" >
                                    <div className="card-body p-2 p-lg-2">

                                        <form>
                                            <div className="form-floating mb-3">
                                                <p className='sign-login-header'>User Name</p>
                                                <input type="text"
                                                    className="form-control sign-login-input"
                                                    onChange={(e) => changeData(e)}
                                                    name="username" />
                                                <p className="text-danger" style={{ marginLeft: '7%' }}> {errors.nameErr} </p>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <p className='sign-login-header'>Your Email</p>
                                                <input type="text" className="form-control sign-login-input"
                                                    onChange={(e) => changeData(e)}
                                                    name="email" />
                                                <p className="text-danger" style={{ marginLeft: '7%' }}> {errors.emailErr} </p>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <p className='sign-login-header'>Password</p>
                                                <input type={isShown ? "text" : "password"} className="form-control sign-login-input"
                                                    onChange={(e) => changeData(e)}
                                                    name="pass" />
                                                {isShown ? <BsEye onClick={togglePassword} className='showPass' />
                                                    : <BsEyeSlash onClick={togglePassword} className='showPass' />}
                                                <p className="text-danger" style={{ marginLeft: '7%' }}> {errors.passwordErr} </p>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <p className='sign-login-header'>Confirm Password</p>
                                                <input type={isShownC ? "text" : "password"} className="form-control sign-login-input" 
                                                 onChange={(e) => changeData(e)}
                                                 name="confirm" />
                                                {isShownC ? <BsEye onClick={togglePasswordC} className='showPass' />
                                                    : <BsEyeSlash onClick={togglePasswordC} className='showPass' />}
                                                                                                    <p className="text-danger" style={{ marginLeft: '7%' }}> {errors.confirmErr} </p>


                                            </div>


                                            <div className="d-grid">
                                                <button className="sign-login-btn" type="submit"
                                                    onClick={handleChange}
                                                    disabled={errors.emailErr || errors.passwordErr
                                                        ||errors.nameErr||errors.confirmErr}
                                                    >Sign up</button>

                                            </div>

                                        </form>



                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-6  d-md-block" >
                                    <img src='https://i.ibb.co/Q9G5ZfL/signupimg.png'
                                        alt="login form" className="img-fluid" id='sign-up-img'/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;