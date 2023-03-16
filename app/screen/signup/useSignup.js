import React, { useState } from "react";
import { Messages } from "../../config/Strings";
import Toast from 'react-native-simple-toast';
import { Users } from "../../data/authData";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";


const useSignup = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [emailError, setEmailError] = useState(undefined)
    const [passwordError, setPasswordError] = useState(undefined)
    const [nameError, setNameError] = useState(undefined)

    const isValidEmail = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailformat)
    }

    const handleUnhandledTouches = () => {
        Keyboard.dismiss()
        return false;
      }
    const signup = () => {
        setEmailError(undefined)
        setPasswordError(undefined)
        setNameError(undefined)
        if(name.trim() === '')
            setNameError(Messages.FIELD_CANT_BE_EMPTY)
        else if(email.trim() === '')
            setEmailError(Messages.FIELD_CANT_BE_EMPTY)
        else if(!isValidEmail())
            setEmailError(Messages.EMAIL_NOT_VALID)
        else if(password.trim() === '')
            setPasswordError(Messages.FIELD_CANT_BE_EMPTY)
        else {
            Toast.show("Account created", Toast.LONG)
        }
    }

    const gotoLogin = () => navigation.navigate("Login")

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        name,
        setName,
        nameError,
        passwordError,
        signup,
        handleUnhandledTouches,
        gotoLogin
    }
}

export default useSignup