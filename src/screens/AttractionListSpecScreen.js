import React from 'react'
import { StyleSheet, View, FlatList, TextInput,
        Button, Alert, TouchableOpacity,Image, Picker, Text } from 'react-native'
import { AttractionItem } from '@components/AttractionItem'


const { Specialists: PlacesDataSource } = require('@assets/data/dataSpecs.json')

export default class AttractionListScreen extends React.Component {
  static navigationOptions = {
    title: 'Danh sách đặc sản'
  }

  _goToDetail = id => {
    const { navigation } = this.props
    console.log('go to  detail')
    navigation.push('DetailSpec', {
      id
    })
  }

  _onPressButton() {
    Alert.alert('You clicked me !');
  }

  state = {
    catalog: 'Tatca',
    searchtext: ''
  }

  render () {
    return (
      
      <View style={styles.defaultstyle}>
     
        <FlatList style={{padding: 5}}
          data={PlacesDataSource}
          renderItem={({ item: { ID, Name, Description, ImgUrl } }) => (
            <AttractionItem
              title={Name}
              des={Description}
              imgUrl={ImgUrl}
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
