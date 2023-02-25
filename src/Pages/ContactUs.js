import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
function ContactUs(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pvcdhsv', 'template_6bjba5v', e.target, 'fKQdWtm_noYx9mxEp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section>
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 "  >
                        <div className="card" id='Home-BackGround' style={{ width: '110%' }}>
                            <div className="row g-0" id='Home-BackGround' style={{ width: '110%' }}>
                                <div className="col-md-6 col-lg-12 d-flex align-items-center" >
                                    <div className="card-body p-2 p-lg-2" style={{ marginTop: '2%', textAlign: 'center' }}>
                                        <h1>ContactUs</h1>
                                        <h5 style={{ margin: '2% 0%' }}>Please send your message in to contact us</h5>
                                        <Form ref={form} onSubmit={sendEmail}>
                                            <Form.Group className="mb-3" id='contact-us-input'>
                                                <Form.Control type="text" placeholder="Enter your name"name="name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" id='contact-us-input'>
                                                <Form.Control type="email" placeholder="Enter your email" name="email"/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" id='contact-us-input'>
                                                <Form.Control as="textarea" rows={2} placeholder="Enter you message" name="message" />
                                            </Form.Group>

                                            <input type="submit" value="Send Email" className='contact-us-btn' />
                                        </Form>
                                        

                                       





                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ContactUs;