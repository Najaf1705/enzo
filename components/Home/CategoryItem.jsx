import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CategoryItem({category}) {
  return (
    <View style={{
      // backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 8,
    }}>
        <View style={{
            marginHorizontal: 7,
            borderRadius: 50,
            width: 50,
            height: 50,
            backgroundColor: '#c8a1ff',
        }}>
        <Image source={{uri:category.icon}} style={{
          borderRadius: 50,
          width: 50,
          height: 50,
            }}/>
        </View>
        <Text style={{
            textAlign:'center'
        }}>{category.name}</Text>
    </View>
  )
}