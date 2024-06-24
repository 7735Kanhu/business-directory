import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'

const home = () => {
  return (
    <View>
{/* Header */}
<Header />

{/* Slider */}
<Slider />

{/* Category */}
<Category />

{/* Papular Business list */}
<Text></Text>

    </View>
  )
}

export default home