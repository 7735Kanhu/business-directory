import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import Category from '../../components/Home/Category'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../consig/FirebaseConfig'
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList'

const explore = () => {
  const [businessList,setBusinessList]=useState([])

  const getBusinessByCategory = async(category)=>{
    setBusinessList([])
    const q=query(collection(db,'BusinessList'),where('category','==',category));
    const querySnapshot= await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }
  console.log(businessList);
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-bold',fontSize:25}}>Explore More</Text>
      {/* Search Bar */}
      <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',backgroundColor:'#fff',padding:10,marginVertical:10,marginTop:15,borderRadius:8,borderWidth:1,borderColor:Colors.PRIMARY}}>
      <Ionicons name="search" size={24} color={Colors.PRIMARY} />
      <TextInput  placeholder='Search...' style={{fontFamily:'outfit',fontSize:16}}/>

      </View>

      {/* Category */}
      <Category explore={true} onCategorySelect={(category)=>getBusinessByCategory(category)}/>

      {/* BusinessList */}
      <ExploreBusinessList businessList={businessList} />
    </View>
  )
}

export default explore