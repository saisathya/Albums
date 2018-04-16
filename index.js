// Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component, One component per file
const App = () => (
  // Passing props allow components to be reconfiged on the fly
  // 3 step process -- 1. Identify the var or val to be provided by the root
  // 2. Provide a ref to the props from the parent component
  // 3. Make sure that the parent provides the correct prop
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

// Render it to the device -- only the root (App) uses registerComponent
AppRegistry.registerComponent('albums', () => App);
