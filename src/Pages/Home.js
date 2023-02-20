import React from 'react';
import '../stylling/Home.css';
import WorkingProcess from '../componants/WorkingProcess';
function Home(props) {
    return (
        <>
        <section className='section-Home'>
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 "  >
                        <div className="card" id='Home-BackGround' style={{width:'110%'}}>
                            <div className="row g-0" id='Home-BackGround' style={{width:'110%'}}>
                                <div className="col-md-6 col-lg-5 d-flex align-items-center" >
                                    <div className="card-body p-2 p-lg-2"style={{marginTop:'8%'}}>
                                        <h1 className='Home-Title'>Let's Grow Your<br />
                                            Education Level up<br />
                                            With Education
                                        </h1>
                                        <p className='Home-p'>Learn anytime anywhere with expert</p>

                                        


                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-7  d-md-block" >
                                    <img src='https://i.ibb.co/Ytpwyzd/homeimg-removebg-preview.png'
                                        alt="login form" className="img-fluid" id='Home-img' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <WorkingProcess/>
        </>
    );
}

export default Home;