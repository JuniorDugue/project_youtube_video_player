import React from "react";
import {Paper, Typography} from "@material-ui/core";

const VideoDetail = ({video}) => {
  if(!video) return <div>Loading...</div>

console.log(video.id.videoId);

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <div>  
      <h1>This is a Video Detail component</h1>
      <>
        <Paper elevation={6} style={{height: "70%"}}>
        <iframe frameBorder="100" height="100%" width="100%" title="Video Player" src={videoSrc}/>
        </Paper>
        <Paper elevation={6} style={{padding: "15px"}}>
        Paper2
        </Paper>
      </>
    </div>
  )
}

export default VideoDetail;