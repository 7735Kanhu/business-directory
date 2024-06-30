import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';
import {db} from './../../consig/FirebaseConfig'
import { useUser } from '@clerk/clerk-expo';

export default function Intro({business}) {
    const router =useRouter();
    const {user}=useUser()

    const onDelete=()=>{
      Alert.alert('Do you want to Delete ?','Do you really want to delete this business ?',[
        {
          text:'Cancel',
          style:'cancle'
        },
        {
          text:'Delete',
          style:'destructive',
          onPress:()=>deleteBusiness()
        }
      ])
    }
    const deleteBusiness=async()=>{
      await deleteDoc(doc(db,'BusinessList',business?.id));
      router.back();
      ToastAndroid.show('Business Deleted!',ToastAndroid.LONG)
    }
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
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:20,marginTop:-20,backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25}}>
      <View style={{padding:20,marginTop:-20,backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25}}>
        <Text
        style={{fontSize:26,fontFamily:'outfit-bold'}}>{business.name}</Text>
        <Text style={{fontFamily:'outfit',fontSize:18}}>{business.address}</Text>
      </View>
      {
        user?.primaryEmailAddress?.emailAddress==business?.userEmail && <TouchableOpacity onPress={()=>onDelete()}>
        <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      }
      
      </View>
    </View>
  )
}