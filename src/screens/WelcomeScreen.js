import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, TextInput, Text } from 'react-native';
import {Image} from 'react-native';
import {BackAndroid} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButtonIntro() {
    Alert.alert('Mở videos giới thiệu TV');
  } 

  _onPressButtonPlaces() {
    Alert.alert('Mở Attration list page');
  } 

  _onPressButtonSpecs() {
    Alert.alert('Mở Attration list page (specialits)');
  }

  _onPressButtonQuit() {
    BackAndroid.exitApp;
  }

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (     
      <View>      
        <Image source={require('./assets/VongXoayTV.png')} style={{width: 400, height: 280,resizeMode: 'stretch'}}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonIntro}
            title="Giới thiệu Trà Vinh"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonPlaces}
            title="Địa điểm yêu thích"
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonSpecs}
            title="Đặc sản Trà Vinh"
            color="#641684"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonQuit}
            title="Thoát"
            color="#041584"
          />
        </View>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultstyle: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
  },
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10
  },
  SearchboxContainer: {
    margin: 10,
    backgroundColor:'blue',    
  },
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
