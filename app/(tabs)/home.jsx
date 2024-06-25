import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'

const home = () => {
  return (
<ScrollView contentContainerStyle={{paddingBottom:20}}>
    <View style={{flex:1}}>
{/* Header */}
<Header />

{/* Slider */}
<Slider />


{/* Category */}
<Category />

{/* Papular Business list */}
<PopularBusiness />

    </View>
</ScrollView>
  )
}

export default home