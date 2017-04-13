import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyAsWNHHfXrYdKE4kZNUqSTnk8dq95-Kaag';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      // console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      }); // videos: videos -> videos
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
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

