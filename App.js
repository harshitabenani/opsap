import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ImageScreen from './image'
import AppTabNavigator from './tabnavigator'

import {
 
  TransitionPresets,
} from '@react-navigation/stack';

console.disableYellowBox = true;

const RootStack=createStackNavigator(
{
    ImageScreen:ImageScreen,

    MainHome:{
      screen: AppTabNavigator,
         navigationOptions:{

        header:null

      },
   
    },
 

},
  {
    initialRouteName:'ImageScreen', 
    
    
  },
 

  
)




const AppContainer = createAppContainer(RootStack);
 class App extends React.Component {

  render() {
    return ( <AppContainer /> )
  }
}

export default App
