import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayOneCourse from "./componants/DisplayOneCourse";
import Footer from "./componants/Footer";
import NavBarE from "./componants/NavBarE";
import Category from "./Pages/Category";
import ContactUs from "./Pages/ContactUs";
import CourseLessons from "./Pages/CourseLessons";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <NavBarE/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={"/signup"} element={<SignUp/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={"/courses"} element={<Courses/>}/>
      <Route path={"/category/:name"} element={<Category/>}/>
    <Route path={"/CourseLessons/:id"} element={<CourseLessons/>}/>
    <Route path={'/oneCourse'} element={<DisplayOneCourse/>}/>
    <Route path={"/contactus"} element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
