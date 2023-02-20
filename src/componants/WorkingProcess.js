import React from 'react';
import {FiBookmark} from 'react-icons/fi';
import{MdPersonSearch}from 'react-icons/md';
import {GiRibbonMedal}from 'react-icons/gi';
function WorkingProcess(props) {
    return (
        <section className='section-Working'>
        <div className="container py-5 h-100" id='Working-main-dev'>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10 "  >
                   <h1>Working Process for</h1>
                   <h1>Join & Benifts</h1>
                   <div className="card" style={{borderStyle:'none'}}>
                            <div className="row g-0"  style={{marginTop:'2%'}}>
                                <div className="col-md-6 col-lg-4 d-flex align-items-center" >
                                    <div className="card-body p-2 p-lg-2"style={{marginTop:'8%'}}>
                                    <MdPersonSearch className='Working-icon'/>
                                       <p className='Working-Title'>Find Course</p>
                                        <p className='Working-p'>We Have helped over 2,300 New Students to get into the most popular tech team</p>



                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-4  d-md-block" >
                                <div className="card-body p-2 p-lg-2"style={{marginTop:'8%'}}>
                                        <FiBookmark className='Working-icon'/>
                                        {/* <img src='https://i.ibb.co/Twxq46t/certificate.png'className='Working-icon'/> */}
                                       <p className='Working-Title'>Book Your Seat</p>
                                        <p className='Working-p'>We Have helped over 2,300 New Students to get into the most popular tech team</p>



                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4  d-md-block" >
                                <div className="card-body p-2 p-lg-2"style={{marginTop:'8%'}}>
                                        <GiRibbonMedal className='Working-icon'/>
                                       <p className='Working-Title'>Get Certificate</p>
                                        <p className='Working-p'>We Have helped over 2,300 New Students to get into the most popular tech team</p>



                                    </div>
                                </div>

                            </div>
                        </div>
                    </div></div></div></section>
    );
}

export default WorkingProcess;