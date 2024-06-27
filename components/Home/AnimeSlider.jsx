import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {React, useEffect, useState} from 'react';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import AnimeCard from './AnimeCard';

export default function AnimeSlider(){
    const [animeList,setAnimeList]=useState({});
    const [loading,setLoading]=useState({});

    useEffect(()=>{
        getAnimeData();
    },[])

    const getAnimeData=async()=>{
        setAnimeList([]);
        setLoading(true);
        const q=query(collection(db,'AnimeList'),limit(1000));
        const querySnapshot=await getDocs(q);
        
        querySnapshot.forEach((doc)=>{
            // console.log(doc.data());
            setAnimeList(prev=>[...prev,{id:doc.id,...doc.data()}]);
        })
        setLoading(false);
    }
    
    if(loading){
        return (
            <View style={{ height: 300, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View>
            <View style={{
                marginTop: 10,
            }}>
                <Text style={{
                    fontFamily: 'foont-bold',
                    fontSize: 18,
                    paddingLeft: 20
                }}>Popular Anime </Text>
            </View>
            <FlatList
            style={{
                paddingLeft: 7,
            }}
            data={animeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <AnimeCard aniData={item}
                key={index}/>
            )}
            />
        </View>
    )
}