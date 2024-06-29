import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { collection, getDocs, query } from 'firebase/firestore';
import {db} from './../../consig/FirebaseConfig'

export default function AddBusiness() {
    const navigation = useNavigation();
    const [image,setImage]=useState(null)
    const [categoryList,setCategoryList]=useState([])

    useEffect(()=>{
        navigation.setOptions({
            headerTitle:'Add New Business',
            headerShown:true,
        })
        GetCategoryList();
    },[]);

    const onImagePick=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });
          setImage(result?.assets[0].uri)
          console.log(result);
    };
    const GetCategoryList=async()=>{
        setCategoryList([])
        const q=query(collection(db,'Category'));
        const snapShot=await getDocs(q);
        snapShot.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(prev=>[...prev,{
                label:(doc.data()).name,
                value:(doc.data()).name,
            }])
        })
    }
    console.log(categoryList);
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-bold',fontSize:25}}>Add new Business</Text>
      <Text style={{fontFamily:'outfit',color:Colors.GRAY}}>Fill all details in order to add new busuness</Text>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>onImagePick()}>
        {
            !image ?<Image source={require('./../../assets/images/camera.png')} style={{width:100,height:100}}/> :<Image source={{uri:image}} style={{width:100,height:100,borderRadius:15}}/>
        }
      </TouchableOpacity>
      <View>
        <TextInput placeholder='Name' style={{padding:15,borderWidth:1,borderRadius:5,fontSize:17,backgroundColor:'#fff',marginTop:10,borderColor:Colors.PRIMARY,fontFamily:'outfit'}}/>
        <TextInput placeholder='Address' style={{padding:15,borderWidth:1,borderRadius:5,fontSize:17,backgroundColor:'#fff',marginTop:10,borderColor:Colors.PRIMARY,fontFamily:'outfit'}}/>
        <TextInput placeholder='Contact' style={{padding:15,borderWidth:1,borderRadius:5,fontSize:17,backgroundColor:'#fff',marginTop:10,borderColor:Colors.PRIMARY,fontFamily:'outfit'}}/>
        <TextInput placeholder='Email' style={{padding:15,borderWidth:1,borderRadius:5,fontSize:17,backgroundColor:'#fff',marginTop:10,borderColor:Colors.PRIMARY,fontFamily:'outfit'}}/>
        <TextInput multiline numberOfLines={5} placeholder='About' style={{padding:15,borderWidth:1,borderRadius:5,fontSize:17,backgroundColor:'#fff',marginTop:10,borderColor:Colors.PRIMARY,fontFamily:'outfit',height:100}}/>
        <View style={{borderWidth:1,borderRadius:5,backgroundColor:'#fff',marginTop:10,borderColor:Colors.PRIMARY}}>
        <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={categoryList}
    />
        </View>
      </View>
    </View>
  )
}