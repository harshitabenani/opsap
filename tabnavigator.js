import {createBottomTabNavigator}  from 'react-navigation-tabs';
import React, { Component } from 'react';
import HomeScreen from './tabs/home'
import GalleryScreen from './tabs/gallery'
import MeetScreen from './tabs/meet'
import EventsScreen from './tabs/events'
import CollabScreen from './tabs/collab'
import {Ionicons,MaterialIcons,FontAwesome5} from "@expo/vector-icons"

//tab navigator

const AppTabNavigator=createBottomTabNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor} ></Ionicons>
       
      }
    },

    Gallery:{
      screen: GalleryScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="md-photos" size={24} color={tintColor} ></Ionicons>
       
      }
    },

    Meet:{
      screen:MeetScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="md-people" size={24} color={tintColor} ></Ionicons>
       
      }
    },

    Event:{
      screen: EventsScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <MaterialIcons name="event" size={24} color={tintColor} />
       
      }
    },

    Collab:{
      screen:CollabScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <FontAwesome5 name="hands-helping" size={24} color={tintColor} />
       
      }
    },

  },

 {
   
    tabBarOptions: {
     activeTintColor: '#e53935',
      inactiveTintColor: 'gray',
      //showLabel:false
    
    },
  },

 

) 


export default AppTabNavigator