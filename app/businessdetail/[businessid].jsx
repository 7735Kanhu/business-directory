import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../consig/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';

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
            setBusiness(docSnap.data())
        }else{
            console.log("No such data");
        }
        setLoading(false)
    }

  return (
    <View>
        {
            loading ?<ActivityIndicator style={{marginTop:'70%'}} size={'large'} color={Colors.PRIMARY} /> :<View>
                {/* Intro */}
                <Intro business={business} />

                {/* Action Button */}

                {/* About section */}
            </View>
        }
      
    </View>
  )
}