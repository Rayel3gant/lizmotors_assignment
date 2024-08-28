import { createSlice } from "@reduxjs/toolkit"

import {initialVideoData} from "../../data/Learning"




const initialState={
    videoData:initialVideoData,
    videoTimestamps:[]
}



const lessonSlice=createSlice({
    name:"lesson",
    initialState,
    reducers:{
        updateCompletedVideos:(state,action)=>{
            const id=action.payload;
            if(state.videoData[id].isCompleted===false){
                state.videoData[id].isCompleted=true
                console.log("lecture completed ,move to next")
                console.log(state.videoData[id].isCompleted)
            }           
        },
        updateVideoTimestamps:(state,action)=>{

            const data=action.payload;

            const tempArray=[...state.videoTimestamps]
            

            tempArray.forEach((element)=>{
                if(element.id=== data.id ){
                    element.timestamp=data.timestamp
                    console.log("timestamp updated")
                    return;
                }
            })

            const temp={
                id:data.id,
                timestamp:data.timestamp
            }


            tempArray.push(temp)

            state.videoTimestamps=[...tempArray]

            console.log(state.videoTimestamps)

            console.log("created new entry")


        },
        resetProgress:(state)=>{
            state.loading=false
            // state.videoData=[...initialVideoData],
            state.currentLesson=0

            
        }

    }
})


export const {  updateCompletedVideos , updateVideoTimestamps , resetProgress }=lessonSlice.actions




export default lessonSlice.reducer