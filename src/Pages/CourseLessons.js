import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { fetchOneCourse } from '../Redux/Slice/OneCourseSlice';
import {AiOutlineArrowRight,AiOutlineArrowDown}  from 'react-icons/ai';

function CourseLessons(props) {
    const dispatch = useDispatch();
    const OneCourse = useSelector(state => state.oneCourse)
    const CourseId = useParams();
    useEffect(() => {
        dispatch(fetchOneCourse(CourseId.id))
    }, [dispatch])
    const OneCourseAllData = OneCourse.data;

    const Lessons = OneCourseAllData.AllLessons;

const Navigate=useNavigate();
    const PageOneLesson=(Data)=>{
        Navigate('/oneCourse',
        {
            state: {Data,Lessons}})
    }
    const [LessonsisShown, setLessonsIsSHown] = useState(false);

    const toggleLessons = () => {
        setLessonsIsSHown((LessonsisShown) => !LessonsisShown);
    };
    return (
        OneCourseAllData === null||OneCourseAllData.length===0?null:
        <section className='section-Courses-Lessons'>
            <div className="container py-5 h-100" >

                <div className="col col-xl-10 "   >
                    <div className="card" id='Courses-Lessons-MainCard'>
                        <div className="row g-0"  >

                            <div className="col-md-6 col-lg-5  d-md-block" >
                                <div className="card" id='Courses-Lessons-img-Card'>
                                    <img src={OneCourseAllData.img} alt='img' className='Courses-Lessons-img' />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6  d-md-block" id='Courses-Lessons-Details'>
                                <h1 >Course Details</h1>
                                <p className='Courses-Lessons-Details-hed'>Name: {OneCourseAllData.name}</p>
                                <p>Price: {OneCourseAllData.price}</p>
                                <p>Classes: {OneCourseAllData.StatusOfClasses}</p>

                            </div></div>
                        <div className="col-md-6 col-lg-12  d-md-block" id='Courses-Lessons-Description'>
                            <div className="card">
                                <h3 >Course Description</h3>
                                <p>{OneCourseAllData.Description}</p>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-12  d-md-block" id='Courses-Lessons-Description'>
                            <div className="card">
                                
                                <p className='OneLesson-p'>
                                {
                                    LessonsisShown?<AiOutlineArrowDown onClick={toggleLessons} 
                                    className='Courses-Lesson-icon'/>:
                                    <AiOutlineArrowRight onClick={toggleLessons}
                                    className='Courses-Lesson-icon'/>
                                }
                                    Course Content
                                    <span style={{ float: 'right' }}> Category: {OneCourseAllData.MainCategory}</span>
                                    </p>
                                 {
                                    LessonsisShown?
                                    Lessons==null?null:
                                    Object.keys(Lessons).map((key) =>
                                    <div className='card' id='Lesson-Card'key={key} onClick={() => { PageOneLesson(Lessons[key],Lessons)}}>
                                        {Lessons[key].name}</div>
                                
                                        ):
                                        null
                                
                                } 
                                

                            </div>
                        </div>
                    </div>

                </div>
            </div></section>
    );
}

export default CourseLessons;