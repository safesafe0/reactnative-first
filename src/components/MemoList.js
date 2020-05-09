import React from 'react';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableHighlight,
} from 'react-native';

function MemoList(props) {
  return (
    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>タイトル</Text>
        <Text style={styles.memoDate}>2020/05/05</Text>
      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>タイトル</Text>
        <Text style={styles.memoDate}>2020/05/05</Text>
      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>タイトル</Text>
        <Text style={styles.memoDate}>2020/05/05</Text>
      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>タイトル</Text>
        <Text style={styles.memoDate}>2020/05/05</Text>
      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>タイトル</Text>
        <Text style={styles.memoDate}>2020/05/05</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    marginLeft:30,
    marginRight:30,
    marginTop:10,
    marginBottom:5,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
