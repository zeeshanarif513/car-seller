import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../config/Colors";
import { SCREEN_WIDTH } from "../../config/Constants";

const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.button, style]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: { 
        backgroundColor: Colors.GREEN, 
        height: 40, 
        width: 0.7*SCREEN_WIDTH,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 24
    },
    title: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Button