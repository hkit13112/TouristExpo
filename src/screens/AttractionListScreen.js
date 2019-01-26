import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AttractionItem } from '@components/AttractionItem'

const { Places: PlacesDataSource } = require('@assets/data/preload.json')

export default class AttractionListScreen extends React.Component {
  static navigationOptions = {
    title: 'Attractions List'
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={PlacesDataSource}
          renderItem={({ item: { Name, Description, ImgUrl } }) => (
            <AttractionItem title={Name} des={Description} imgUrl={ImgUrl} />
          )}
          keyExtractor={item => item.ID}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
