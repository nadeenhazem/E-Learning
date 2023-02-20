import React, { useEffect } from 'react';
import '../stylling/Sign-login.css';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
function Login(props) {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.fetchAllData);
    const LinkData='Users'
    useEffect(() => {
        dispatch(fetchData(LinkData))

    }, [dispatch])
    const GetSignUp = loginData.data
    const[saveAccess,setSaveAccess]=useState([]);
    localStorage.setItem('Login',JSON.stringify(saveAccess))
     const [LoginUser, setLoginUser] = useState({
        email: '',
        password: '',

    })
    const [errors, setErrors] = useState({
        passwordErr: null,
    })
    const changeData = (e) => {
        if (e.target.name === 'email') {
            setLoginUser({
                ...LoginUser,
                email: e.target.value
            })
        }
        if (e.target.name === 'password') {
            setLoginUser({
                ...LoginUser,
                password: e.target.value
            })
        }

    }

    const handleChange = (e) => {
        e.preventDefault();
        const arrofemails = []
        const arrofPassword = []
        GetSignUp.map((Check) =>
            arrofemails.push(Check.email)
        )
        GetSignUp.map((Check) =>
            arrofPassword.push(Check.password)
        )
        setErrors({
            ...errors,
            
            passwordErr: !arrofPassword.includes(LoginUser.password) ||!arrofemails.includes(LoginUser.email)?
                'email or  Password are Incorrect' :  (window.location.href = '/',setSaveAccess(saveAccess=>saveAccess=LoginUser)   
                )

        })


        

        

    }
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    return (
        <section >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-xl-10 ">
                        <div className="card" id='sign-up-card'>
                            <div className="row g-0" style={{marginTop:'8%',marginBottom:'5%'}}>
                                <div className="col-md-6 col-lg-6 d-flex align-items-center" >
                                    <div className="card-body p-2 p-lg-2">

                                        <form>

                                            <div className="form-floating mb-3">
                                                <p className='sign-login-header'>Your Email</p>
                                                <input type="email" className="form-control sign-login-input"
                                                    onChange={(e) => changeData(e)}
                                                    name="email" />

                                            </div>
                                            <div className="form-floating mb-3">
                                                <p className='sign-login-header'>Password</p>
                                                <input type={isShown ? "text" : "password"} className="form-control sign-login-input"
                                                    onChange={(e) => changeData(e)}
                                                    name="password" />
                                                {isShown ? <BsEye onClick={togglePassword} className='showPass' />
                                                    : <BsEyeSlash onClick={togglePassword} className='showPass' />}
                                                <p className="text-danger" style={{ marginLeft: '7%' }}> {errors.passwordErr} </p>

                                            </div>



                                            <div className="d-grid">
                                                <button className="sign-login-btn" type="submit"
                                                    onClick={handleChange}
                                                    >Login</button>
                                            </div>

                                        </form>



                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-6  d-md-block" >
                                    <img src='https://i.ibb.co/d0xPDWt/loginimg.png'
                                        alt="login form" className="img-fluid" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;