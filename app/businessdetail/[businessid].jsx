import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../consig/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';
import Review from '../../components/BusinessDetail/Review';

export default function BusinessDetail() {
    const {businessid} = useLocalSearchParams();
    const [business,setBusiness] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        getBusinessDetailsById();
    },[])


    // use to get businessDetails by id
    const getBusinessDetailsById = async()=>{
        setLoading(true)
        const docRef=doc(db,'BusinessList',businessid);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            setBusiness({id:docSnap.id,...docSnap.data()})
        }else{
            console.log("No such data");
        }
        setLoading(false)
    }

  return (
    <ScrollView>
        {
            loading ?<ActivityIndicator style={{marginTop:'70%'}} size={'large'} color={Colors.PRIMARY} /> :<View>
                
                {/* Intro */}
                <Intro business={business} />

                {/* Action Button */}
                <ActionButton business={business}/>
                {/* About section */}
                <About business={business}/>
                {/* Review section */}
                <Review business={business}/>
            </View>
        }
      
    </ScrollView>
  )
}