import React from 'react';
import '../stylling/Nav_footer.css';
import { HiOutlineMail } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';
function Footer(props) {
    const Support = ['About Us', 'Partenership', 'Finance', 'Finance Experts', 'Product Manager', 'Our Mentors '];
    const Community = ['Events', 'Blogs', 'Forum', 'Podcast', 'Affiliates', 'Invite a Friend'];
    const Categories = ['Front-End Developer', 'ios Developer', 'UX Design', 'UI Design', 'Python', 'Program & Tech '];
    return (
        <section className='section-Footer'>
            <div className="container py-5 h-0" style={{ minWidth: '100%' }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 " >
                        <div className="card" style={{ backgroundColor: ' #E9E8E8', borderStyle: 'none', marginBottom: '2%' }}>
                            <div className="row g-0" >
                                <div className="col-md-6 col-lg-4  d-md-block" >
                                    <img src='https://i.ibb.co/wBLnYND/logo.png' className='footer-img' alt='footer-img' />
                                    <p>Education Wonderful educational platform for you<br /> of my entrie soul
                                        like sweet mornings of <br />spring which i enjoy  with my whole heart.
                                    </p>
                                    <div style={{ marginTop: '2%' }}>
                                        <HiOutlineMail className='footer-icons' />
                                        <p className='footer-p'> info@mail-jobs.com</p>
                                    </div>
                                    <div style={{ marginTop: '2%' }}>
                                        <SlLocationPin className='footer-icons' />
                                        <p className='footer-p'> 9 Street,Maadi City</p>
                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-3  d-md-block" >
                                    <p className='footer-title'>Categories</p>
                                    {
                                        Categories.map((cat) =>
                                            <Link className='footer-Links' key={cat}>{cat}</Link>
                                        )
                                    }

                                </div>
                                <div className="col-md-6 col-lg-3  d-md-block" >
                                    <p className='footer-title'>Community</p>
                                    {Community.map((community) =>
                                        <Link className='footer-Links' key={community}>{community}</Link>)}


                                </div>
                                <div className="col-md-6 col-lg-2  d-md-block" >
                                    <p className='footer-title'>Support</p>
                                    {
                                        Support.map((support) =>
                                            <Link className='footer-Links' key={support}>{support}</Link>
                                        )
                                    }




                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div style={{ textAlign: 'center' }}>
                    <p style={{ marginBottom: '0%' }}>
                        Copyright-2023 AllRight Reserved by Education.com </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;