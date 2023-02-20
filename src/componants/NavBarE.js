import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../stylling/Nav_footer.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarE() {
  const getAccess=JSON.parse(localStorage.getItem('Login'));
  console.log(getAccess);

  const LogOut=()=>{
    localStorage.clear('Login');
    window.location.href = '/';
  }
  
    return (
        <Navbar collapseOnSelect expand="lg" >
      <Container>
      <img src='https://i.ibb.co/wBLnYND/logo.png' className='nav-img'alt='logo'/>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{width:'100%'}}>

            <Link to="/" id='Nav-Word'>Home</Link>
           
            <Link to={ getAccess===null||getAccess.length===0?"/login":"/courses" }
            id='Nav-Word'>Courses</Link>
            <Link to={getAccess===null||getAccess.length===0?"/login":"/contactus"} id='Nav-Word'style={{marginRight:'5%'}}>Contact Us</Link>
            <NavDropdown title="Categories" id='Nav-Word'style={{paddingTop:'1%'}}>
              <NavDropdown.Item href={getAccess===null||getAccess.length===0?"/login":'/category/Ui-Ux'}>UI/UX</NavDropdown.Item>
              
              <NavDropdown.Item href={getAccess===null||getAccess.length===0?"/login":"/category/Frontend Development"}>
              Frontend Development
              </NavDropdown.Item>
             
              <NavDropdown.Item href={getAccess===null||getAccess.length===0?"/login":"/category/BackEnd Development"}>BackEnd Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={getAccess===null||getAccess.length===0?"/login":"/category/other"}>Other</NavDropdown.Item>
              
              
            </NavDropdown>
            {
              getAccess===null||getAccess.length===0?
              <Link to="/login" id='Nav-Word'>Login</Link>:
              <Link to="" id='Nav-Word' onClick={LogOut}>Logout</Link>
            }
            


            <Link to="/signup" id='Create-Account-Nav' >Create Account</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBarE;