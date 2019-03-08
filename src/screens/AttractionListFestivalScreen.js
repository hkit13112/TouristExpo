import React from 'react'
import { StyleSheet, View, FlatList, TextInput,
        Button, Alert, TouchableOpacity,Image, Picker, Text } from 'react-native'
import { AttractionItem } from '@components/AttractionItem'


const { Festivals: PlacesDataSource } = require('@assets/data/dataFes.json')

export default class AttractionListScreen extends React.Component {
  static navigationOptions = {
    title: 'LỄ HỘI - SỰ KIỆN'
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
        <View style={{backgroundColor: 'gray', paddingLeft: 20,width: 320, flexDirection:'row', justifyContent: 'space-between'}}>
          <View>
          <TextInput
            style={{height: 40, color: 'red'}}
            placeholder="Tìm kiếm"
          />
          </View>
          <View>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={{width:40, height: 40}}
              source={require('./searchlogo.jpg')}
            />
          </TouchableOpacity>            
          </View>          
        </View>   
        <FlatList style={{padding: 5}}
          data={PlacesDataSource}
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
