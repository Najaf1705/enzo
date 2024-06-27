import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import AnimeCard from '../../components/CategoryFocus/AnimeCard';
import { db } from '../../configs/FirebaseConfig';

export default function AnimeListByCategory() {
  const navigation=useNavigation();
  const {category}=useLocalSearchParams();
  const [animeList,setAnimeList]=useState({});
  const [loading,setLoading]=useState({});
  useEffect(()=>{
      navigation.setOptions({
          // headerShown:true,
          // headerTitle:category,
      })
      getAnimeList();
  },[]);

  const getAnimeList=async()=>{
    setAnimeList([]);
    setLoading(true);
    const q=query(collection(db,'AnimeList'),where('category','==',category));
    const querySnapShot=await getDocs(q);
    
    querySnapShot.forEach(doc=>{
      setAnimeList(prev=>[...prev,{id:doc.id,...doc.data()}]);
    })
    setLoading(false);
  }

  if(loading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      {animeList.length>0?(
        <View style={{
          display: 'flex',
          paddingBottom: 105,
        }}>
          <Text style={{
            backgroundColor: '#919096',
            paddingLeft: 15,
            paddingTop: 10,
            fontFamily: 'foont-medium',
            fontSize: 30,
          }}>{category}</Text>
          <FlatList style={{
            display: 'flex',
          }}
            data={animeList}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item,index})=>(
                <AnimeCard 
                    aniData={item}
                    key={index}/>
            )}
          />
        </View>
        ):(
          <View style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{
              fontFamily: 'foont-medium',
              fontSize: 20,
            }}>Sorry, no Anime available for {category} category</Text>
          </View>
        )}
    </View>
  )
}