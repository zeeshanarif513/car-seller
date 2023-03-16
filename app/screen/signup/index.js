import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../components/input";
import Strings from "../../config/Strings";
import useSignup from './useSignup'
import Colors from "../../config/Colors";
import Button from "../../components/button";

const Signup = () => {
    const { email, setEmail, password, setPassword, name, setName, emailError, passwordError, nameError, signup, handleUnhandledTouches, gotoLogin } = useSignup()
    return (
        <View style={styles.container} onStartShouldSetResponder={handleUnhandledTouches}>
            <Text style={styles.heading}>{Strings.SIGNUP}</Text>
            <View style={styles.actionContainer}>
                <Input 
                    onChangeText={value => setName(value)}
                    focus={true}
                    autoCapitalize='none'
                    label={Strings.NAME}
                    placeholder={Strings.NAME}
                    value={name}
                    error={nameError}
                    style={{ width: 300}}
                />
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
                <Button title={Strings.SIGNUP} onPress={signup}/>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.text}>{Strings.ALREADY_HAVE_ACCOUNT} </Text>
                    <TouchableOpacity onPress={gotoLogin}>
                        <Text style={styles.actionText}>
                            {Strings.LOGIN}
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

export default Signup