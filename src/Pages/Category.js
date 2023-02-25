import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
import { useParams } from 'react-router-dom';
import {MDBRow } from 'mdb-react-ui-kit';
import '../stylling/Courses.css'
import CoursesCard from '../componants/CoursesCard';

function Category(props) {
    const nameOfLocation=useParams();
    console.log(nameOfLocation)
    const dispatch = useDispatch();
    const CourseData = useSelector(state => state.fetchAllData);
    const LinkData='Courses'
    useEffect(() => {
        dispatch(fetchData(LinkData))

    }, [dispatch])
    const GetCourseData = CourseData.data;
    return (
        
        <section className='section-Home'>
        <div className="container py-5 h-100" id='courses-main-card'>
            <div className="row d-flex justify-content-center align-items-center h-100" >
                <div className="col col-xl-10 " >
        <MDBRow className='row-cols-1 row-cols-md-3 g-5'>
            {GetCourseData === null||GetCourseData.length===0?null:
            GetCourseData.map((data)=>
            data.MainCategory===nameOfLocation.name&&
            <CoursesCard Data={data} key={data.id}/>
            )}
            
        </MDBRow>
        </div></div></div></section>
    
    );
}

export default Category;