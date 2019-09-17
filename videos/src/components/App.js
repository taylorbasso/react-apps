import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], currentVideo: null }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
