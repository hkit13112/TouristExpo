import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { MonoText } from '@components/StyledText'

const NO_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
export class AttractionItem extends React.PureComponent {
  render () {
    const { title, des, imgUrl = NO_IMAGE_URL } = this.props
    return (
      <TouchableOpacity style={styles.container} underlayColor='red'>
        <Image source={{ uri: imgUrl }} style={styles.imageLeft} />
        <View style={styles.contentRight}>
          <MonoText style={styles.contentRightTitle}>{title}</MonoText>
          <MonoText style={styles.contentRightBody} numberOfLines={5}>
            {des}
          </MonoText>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginBottom: 5,
    backgroundColor: '#eff0f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  imageLeft: {
    width: 100,
    height: 100,
    backgroundColor: 'white'
  },
  contentRight: {
    flex: 1,
    margin: 5
  },
  contentRightTitle: {
    fontWeight: 'bold',
    fontSize: 17
  },
  contentRightBody: {
    fontSize: 11,
    margin: 5
  },
  contentContainer: {
    paddingTop: 30
  }
})
