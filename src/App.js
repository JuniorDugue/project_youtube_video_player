import React from "react";

import {Grid} from "@material-ui/core";
import youtube from "./api/youtube";
// import {SearchBar, VideoList, VideoDetail} from "./components";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
// import VideoList from "./components/VideoList";

class App extends React.Component{
  state = {
    video: [],
    selectedVideo: null,
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
      part: "snippet",
      maxResults: 5,
      key: "AIzaSyCtjQjr-nB0s8yTjkbFEUNOQPPOi3qmvv0",
      q: searchTerm,
    }
  });
    
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] })
    // console.log(response.data.items);
  }

  render(){
    const {selectedVideo} = this.state;
    return(
      <Grid justify="center" container spacing={10}>
        <h1>YouTube Clone App</h1>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>            
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              {/* <VideoList/> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;