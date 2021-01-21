import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

class HousesSearch extends Component {
  state = {
    query: '',
  };
  handleText = (query) => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };
  render() {
    const {query} = this.state;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search a house"
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
});

export default HousesSearch;
