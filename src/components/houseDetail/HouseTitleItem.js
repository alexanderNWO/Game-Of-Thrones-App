import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const HouseTitleItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.titles}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: Colors.zircon,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HouseTitleItem;
