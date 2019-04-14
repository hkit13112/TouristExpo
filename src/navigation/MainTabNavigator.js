import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '@components/TabBarIcon'
// import HomeScreen from '@screens/HomeScreen'
import AttractionListScreen from '@screens/AttractionListScreen'
import AttractionListSpecScreen from '@screens/AttractionListSpecScreen'
import AttractionDetailScreen from '@screens/AttractionDetailScreen'
import AttractionDetailSpecScreen from '@screens/AttractionDetailSpecScreen'
import AttractionListFestivalScreen from '@screens/AttractionListFestivalScreen'
import AttrationDetailFestivalScreen from '@screens/AttractionDetailFestivalScreen'
import AttractionListScreenFromParam from '@screens/AttractionListScreenFromParam'
import LinksScreen from '@screens/LinksScreen'
import SettingsScreen from '@screens/SettingsScreen'
import WelcomeScreen from '@screens/WelcomeScreen'

const HomeStack = createStackNavigator({
  Home: WelcomeScreen,
  ListPlaces: AttractionListScreen,
  ListPlacesFromParam: AttractionListScreenFromParam,
  ListSpecs: AttractionListSpecScreen,
  ListFestivals: AttractionListFestivalScreen,
  DetailSpec: AttractionDetailSpecScreen,
  DetailPlace: AttractionDetailScreen,  
  DetailFestival: AttrationDetailFestivalScreen,
  },
  {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'lightyellow',
      height: 35,    
      },
    headerTintColor: 'red',    
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      },
    },
  }
)

HomeStack.navigationOptions = {  
  tabBarLabel: 'Trang chủ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const LinksStack = createStackNavigator({
  Links: LinksScreen
})

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Phiên bản',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

//export default HomeStack
export default createBottomTabNavigator({
  HomeStack,
 // LinksStack,
  SettingsStack
})

