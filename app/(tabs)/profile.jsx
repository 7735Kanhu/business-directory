import { View, Text } from 'react-native'
import React from 'react'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'

const profile = () => {
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-bold',fontSize:35}}>profile</Text>
      {/* UserInfo */}
      <UserIntro />
      {/* menu list */}
      <MenuList />
    </View>
  )
}

export default profile