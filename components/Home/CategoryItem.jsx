import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors';

const CategoryItem = ({category,onCategoryPress}) => {
   
  return (
    <TouchableOpacity onPress={(category)=>onCategoryPress(category)}>
        <View style={{padding:15,
            backgroundColor:Colors.ICON_BG,
            borderRadius:99,
            marginRight:15,
        }}>
      <Image source={{uri:category.icon}} 
      style={{
        width:40,
        height:40,
      }}/>
      </View>
      <Text style={{fontSize:10,fontFamily:'outfit-medium',textAlign:'center',marginTop:5}}>{category.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem