// import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// to ref jscript object in jsx, use {}
const Header = (props) => { //props is the javascript obj
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle} > { props.headerText } </Text>
      </View>
    );
};

// styles is an object
// view - justifyContent == vertical - allignItems -- horizontal
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

// Make the component available to other parts of the app
export default Header;
