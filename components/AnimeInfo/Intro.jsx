import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors'


export default function intro({ aniData }) {
  const router = useRouter();
  return (
    <View style={{
    //   height: 300,
      width: '100%',
      backgroundColor: 'red',
    }}>
      <View style={{
        width: '100%',
        height: 300,
      }}>
        <View style={{
          paddingHorizontal: 5,
          paddingVertical: 5,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          zIndex: 10,
        }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle-sharp" size={38} color="white" />
          </TouchableOpacity>
          <Ionicons name="heart-sharp" size={35} color="white" />
        </View>
        <Image source={{ uri: aniData.imageUrl }} style={{
          width: '100%',
          height: '100%',
          // resizeMode: 'stretch', // Ensures the entire image fits within the container

        }} />
      </View>
      <View style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: -20,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <View>
          <Text style={{
            fontFamily: 'foont-medium',
            fontSize: 30,
          }}>
            {aniData.name}
          </Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: Colors.primaryColor,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
        }}>
          <Text style={{ fontSize: 15, }}>{aniData.category}</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        paddingLeft: 10,
        paddingBottom: 7,
        backgroundColor: 'white',

      }}>
        <Text style={{marginRight: 10,fontFamily: 'foont-medium', fontSize: 18,}}>{aniData.aired}</Text>
        <Image source={require('./../../assets/images/star.png')} style={{
          width: 17,
          height: 17,
        }} />
        <Text style={{fontSize: 18,fontFamily: 'foont-medium',}}>{aniData.rating}</Text>
      </View>
    </View>
  )
}