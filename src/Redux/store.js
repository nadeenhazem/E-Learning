import { configureStore } from "@reduxjs/toolkit";
import FetchDataSlice from "./Slice/FetchDataSlice";
import OneCourseSlice from "./Slice/OneCourseSlice";
import SignupSlice from "./Slice/SignupSlice";
const store=configureStore({
    reducer:{
        signup:SignupSlice,
        fetchAllData:FetchDataSlice,
        oneCourse:OneCourseSlice
    }
})
export default store