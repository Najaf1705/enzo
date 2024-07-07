import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'
import { useState } from 'react'
import { Colors } from '../../constants/Colors'

export default function Review({aniData}) {
    const [rating,setRating]=useState(3);
  return (
    <View style={{
        paddingHorizontal: 10,
        paddingTop: 7,
        backgroundColor: '#fff',
    }}>
      <Text>{aniData.name}</Text>
      <View>
        <Rating
            showRating={false}
            imageSize={25}
            onFinishRating={(rating)=>setRating(rating)}
            style={{}}
        />
        <Text>{rating}</Text>
        <TextInput
            placeholder='Write your comment'
            numberOfLines={4}
            style={{
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                textAlignVertical: 'top',
                borderColor: Colors.primaryColor,
            }}
        />
      </View>
    </View>
  )
}