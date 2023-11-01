import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView
          style={styles.lottie}
          source={require('../assets/Lottie/car.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.login}>
        <Text>Ready To Park? So..</Text>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate('Dashboard')}>
          <Text style={styles.button1Text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animation: {
    flex: 5,
  },
  login: {
    flex: 2,
    backgroundColor: 'black',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '70%',
    height: '18%',
    borderRadius: 10,
    marginBottom: '4%',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '70%',
    height: '18%',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 3,
  },
  button1Text: {
    fontSize: 20,
    fontWeight: '700',
  },
  button2Text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  lottie: {
    flex: 1,
  },
});

export default Login;
