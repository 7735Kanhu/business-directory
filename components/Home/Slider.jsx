import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { collection,query } from 'firebase/firestore'
import {db} from './../../consig/FirebaseConfig' 

export default function Slider() {
useEffect(()=>{
    GetSliderList();
},[])

    const GetSliderList =async()=>{
        const q=query(collection(db,'Slider'));
        const querySnapshort =await getDocs(q);

        querySnapshort.forEach(doc => console.log(doc.data()) )
            
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}