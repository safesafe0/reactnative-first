import React from 'react';
import { 
  StyleSheet,
  View, 
} from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

function TimeLineScreen (props){
  return (
    <View style={styles.container}>
      <MemoList onPress={()=>props.navigation.navigation('Detail')}/>
      <CircleButton onPress={() => props.navigation.navigate('Post')}>add-circle</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  },
});
export default TimeLineScreen;