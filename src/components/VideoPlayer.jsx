import React, { useEffect, useRef } from 'react'
import VideoJS from './VideoJS';
import videojs from 'video.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompletedVideos, updateVideoTimestamps} from "../redux/slices/lessonSlice"

const VideoPlayer = ({data}) => {
    const playerRef = useRef(null);
    const { videoTimestamps } =useSelector((state)=>state.lesson)

    let videoTime=0;

    const dispatch=useDispatch()
    const video=data.lectureVideo

    const videoJsOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
        src: video,
        type: 'video/mp4'
        }]
    };

    useEffect(()=>{
        videoTimestamps.forEach(element => {
            if(element.id=== data.id){
                videoTime=element.timestamp
            }
        });
    },[videoTimestamps])

    const handlePlayerReady = (player) => {
        playerRef.current = player;


        player.controlBar.progressControl.disable();
        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });

        player.on('ended',()=>{
            videojs.log('video ended');
            dispatch(updateCompletedVideos(data.id))
        })

        player.on('play',()=>{
            console.log("starting play from ",videoTime)
            player.currentTime(videoTime)

            player.off('play')
        })

        player.on('pause',()=>{
            videojs.log('video paused');
            const timestamp=player.currentTime()
            const id=data.id

            console.log("paused at ",timestamp)
            dispatch(updateVideoTimestamps({
                id,
                timestamp
            }))


        })

        

    };


    return (
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    )
}

export default VideoPlayer