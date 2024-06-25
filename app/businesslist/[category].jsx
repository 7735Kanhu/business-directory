import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../consig/FirebaseConfig';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';

const BusinessListByCategory = () => {
const navigation = useNavigation();
const {category}=useLocalSearchParams();
const [businessList,setBusinessList]=useState([])
const [loading,setLoading] = useState(false)

useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTitle:category
    })
    getBusinessList();
},[])

// USe to get business list by category
const getBusinessList=async()=>{
  setBusinessList([])
  setLoading(true)
    const q=query(collection(db,'BusinessList'),where("category",'==',category));
    const queryShapshot=await getDocs(q);

    queryShapshot.forEach((doc)=>{
        console.log(doc.data());
        setBusinessList(prev=>[...prev,{id:doc?.id, ...doc.data()}])
    })
    setLoading(false)
}

  return (
    <View>
      {
        businessList?.length > 0 && loading===false ? <FlatList 
        onRefresh={getBusinessList}
        refreshing={loading}
        data={businessList}
        renderItem={({item,index})=>(
          <BusinessListCard business={item} key={index} />
        )}
        />:loading?<ActivityIndicator style={{marginTop:'60%'}} size={'large'} color={Colors.PRIMARY}/>:<Text style={{fontSize:20,fontFamily:'outfit-bold',color:Colors.GRAY,textAlign:'center',marginTop:'20%'}}>No Business Found</Text>
      }
    </View>
  )
}

export default BusinessListByCategory