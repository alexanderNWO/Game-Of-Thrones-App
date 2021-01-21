import {CardStyleInterpolators} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Http from '../../libs/http';
import HousesItem from './HousesItem';
import Colors from '../../res/colors';
import HousesSearch from './HousesSearch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: 'black',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  loader: {
    marginTop: 60,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

class HousesScreen extends Component {
  state = {
    houses: [],
    allhouses: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.setState({loading: true});
    const res = await Http.instance.get(
      'https://www.anapioficeandfire.com/api/houses',
    );

    this.setState({houses: res, allhouses: res, loading: false});
    console.log(res);
  };

  handlePress = (house) => {
    console.log('Detalle xd');
    // Siguiente ruta:
    this.props.navigation.navigate('HouseDetail', {house});
    // Pasar estado:
    //navigation.navigate('CoinDetail', {someValue: 1});
  };

  handleSearch = (query) => {
    const {allhouses} = this.state;

    const housesFiltered = allhouses.filter((house) => {
      return house.name.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({houses: housesFiltered});
  };

  render() {
    const {houses, loading} = this.state;
    return (
      <View style={styles.container}>
        <HousesSearch onChange={this.handleSearch} />
        {loading ? (
          <ActivityIndicator style={styles.loader} color="white" size="large" />
        ) : null}
        <FlatList
          data={houses}
          renderItem={({item}) => (
            <HousesItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

export default HousesScreen;
