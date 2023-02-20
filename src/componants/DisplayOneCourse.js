import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import '../stylling/Courses.css';
import { MDBRow } from 'mdb-react-ui-kit';

function DisplayOneCourse(props) {
    const location1 = useLocation()
    const [DataOfCourse, setDataOfCourse] = useState(location1.state.Data)
    const AllLessonForCourse = location1.state.Lessons

    const PageOneLesson = (Data) => {
        setDataOfCourse(Data)
    }




    return (
        <section >
            {
                DataOfCourse == null ? null :
                    <div className="row g-0" >
                        <div className="col-md-6 col-lg-8 d-md-block" >
                            <p className='OneLesson-p'>{DataOfCourse.NameOfMainCourse}{DataOfCourse.name}</p>

                            <div className='OneLesson-Video'>
                                <ReactPlayer url={DataOfCourse.Link} width='90%' height='30rem' />
                            </div>




                        </div>


                        <div className="col-md-6 col-lg-4 d-md-block" >
                            <div className='Table-OfLessons'>
                                <p className='OneLesson-p'style={{paddingTop:'5%'}}>AllLessons</p>
                                <br />

                                {

                                    AllLessonForCourse == null ? null :
                                        Object.keys(AllLessonForCourse).map((key) =>
                                            <div className='card' id='Table-OfLessons-Card'key={key} onClick={() => { PageOneLesson(AllLessonForCourse[key]) }}>
                                                {AllLessonForCourse[key].name}</div>

                                        )

                                }


                            </div>                            </div>

                    </div>
            }
        </section>




    );
}

export default DisplayOneCourse;