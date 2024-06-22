import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from '../../constants/Colors'

export default function TabLayout() {
  return (
   <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.PRIMARY}}>
    <Tabs.Screen name='home' options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}/>
    <Tabs.Screen name='explore' options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          )
        }}/>
    <Tabs.Screen name='profile' options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle" size={size} color={color} />
          )
        }}/>
   </Tabs>
  )
}