import { combineReducers } from "@reduxjs/toolkit";
import lessonReducer from "./slices/lessonSlice"


const rootReducer=combineReducers({
    lesson:lessonReducer
})

export default rootReducer


