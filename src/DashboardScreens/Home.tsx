import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const {width} = Dimensions.get('window');

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.location}>
          <View style={styles.loc}>
            <Text style={styles.locati}>Lucknow</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notification}>
          <Image
            style={styles.image}
            source={require('../../assets/Icons/bell.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.search}>
          <Image
            style={styles.image}
            source={require('../../assets/Icons/search.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <ScrollView>
          <TouchableOpacity
            style={styles.card}
            onPress={() => props.navigation.navigate('Details')}>
            <View style={styles.img}>
              <Image
                style={styles.img}
                source={require('../../assets/Images/lulu.jpg')}
              />
            </View>
            <View style={styles.detail}>
              <View style={styles.detailContainer}>
                <Text style={styles.heading}>LuLu</Text>
                <Text style={styles.subName}>
                  Golf City, Sector B Ansal API, Lucknow
                </Text>
                <Text style={styles.intro}>[Parking] [Charging] [Valet]</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.img}>
              <Image
                style={styles.img}
                source={require('../../assets/Images/crown.jpeg')}
              />
            </View>
            <View style={styles.detail}>
              <View style={styles.detailContainer}>
                <Text style={styles.heading}>Crown Mall</Text>
                <Text style={styles.subName}>Tiwariganj, Lucknow</Text>
                <Text style={styles.intro}>[Parking]</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.img}>
              <Image
                style={styles.img}
                source={require('../../assets/Images/pho.png')}
              />
            </View>
            <View style={styles.detail}>
              <View style={styles.detailContainer}>
                <Text style={styles.heading}>Phoenix</Text>
                <Text style={styles.subName}>Ashiyana, Lucknow</Text>
                <Text style={styles.intro}>[Parking] [Charging]</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },

  main: {
    flex: 6,
  },
  notification: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  location: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  search: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
    height: '25%',

    marginBottom: wp(3),
  },
  loc: {
    width: '90%',
    height: '35%',
    borderBlockColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: wp(2),
  },
  card: {
    height: width * 0.5,
    borderRadius: 10,
    margin: 14,
  },
  img: {
    width: width * 0.32,
    height: width * 0.45,
    borderRadius: 20,
    zIndex: 999,
    borderWidth: 2,
    borderColor: 'white',
  },
  detail: {
    position: 'absolute',
    backgroundColor: 'white',
    marginLeft: width * 0.2,
    width: width * 0.83,
    height: width * 0.45,
    bottom: 0,
    right: 0,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
  },
  detailContainer: {
    flex: 1,
    marginVertical: 20,
    marginLeft: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  heading: {
    color: '#000',
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subName: {
    color: 'grey',
  },
  intro: {
    color: '#000',
    marginTop: 10,
  },
  locati: {
    fontSize: 20,
    alignSelf: 'flex-start',
    padding: 5,
  },
});

export default Home;
