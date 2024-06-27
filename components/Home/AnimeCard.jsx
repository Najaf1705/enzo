import {View, Text, Image, TouchableOpacity} from 'react-native';
import {React} from 'react';
import {Colors} from '../../constants/Colors'
import { useRouter } from 'expo-router';

export default function AnimeCard({aniData}){
    const router=useRouter();
    return (
        <TouchableOpacity style={{
                backgroundColor: '#dbdbdb',
                marginLeft: 15,
                borderRadius: 10,
                width: 250,
                height: 310,
                padding: 10,
            }}
            onPress={()=>{
                router.push('/animedetail/'+aniData.id);
                console.log(aniData.id);
            }}>
            <View style={{
                height: '60%',
            }}>
                <Image source={{uri:aniData.imageUrl}}
                style={{
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                }}/>
            </View>
            <View style={{
                    height: '40%',
                    paddingTop: 5,
                    // position: 'absolute',
                    gap: 5,
                }}>
                <View style={{
                    height: '20%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
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
                    {aniData.about.substring(0, 100)}
                    {aniData.about.length > 100 ? '...' : ''}
                </Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // paddingTop: 5,
                    justifyContent: 'space-between',
                    bottom: 0,
                }}>
                    <TouchableOpacity onPress={()=>{
                        router.push('/animelist/'+aniData.category);
                        // console.log(aniData.id);
                    }}
                        >
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
                    </TouchableOpacity>
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
        </TouchableOpacity>
    )
}