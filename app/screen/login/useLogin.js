import React, { useState } from "react";
import { Messages } from "../../config/Strings";
import Toast from 'react-native-simple-toast';
import * as Users from "../../data/authData";
import { Keyboard } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User_Details } from "../../redux/actions";
import { useDispatch } from "react-redux";


const useLogin = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(undefined)
    const [passwordError, setPasswordError] = useState(undefined)

    const isValidEmail = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailformat)
    }

    const handleUnhandledTouches = () => {
        Keyboard.dismiss()
        return false;
      }
    const login = () => {
        setEmailError(undefined)
        setPasswordError(undefined)
        if(email.trim() === '')
            setEmailError(Messages.FIELD_CANT_BE_EMPTY)
        else if(!isValidEmail())
            setEmailError(Messages.EMAIL_NOT_VALID)
        else if(password.trim() === '')
            setPasswordError(Messages.FIELD_CANT_BE_EMPTY)
        else {
            const res = Object.values(Users).filter(user => user.email === email && user.password === password)
            if(res.length) { 
                const details = { email, password }
                AsyncStorage.setItem("UserDetails", JSON.stringify(details))
                dispatch(User_Details(details))
                setEmail('')
                setPassword('')
                setEmailError('')
                setPasswordError('')
                Toast.show("Login sucessfull", Toast.LONG)
                navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'Stack',
                        },
                      ],
                    }),
                  );
            }
            else {
                Toast.show("Invalid credentials", Toast.LONG)
            }
        }
    }

    const gotoSignup = () => navigation.navigate("Signup")

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        login,
        handleUnhandledTouches,
        gotoSignup
    }
}

export default useLogin