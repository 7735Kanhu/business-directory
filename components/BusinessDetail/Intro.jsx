import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Intro({business}) {
    const router =useRouter();
  return (
    <View>
        <View style={{
            width:'100%',
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20        
            }}>
                <TouchableOpacity onPress={()=>router.back()}>

                    <Ionicons name="arrow-back-circle" size={40} color="white" />
                </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="white" />
        </View>
      <Image source={{uri:business.imageUrl}} 
      style={{
        width:'100%',
        height:340
      }}
      />
    </View>
  )
}