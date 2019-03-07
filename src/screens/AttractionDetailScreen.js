import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  Dimensions,
  // Platform,
  Linking
} from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MonoText } from '@components/StyledText'
import MyLocationMapMarker from '@components/MyLocationMapMarker'
const { width } = Dimensions.get('window')

const ASPECT_RATIO = width / 300
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const SPACE = 0.01
const DEFAULT_PADDING = { top: 10, right: 10, bottom: 10, left: 10 }

const { Places: PlacesDataSource } = require('@assets/data/dataPlaces.json')

const TextSection = ({ title, content }) => {
  return (
    <View style={TextStyles.container}>
      <MonoText style={TextStyles.contentTitle}>{title}</MonoText>
      <MonoText style={TextStyles.contentBody} textAlignVertical='center'>
        {content}
      </MonoText>
    </View>
  )
}

const TextStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  contentTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    width: '30%'
  },
  contentBody: {
    fontSize: 11,
    width: '70%'
  }
})

export default class AttractionDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id', 'NO-ID')
    const data = PlacesDataSource.find(({ ID }) => ID === id)
    return {
      title: `${data.Name}`
    }
  }

  id = ''
  markers = []
  constructor (props) {
    super(props)
    const { navigation } = this.props
    this.id = navigation.getParam('id', 'NO-ID')
    this.data = PlacesDataSource.find(({ ID }) => ID === this.id)
    this.markers = [this.createMarker(+this.data.Lat, +this.data.Lon)]
  }

  doOpenMap = () => {
    const {
      data: { Lat, Lon }
    } = this
    Linking.openURL(`http://maps.google.com/maps?daddr=${Lat},${Lon}`)
  }

  createMarker (lat, lon, modifier = 1) {
    return {
      latitude: lat - SPACE * modifier,
      longitude: lon - SPACE * modifier
    }
  }

  fitAllMarkers () {
    setTimeout(() => {
      this.map.fitToSuppliedMarkers(['target', 'me'], {
        animated: true,
        edgePadding: DEFAULT_PADDING
      })
    }, 1000)
  }

  render () {
    const {
      data: { Name, Addr, Description, Lat, Lon },
      markers
    } = this
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          ref={ref => {
            this.map = ref
            if (this.map) this.fitAllMarkers()
          }}
          initialRegion={{
            latitude: +Lat,
            longitude: +Lon,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          {markers.map((itm, i) => (
            <Marker key={i} coordinate={itm} identifier='target' />
          ))}
          <MyLocationMapMarker identifier='me' />
        </MapView>
        <ScrollView
          style={styles.detail}
          contentContainerStyle={styles.detailContent}
        >
          <TextSection title='Tên:' content={Name} />
          <TextSection title='Giới thiệu:' content={Description} />
          <TextSection title='Địa chỉ:' content={Addr} />      
          <View style={styles.bottomContainer}>
            <Button title='Tìm đường' onPress={this.doOpenMap} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map: {
    height: 300,
    backgroundColor: 'red'
  },
  detail: {
    flex: 1,
    height: '100%'
  },
  detailContent: {
    padding: 10
  },
  bottomContainer: {}
})
