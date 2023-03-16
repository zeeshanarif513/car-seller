import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../components/input";
import Strings from "../../config/Strings";
import useLogin from "./useLogin";
import Colors from "../../config/Colors";
import Button from "../../components/button";

const Login = () => {
    const { email, setEmail, password, setPassword, emailError, passwordError, login, handleUnhandledTouches, gotoSignup } = useLogin()
    return (
        <View style={styles.container} onStartShouldSetResponder={handleUnhandledTouches}>
            <Text style={styles.heading}>{Strings.LOGIN}</Text>
            <View style={styles.actionContainer}>
                <Input 
                    onChangeText={value => setEmail(value)}
                    focus={true}
                    autoCapitalize='none'
                    label={Strings.EMAIL}
                    placeholder={Strings.EMAIL}
                    value={email}
                    error={emailError}
                    style={{ width: 300}}
                />
                <Input 
                    onChangeText={value => setPassword(value)}
                    focus={true}
                    autoCapitalize='none'
                    placeholder={Strings.PASSWORD}
                    label={Strings.PASSWORD}
                    secure={true}
                    value={password}
                    error={passwordError}
                    style={{ width: 300}}
                />
                <Button title="Login" onPress={login}/>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.text}>{Strings.DONT_HAVE_ACCOUNT} </Text>
                    <TouchableOpacity onPress={gotoSignup}>
                        <Text style={styles.actionText}>
                            {Strings.SIGNUP}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'center'},
    heading: {
        color: Colors.GREEN,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 24
    },
    actionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { color: Colors.GRAY, fontSize: 14},
    actionText: { color: Colors.GREEN, fontSize: 14},
})

export default Login