import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../config/Colors";
import useInput from "./useInput";
import { SCREEN_WIDTH } from "../../config/Constants";

const Input = (props) => {
    const { secure, setSecure } = useInput(props.secure)

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput  
                {...props}
                style={[styles.input, props.style, props.error && { borderColor: Colors.RED }]}
                secureTextEntry={secure}
            />
            {
                props.error &&
                <Text style={styles.error}>{props.error}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        paddingLeft: 15,
        height: 40,
        width: 0.9*SCREEN_WIDTH,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.GREEN,
        borderWidth: 1
    },
    error: {
        borderColor: Colors.RED 
    },
    icon: { paddingRight: 15, },
    gap: {
        paddingRight: 19, width: 36, height: 10
    },
    error: { color: Colors.RED, fontSize: 12, fontWeight: '400' },
    label: { color: Colors.GREEN, fontWeight: 'bold', paddingVertical: 4 }
})

export default Input