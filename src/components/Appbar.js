import React from 'react';
import {
  StyleSheet, 
  View, 
  Text,
} from 'react-native';

class Appbar extends React.Component {
  render(){
    return(
    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}>Q-LINE</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor:'#265366',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
  },
  appbarTitle:{
    color:'#fff',
    fontSize:18,
  },
})

export default Appbar;