import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

export default function ExploreBusinessList({businessList}) {
  return (
    <ScrollView>
      <FlatList 
      data={businessList}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index})=>(
            <BusinessListCard business={item}  key={index}/>
      )}
      />
      <View style={{height:200}}>

      </View>
    </ScrollView>
  )
}