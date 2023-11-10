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
                source={require('/home/boroeurn/Desktop/React Native/SalonClone/assets/splash.png')} // Replace with the path to your logo image
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

            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginLeft: 10 }} />
                <View>
                    <Text>  or  </Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginRight: 10 }} />
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
        width: '80%',
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
        width: '80%',
        backgroundColor: '#134286',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
    },
    logo: {
        width: 100,
        height: 100,
    }
});

export default LoginScreen;
