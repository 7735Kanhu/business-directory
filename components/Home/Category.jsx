import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../consig/FirebaseConfig'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'

const Category = ({explore=false,onCategorySelect}) => {
    const [categoryList,setCategoryList] = useState([])
    const router = useRouter();
    
    
    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList = async()=>{
        setCategoryList([])
        const q=query(collection(db,'Category'));
        const querySnapshot= await getDocs(q);
        querySnapshot.forEach((doc)=>{
            // console.log(doc.data());
            setCategoryList(prev=>[...prev,doc.data()])
        })
    }
    console.log('Category List:', categoryList);
  console.log('Explore Prop:', explore);
    const onCategoryPressHandler = (item)=>{
      console.log(explore);
      if(!explore){
        router.push('/businesslist/'+item.name)
      }else{
        onCategorySelect(item.name)
      }
    }
  return (
    <View>
        {
          !explore && (<View style={{padding:20,display:'flex',
            flexDirection:'row',
                justifyContent:'space-between',marginTop:10
            }}>
          <Text style={{paddingLeft:10,
            fontSize:20,
            fontFamily:'outfit-bold'
          }}>Category</Text>
          <Text style={{color:Colors.PRIMARY,
            fontFamily:'outfit-medium'
          }}>View All</Text>
          </View>)
        }
      <FlatList
      data = {categoryList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginLeft:20}}
      renderItem={({item,index})=>(
        <CategoryItem category={item} key={index} onCategoryPress={()=>onCategoryPressHandler(item)}/>
      )}
      />
    </View>
  )
}

export default Category