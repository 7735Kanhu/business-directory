import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

export default function UserIntro() {
  const {user}=useUser();
  return (
    <View style={{display:'flex',justifyContent:'center'}}>
      <Image source={{uri:user?.imageUrl}} style={{width:100,height:100,borderRadius:99}}/>
    </View>
  )
}