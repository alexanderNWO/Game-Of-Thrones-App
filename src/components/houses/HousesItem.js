import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Colors from '../../res/colors';

const HousesItem = ({item, onPress}) => {
  getImgDeadAlive = () => {
    if (item.currentLord == '') {
      return require('cryptoTracker/src/assets/alive.png');
    } else {
      return require('cryptoTracker/src/assets/dead.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        {/*<Text style={styles.regionText}>{item.region}</Text>*/}
        <Text style={styles.regionText}>{item.name}</Text>
      </View>
      <View style={styles.row}>
        <Image style={styles.imgIcon} source={getImgDeadAlive()} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  regionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  housesText: {
    color: '#fff',
    fontSize: 14,
  },
  coatArmsText: {
    color: '#fff',
    fontSize: 12,
  },
  imgIcon: {
    width: 70,
    height: 30,
  },
});

export default HousesItem;
