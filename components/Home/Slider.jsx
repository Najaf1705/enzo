import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import {db} from '../../configs/FirebaseConfig'

export default function Slider(){
    const [sliderList, setSliderList]=useState({});
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        getSliderList();
    },[])
    const getSliderList=async ()=>{
        setSliderList([]);
        setLoading(true);
        const q=query(collection(db,'Sliders'));
        const querySnapshot=await getDocs(q);
        
        querySnapshot.forEach((doc)=>{
            // console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
        })
        setLoading(false);
    }

    if(loading){
        return (
            <View style={{  height: 190, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View>
            <Text style={{
                fontFamily:'foont-bold',
                paddingLeft: 20,
                paddingTop: 5,
                fontSize: 20,
            }}>Haikyuu</Text>
            <FlatList
            data={sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                paddingHorizontal: 20
            }}
            renderItem={({item,index})=>(
                <Image source={{uri:item.imageUrl}}
                style={{
                    width: 300,
                    height: 160,
                    marginRight: 10,
                    borderRadius: 10,
                }}
                />
            )}
            />
        </View>
    )
}