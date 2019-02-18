import React from 'react'
import { StyleSheet, View, FlatList, TextInput,
        Button, Alert, TouchableOpacity,Image, Picker, Text } from 'react-native'
import { AttractionItem } from '@components/AttractionItem'


const { Places: PlacesDataSource } = require('@assets/data/preload.json')

export default class AttractionListScreen extends React.Component {
  static navigationOptions = {
    title: 'Attractions List'
  }

  _goToDetail = id => {
    const { navigation } = this.props
    console.log('go to  detail')
    navigation.push('Detail', {
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
        <View style={{backgroundColor: 'lightblue', paddingLeft: 20,width: 320, flexDirection:'row', justifyContent: 'space-between'}}>
          <View>
          <TextInput
            style={{height: 40, color: 'red'}}
            placeholder="Seach for places"
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

        <View style={{backgroundColor: 'lightred', paddingLeft: 20,width: 320, flexDirection:'row', justifyContent: 'space-between'}}>
          <Text style = {{width:150, height: 40, fontSize: 16, color: 'red'}}>Tìm theo phân loại:</Text>
          <View>            
            <Picker
              selectedValue={this.state.catalog}
              style={{height: 20, width: 180}}
              mode = 'dropdown'              
              onValueChange={(itemValue, itemIndex) => this.setState({catalog: itemValue}) }>
              <Picker.Item label="Tất cả" value="Tatca" />
              <Picker.Item label="Ẩm thực" value="Amthuc" />
              <Picker.Item label="Giải trí" value="Giaitri" />
              <Picker.Item label="Khu du lịch" value="Khudulich" />
              <Picker.Item label="Cơ quan/doanh nghiệp" value="Coquan" />
            </Picker>
          </View>
        </View>
       
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
