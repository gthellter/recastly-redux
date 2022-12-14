import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import store from '../store/store.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';

class App extends React.Component {

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoListContainer />
          </div>
          <div className="col-md-5">
            <VideoPlayerContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;