import {View, Text, Image, TouchableOpacity} from 'react-native';
import {React} from 'react';
import {Colors} from '../../constants/Colors'
import { useRouter } from 'expo-router';

export default function AnimeCard({aniData}){
    const router=useRouter();
    return (
        <TouchableOpacity onPress={()=>{
            console.log(aniData.id);
            router.push('/animedetail/'+aniData.id);
        }}>
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 6,
                    marginTop: 8,
                    backgroundColor: '#c9bfff',
                    marginHorizontal: 'auto',
                    borderRadius: 10,
                    width: '90%',
                    height: 180,
                    padding: 10,
                }}>
                <View style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Image source={{uri:aniData.imageUrl}}
                    style={{
                        borderRadius: 10,
                        height: 150,
                    }}/>
                </View>
                <View style={{
                        paddingTop: 5,
                        paddingRight: 5,
                        width: '50%',
                        height: '100%',
                        // position: 'absolute',
                        gap: 5,
                    }}>
                    <View style={{
                        height: '30%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        // alignItems: 'center',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'foont-medium',
                            color: Colors.primaryColor,
                            }}>{aniData.name}
                        </Text>
                        <Text style={{
                            // fontSize: 20,
                            // fontFamily: 'foont-medium',
                            // color: Colors.primaryColor,
                            }}>{aniData.aired}
                        </Text>
                    </View>
                    <Text style={{
                        height: '50%',
                    }}>
                        {aniData.about.substring(0, 50)}
                        {aniData.about.length > 50 ? '...' : ''}
                    </Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // paddingTop: 5,
                        justifyContent: 'space-between',
                        bottom: 0,
                    }}>
                        <Text style={{
                            fontFamily: 'foont-medium',
                            fontSize: 18,
                            backgroundColor: Colors.primaryColor,
                            color: '#fff',
                            borderRadius: 99,
                            paddingHorizontal: 8,
                            textAlign: 'center'
                            }}>
                            {aniData.category}
                        </Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 5,
                        }}>
                            <Image source={require('./../../assets/images/star.png')} style={{
                                width: 17,
                                height: 17,
                            }}/>
                            <Text>{aniData.rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}