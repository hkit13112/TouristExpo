import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, TextInput, Text, BackHandler } from 'react-native';
import {Image} from 'react-native';
import {BackAndroid} from 'react-native';
import { Asset, Audio, Font, Video } from 'expo';


export default class WelcomeScreen extends Component {
  
  static navigationOptions = {
    title: 'DU LỊCH TRÀ VINH'
  }

  _onPressButtonAR() {
    //Alert.alert('Mở videos giới thiệu TV');
    <Video
      source={require('./big_buck_bunny.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
    /> 
    
  } 

 /* _onPressButtonPlaces() {   
    Alert.alert('Mở Attration list page');    
  } 

  _onPressButtonSpecs() {
    Alert.alert('Mở Attration list page (specialits)');
  } */

  _onPressButtonQuit() {
   // BackAndroid.exitApp;   
    
  //  Alert.alert('Cảm ơn. Hẹn gặp lại !')
    BackHandler.exitApp();
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
      <View styles = {{flex: 0, justifyContent: 'space-between'}}>      
        <Image source={require('./VongXoayTV.png')} style={{width: 400, height: 240,resizeMode: 'stretch'}}/>
        
        <View style={styles.buttonContainer}>
          <Button
           // onPress={this._onPressButtonPlaces}            
            onPress={() => this.props.navigation.navigate('ListPlaces')}
            title="Địa điểm yêu thích"
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            //onPress={this._onPressButtonSpecs}
            onPress={() => this.props.navigation.navigate('ListSpecs')}
            title="Đặc sản Trà Vinh"
            color="#641684"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('ListFestivals')}
            title="Lễ hội - sự kiện"
            color="#041584"
          />
        </View>   

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonAR}            
            title="Chức năng AR"
          />
        </View> 

         <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonQuit}            
            title="Thoát"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultstyle: {
    flex: 1,
    margin: 10,
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
AppRegistry.registerComponent('AwesomeProject', () => WelcomeScreen);
