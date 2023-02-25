import React from 'react';
import {MDBCard,MDBCardImage,MDBCardTitle,MDBCardText,MDBCol} from 'mdb-react-ui-kit';
  import {BsFillArrowRightCircleFill}  from 'react-icons/bs';
  import { Link } from 'react-router-dom';
  function CoursesCard(props) {
    return (
      
        <MDBCol >
            <MDBCard className='h-100' id='course-card' >
              <MDBCardImage
                src={props.Data.img}
                alt='...'
                position='top'
                id='course-img'
              />
              
                <div >
                <MDBCardTitle className='Course-Title'>{props.Data.Category} </MDBCardTitle>
                <MDBCardTitle className='Course-price'> {props.Data.price}</MDBCardTitle>
                </div>
                <MDBCardText className='Course-name'>
                {props.Data.Category} <span style={{color:'#FC7614'}}>|</span> {props.Data.name}
                </MDBCardText>
<div>
                <MDBCardText className='Course-lesson'>
                  <img src='https://i.ibb.co/6HQJLxM/lesson.jpg' alt='lesson'className='course-lesson-img'/>
                  {props.Data.Lessons}
                </MDBCardText>
                <MDBCardText className='Course-online'>
                  <img src='https://i.ibb.co/mNgrVWn/online2.png' alt='online'className='course-online-img'/>
                  {props.Data.StatusOfClasses}
                </MDBCardText>

                </div>
              
              <div className='course-line'>
                <MDBCardText className='Course-votes'>
                {props.Data.Votes}
                </MDBCardText>
                
                  <Link to={`/CourseLessons/${props.Data.id}`}className='Course-Link'>
                 <BsFillArrowRightCircleFill />
                 </Link>
                </div>
            </MDBCard>
          </MDBCol>
    );
}

export default CoursesCard;