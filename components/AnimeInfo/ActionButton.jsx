import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionButton({ aniData }) {
  const buttons = [
    {
      id: 1,
      name: 'Call',
      icon: require('./../../assets/images/moon.png'),
      url: 'tel:' + aniData?.phone
    },
    {
      id: 2,
      name: 'Location',
      icon: require('./../../assets/images/moon.png'),
      url: 'https://www.google.com/maps/search/?api=1&query=' + aniData.address,
    },
    {
      id: 3,
      name: 'Web',
      icon: require('./../../assets/images/moon.png'),
      url: 'https://en.wikipedia.org/wiki/' + aniData.name,
    },
    {
      id: 4,
      name: 'Share',
      icon: require('./../../assets/images/moon.png'),
      url: 'tel:' + aniData?.phone
    },
  ]
  return (
    <View style={{
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingTop: 10,
      // height: '100%',
    }}>
      <View>
        <FlatList
          data={buttons}
          numColumns={4}
          columnWrapperStyle={{justifyContent:'space-between'}}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              onPress={()=>Linking.openURL(item.url)}
            >
              <Image source={item?.icon} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }} />
              <Text style={{
                fontFamily: 'foont-medium',
                textAlign: 'center',
                fontSize: 15,
              }}>{item?.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={{
          fontFamily: 'foont-medium',
          fontSize: 25,
          paddingVertical:10,
        }}>About</Text>
        <Text style={{
          lineHeight:25,
          fontFamily: 'foont-light',
          fontSize: 20
        }}>
          {aniData.about}
        </Text>
      </View>
    </View>
  )
}