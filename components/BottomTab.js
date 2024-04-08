import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
            tabBarIcon: ()=>{
                return(
                    <FontAwesome name="home" size={30} color={'black'} />
                )
            }
        }}
      />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}