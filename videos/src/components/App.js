import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import YouTube from "../api/YouTube";

class App extends React.Component {
  state = { videos: [], currentVideo: null };

  onSearchSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: { q: term }
    });

    this.setState({ videos: response.data.items })

    console.log("Term: " + term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <VideoDetail />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
