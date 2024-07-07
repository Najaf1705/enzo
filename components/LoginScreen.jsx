import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from './../constants/Colors';
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow: startFacebookOAuthFlow } = useOAuth({ strategy: "oauth_facebook" });
    const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const handleOAuth = React.useCallback(async (startOAuthFlow) => {
        try {
            const { createdSessionId, setActive } = await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Handle signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <Image source={require('./../assets/images/zoro.png')} style={styles.img} />
            </View>
            <View style={styles.txt}>
                <Text style={{ color: 'green', fontSize: 25, fontFamily: 'foont-light' }}>
                    Welcome to
                    <Text style={{ color: Colors.primaryColor, fontFamily: 'foont-bold' }}> Enzo </Text>
                    the app for nothing
                </Text>
                <Text style={{marginVertical: 10, fontFamily: 'foont-medium', fontSize: 20,}}>
                    Signup with
                </Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                }}>
                    <TouchableOpacity style={[styles.btn]}
                        onPress={() => handleOAuth(startGoogleOAuthFlow)}>
                        <Image source={require("./../assets/images/google.png")}
                            style={[styles.btnImg]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn]}
                        onPress={() => handleOAuth(startFacebookOAuthFlow)}>
                        <Image source={require("./../assets/images/fb.png")}
                            style={[styles.btnImg]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    txt: {
        display: "flex",
        width: "100%",
        fontSize: 30,
        backgroundColor: 'white',
        paddingVertical: 5,
        marginTop: -10,
        alignItems: "center"
    },
    imgView: {
        marginTop: 40,
        width: "70%",
        height: "65%",
    },
    img: {
        width: "100%",
        height: "100%",
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'black',
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImg:{
        width: 30,
        height: 30,
    }
});
