import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors'

export default function Header() {
    const {user}=useUser();
  return (
    <View style={{
        paddingVertical: 20,
        height: 150,
        backgroundColor: Colors.primaryColor,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 15,
      }}>
        <Image source={{uri:user?.imageUrl}}
        style={{width:50,height:50,borderRadius: 25}}/>
        <View>
            <Text style={{fontSize: 15, fontFamily: 'foont-medium',}}>Welcome, </Text>
            <Text style={{fontSize: 20, fontFamily: 'foont-medium',color:'white'}}> {user?.fullName}</Text>
        </View>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 30,
        padding: 5,
        gap: 10,
        borderRadius: 99,
        backgroundColor: 'white',
      }}>
        <Ionicons name="search" size={24} color={Colors.primaryColor} />
        <TextInput placeholder='Search....'/>
      </View>
    </View>
  )
}