import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from './../constants/Colors'
import { useOAuth } from "@clerk/clerk-expo";

import * as WebBrowser from "expo-web-browser";

import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const oauth = React.useCallback(async () => {
        try {
        const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();

        if (createdSessionId) {
            setActive({ session: createdSessionId });
        } else {
            // Use signIn or signUp for next steps such as MFA
        }
        } catch (err) {
        console.error("OAuth error", err);
        }
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.imgView}>
            <Image source={require('./../assets/images/zoro.png')} style={styles.img}/>
        </View>
        <View style={styles.txt}>
            <Text style={{color:'green', fontSize: 25,fontFamily: 'foont-light'}}>
                Welcome to 
                <Text style={{color: Colors.primaryColor,fontFamily: 'foont-bold'}}> Enzo </Text>
                the app for nothing
            </Text>
            <TouchableOpacity style={styles.btn}
            onPress={oauth}>
                <Text style={{color:'white',fontFamily: 'foont-medium',fontSize: 20}}>
                    Explore Enzo
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
    },
    txt:{
        display: "flex",
        width: "100%",
        fontSize: 30,
        backgroundColor: 'white',
        paddingVertical: 5,
        marginTop: -10,
        alignItems: "center"
    },
    imgView:{
        marginTop: 40,
        width:"70%",
        height:"65%",
    },
    img:{
        width:"100%",
        height:"100%",
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'black',
    },
    btn:{
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 50,
        color: 'white',
        marginTop: 10,
        backgroundColor: Colors.primaryColor,
    }
})