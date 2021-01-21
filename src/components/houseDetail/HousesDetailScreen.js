import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
} from 'react-native';
import Colors from '../../res/colors';
import Http from '../../libs/http';
import HouseTitleItem from './HouseTitleItem';

const styles = StyleSheet.create({
  imgIcon: {
    width: 140,
    height: 195,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    maxHeight: 220,
  },
});

class HousesDetailScreen extends Component {
  state = {
    house: [],
    titles: [],
  };
  getImage = (house) => {
    if (house.name == 'House Algood') {
      return 'https://static.wikia.nocookie.net/itp8789/images/a/a9/466px-Algood.png/revision/latest?cb=20170730122746';
    }
    if (house.name == 'House Allyrion of Godsgrace') {
      return 'https://awoiaf.westeros.org/images/thumb/a/a6/House_Allyrion.svg/250px-House_Allyrion.svg.png';
    }
    if (house.name == 'House Ambrose') {
      return 'https://i.pinimg.com/originals/42/9d/5e/429d5e26a5fc993cc1ceba2085069ad5.png';
    }
    if (house.name == 'House Amber') {
      return 'https://static.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest/top-crop/width/360/height/360?cb=20170523024859';
    }
    if (house.name == 'House Appleton of Appleton') {
      return 'https://i.pinimg.com/originals/5b/fd/23/5bfd23bff3089d3f9388d3d56bc74a60.png';
    }
    if (house.name == 'House Arryn of Gulltown') {
      return 'https://awoiaf.westeros.org/images/thumb/b/b4/House_Arryn.svg/250px-House_Arryn.svg.png';
    }
    if (house.name == 'House Arryn of the Eyrie') {
      return 'https://static.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153';
    }
    if (house.name == 'House Ashford of Ashford') {
      return 'https://static.wikia.nocookie.net/gameofthrones/images/6/62/House-Ashford-Shield.PNG/revision/latest/top-crop/width/360/height/360?cb=20170519012643';
    }
    if (house.name == 'House Ashwood') {
      return 'https://static.wikia.nocookie.net/ttgot-s2-au/images/b/be/Ashwood.png/revision/latest/scale-to-width-down/340?cb=20161213021139';
    }
    if (house.name == 'House Baelish of Harrenhal') {
      return 'https://vignette.wikia.nocookie.net/the-mockingbirds-song/images/c/c4/BaelishKL.png/revision/latest?cb=20190819144317';
    }
  };
  getSection = (house) => {
    const sections = [
      {
        title: 'Region',
        data: [house.region],
      },
      {
        title: 'Coat Of Arms',
        data: [house.coatOfArms],
      },
      {
        title: 'Words',
        data: [house.words],
      },
    ];
    return sections;
  };

  getTitlesHouses = async (houseId) => {
    const url = `https://www.anapioficeandfire.com/api/houses/${houseId}`;

    const titles = await Http.instance.get(url);
    console.log(titles.titles);
    this.setState({titles});
  };

  componentDidMount() {
    const {house} = this.props.route.params;
    this.props.navigation.setOptions({title: house.name});
    //console.log('house', this.props.route.params);
    if (house.name == 'House Algood') {
      this.getTitlesHouses(1);
    }
    if (house.name == 'House Allyrion of Godsgrace') {
      this.getTitlesHouses(2);
    }
    if (house.name == 'House Ambrose') {
      this.getTitlesHouses(3);
    }
    if (house.name == 'House Amber') {
      this.getTitlesHouses(4);
    }
    if (house.name == 'House Appleton of Appleton') {
      this.getTitlesHouses(5);
    }
    if (house.name == 'House Arryn of Gulltown') {
      this.getTitlesHouses(6);
    }
    if (house.name == 'House Arryn of the Eyrie') {
      this.getTitlesHouses(7);
    }
    if (house.name == 'House Ashford of Ashford') {
      this.getTitlesHouses(8);
    }
    if (house.name == 'House Ashwood') {
      this.getTitlesHouses(9);
    }
    if (house.name == 'House Baelish of Harrenhal') {
      this.getTitlesHouses(10);
    }
    this.setState({house});
  }
  render() {
    const {house, titles} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image style={styles.imgIcon} source={{uri: this.getImage(house)}} />
          <Text style={styles.titleText}>{house.name} </Text>
        </View>
        <SectionList
          style={styles.section}
          sections={this.getSection(house)}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />
        <Text>Titles</Text>
        <FlatList
          horizontal={true}
          data={titles}
          keyExtractor={(item) => item}
          renderItem={({item}) => <HouseTitleItem item={item} />}
        />
      </View>
    );
  }
}

export default HousesDetailScreen;
