import React from 'react'
import { StyleSheet, View, FlatList, TextInput,
        Button, Alert, TouchableOpacity,Image, Picker, Text } from 'react-native'
import { AttractionItem } from '@components/AttractionItem'


const { Places: PlacesDataSource } = require('@assets/data/dataPlaces.json')

export default class AttractionListScreen extends React.Component {
  static navigationOptions = {
    title: 'ĐỊA ĐIỂM YÊU THÍCH'    
  }

  constructor(props) {
    super(props);
    this.state = {
        Searchkey: '',        
        catalog: ''      
    };
  }


  _goToDetail = id => {
    const { navigation } = this.props
    console.log('go to  detail')
    navigation.push('DetailPlace', {
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

        <View style={{backgroundColor: 'lightred', paddingLeft: 20,width: 320, flexDirection:'row', justifyContent: 'space-between'}}>
          <Text style = {{width:150, height: 40, fontSize: 16, color: 'red'}}>Tìm theo phân loại: </Text>
          <View>            
            <Picker
              selectedValue={this.state.catalog}
              style={{height: 20, width: 180}}
              mode = 'dropdown'              
              onValueChange={(itemValue, itemIndex) => this.setState({catalog: itemValue}) }>
              <Picker.Item label="Tất cả" value="" />
              <Picker.Item label="Ẩm thực" value="Ẩm thực" />
              <Picker.Item label="Giải trí" value="Giải trí" />
              <Picker.Item label="Khu du lịch" value="Khu du lịch" />
              <Picker.Item label="Cơ quan/doanh nghiệp" value="Cơ quan" />
            </Picker>
          </View>
        </View>
       
        <FlatList style={{padding: 5}}          
          data = {PlacesDataSource.filter(itm => itm.Catalog.toLowerCase().includes(this.state.catalog.toLowerCase()) && itm.Name.toLowerCase().includes(this.state.Searchkey.toLowerCase()))}
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
