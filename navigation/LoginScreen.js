import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

const LoginScreen = () => {
    const onPressLogin = () => {
        // Do something about the login operation
    };

    const onPressForgotPassword = () => {
        // Do something about the forgot password operation
    };

    const [state, setState] = useState({
        number: '',
        password: '',
    });


    return (

        <View style={styles.container}>

            <Image
                style={styles.logo}
                source={require('../assets/splash.png')}
            />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your number"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setState({ ...state, number: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setState({ ...state, password: text })}
                />
            </View>
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginLeft: 10 }} />
                <View>
                    <Text>  or  </Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginRight: 10 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={onPressLogin} style={styles.retangle}>
                    <Image
                        style={styles.loginWithSocial}
                        source={require('../assets/facebook_logo.png')}
                    />
                    <Text style={styles.textSocial}>Login with Facebook</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={onPressLogin} style={styles.retangle}>
                    <Image
                        style={styles.loginWithSocial}
                        source={require('../assets/google_logo.png')}
                    />
                    <Text style={styles.textSocial}>Login with Google</Text>

                </TouchableOpacity>
                {/* <Image
                style={styles.loginWithSocial}
                source={require('../assets/facebook_logo.png')}
            /> */}

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: '#134286',
        marginBottom: 40,
    },
    inputView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'black',
    },
    forgotAndSignUpText: {
        color: '#134286',
        fontSize: 11,
    },
    loginBtn: {
        width: '90%',
        backgroundColor: '#134286',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    loginText: {
        color: 'white',
        fontSize: 10,
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    loginWithSocial: {
        width: 30,
        height: 30,
        margin: 2,
    },
    retangle: {
        width: '40%',
        backgroundColor: 'white',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    text: {
        fontSize: 10,
        color: 'white'
    },
    textSocial: {
        color: '#134286',
        fontSize: 10,

    }
});

export default LoginScreen;
