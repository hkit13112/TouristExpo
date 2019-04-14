import React from 'react'
import { StyleSheet, View, FlatList, TextInput,
        Button, Alert, TouchableOpacity,Image, Picker, Text } from 'react-native'
import { AttractionItem } from '@components/AttractionItem'


const { Festivals: FesDataSource } = require('@assets/data/dataFes.json')

export default class AttractionListScreen extends React.Component {
  static navigationOptions = {
    title: 'LỄ HỘI - SỰ KIỆN'
  }

  constructor(props) {
    super(props);
    this.state = {
        Searchkey: ''            
    };
  }

  _goToDetail = id => {
    const { navigation } = this.props
    console.log('go to  detail')
    navigation.push('DetailFestival', {
      id
    })
  }

  _onPressButton() {
    Alert.alert('You clicked me !');
  }

  render () {
    return (      
      <View style={styles.defaultstyle}>
        <View style={{width: 320, flexDirection:'row'}}>
          <Image
              style={{width:30, height: 30}}
              source={require('./searchlogo.jpg')}
          /> 
          <TextInput
            style={{backgroundColor: "#F5FCFF",borderColor: 'gray',borderWidth:1, height: 40, color: 'red',flex:1}}
            inlineImageLeft = 'searchlogo'
            placeholder="Tìm kiếm"            
            onChangeText={
              (text) => {
                  // this.state =
                  this.setState(
                      (previousState) => {
                          return {
                            Searchkey: text                                                      
                          };
                      }
                  );
              }
            }
          />    
        </View>   
        <FlatList style={{padding: 5}}
          data = {FesDataSource.filter(itm => itm.Name.toLowerCase().includes(this.state.Searchkey.toLowerCase()))}
          renderItem={({ item: { ID, Name, Description, ImgUrl, InPlaces, Time } }) => (
            <AttractionItem
              title={Name}
              des={Description}
              time = {Time}
              imgUrl={ImgUrl}
              Places ={InPlaces}
              onPress={() => this._goToDetail(ID)}
            />
          )}
          keyExtractor={item => item.ID}
        />        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  defaultstyle:{
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbarcontainer:{
    padding: 20,
    backgroundColor: 'red',
  },
  buttoncontainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
