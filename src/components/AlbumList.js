import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class based Component
// Used for dynamic sources of data
// Handles data that might change
// Knows when it gets erendered to the device (useful for data fetching) -- lifecycle methods
// More code to write

class AlbumList extends Component {
  state = { albums: [] };
  // automatically executed when component is about to be rendered
   componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseJson) => { this.setState({ albums: responseJson }); });
  }

  renderAlbums() {
    return this.state.map(album => <AlbumDetail key={album.title} album={album} />);
  }
  // Must define the render method
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumList;
