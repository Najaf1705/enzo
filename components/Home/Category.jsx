import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {React, useEffect, useState} from 'react';
import {Colors} from './../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import CategoryItem from './CategoryItem';
import { useRouter } from 'expo-router';

export default function Category(){
    const [categoryList,setCategoryList]=useState({});
    const [loading,setLoading]=useState(true);
    router=useRouter();

    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList=async()=>{
        setLoading(true);
        setCategoryList([]);
        const q=query(collection(db,'Category'));
        const querySnapshot=await getDocs(q);
        
        querySnapshot.forEach((doc)=>{
            // console.log(doc.data());
            setCategoryList(prev=>[...prev,doc.data()]);
        })
        setLoading(false);
    }

    if(loading){
        return (
            <View style={{ height: 100, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={{
            marginTop: 10,
        }}>
            <View style={{
                paddingHorizontal: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'foont-bold',
                }}>Anime</Text>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'foont-medium',
                    color: Colors.primaryColor,
                }}>Show All</Text>
            </View>
            <FlatList 
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <TouchableOpacity onPress={()=>router.push('/animelist/'+item.name)}>
                        <CategoryItem category={item}
                        key={index}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}