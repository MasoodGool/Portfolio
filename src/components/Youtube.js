import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import SearchBar from "./youtube/search_bar";
import VideoList from "./youtube/video_list";
import VideoDetail from "./youtube/video_detail";

const API_KEY = "AIzaSyBkfqwWOZsXJDx6AesDYEI4FkiNb0v7nDs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
