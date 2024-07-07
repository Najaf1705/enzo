import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { db } from '../../configs/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Intro from '../../components/AnimeInfo/Intro';
import ActionButton from '../../components/AnimeInfo/ActionButton';
import Review from '../../components/AnimeInfo/Review';

export default function AnimeDetailById() {
  // should be same as file name
  const { animeinfo } = useLocalSearchParams();
  const [animeDetail, setAnimeDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimeDetail();
  }, [])

  const getAnimeDetail = async () => {
    setLoading(true);
    const docRef = doc(db, 'AnimeList', animeinfo);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setAnimeDetail(docSnap.data());
      console.log(docSnap.data().name);
    } else {
      console.log('No document found!!');
    }
    setLoading(false);

  }

  if (loading) {
    return (
      <View style={{ height: 300, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Intro aniData={animeDetail} />
      <ActionButton aniData={animeDetail} />
      <Review aniData={animeDetail} />
    </ScrollView>
  )
}