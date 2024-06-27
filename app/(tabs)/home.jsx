import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import AnimeSlider from '../../components/Home/AnimeSlider'

const home = () => {
  return (
    <ScrollView>
      <Header/>
      <Slider/>
      <Category/>
      <AnimeSlider/>
      <View style={{height: 20,}}></View>
    </ScrollView>
  )
}

export default home