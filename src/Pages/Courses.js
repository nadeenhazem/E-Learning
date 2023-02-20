import React from 'react';
import {MDBRow } from 'mdb-react-ui-kit';
import '../stylling/Courses.css'
import CoursesCard from '../componants/CoursesCard';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
function Courses(props) {
    const dispatch = useDispatch();
    const CourseData = useSelector(state => state.fetchAllData);
    const LinkData='Courses'
    useEffect(() => {
        dispatch(fetchData(LinkData))

    }, [dispatch])
    const GetCourseData = CourseData.data;
    return (
        <section >
        <div className="container py-5 h-100" >
            <div className='Courses-header-dev'>
            <p className='Courses-Header'>Our Popular Courses</p>
            <p className='Courses-p'>Online Education Platform is very easy way to learn anything from anywhere,Now a days</p>
            </div>
            <div className="row d-flex justify-content-center align-items-center h-100" >
                <div className="col col-xl-10 " >
        <MDBRow className='row-cols-1 row-cols-md-3 g-5'>
            {
            GetCourseData.map((data)=><CoursesCard Data={data} key={data.id}/>)}
            
            
        </MDBRow>
        </div></div></div></section>
    );
}

export default Courses;