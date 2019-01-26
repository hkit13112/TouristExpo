import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// const { Places: PlacesDataSource } = require('@assets/data/preload.json')

export default class AttractionDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id', 'NO-ID')
    return {
      title: `Attraction Detail ${id}`
    }
  }

  id = ''
  constructor (props) {
    super(props)
    const { navigation } = this.props
    this.id = navigation.getParam('id', 'NO-ID')
  }

  render () {
    const { id } = this
    return (
      <View style={styles.container}>
        <Text>Detail {id}</Text>
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
