import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreens from "./Auth";
import StackScreens from "./StackScreens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const MainNavigator = () => {
    const [Login, setLogin] = useState()

    const userDetails = useSelector(state => {
        console.log(state.UtilityReducer);
        return state.UtilityReducer
    });

    useEffect(() => {
        if(!Login) {
            if(userDetails)
                setLogin(false)
            else
                AsyncStorage.getItem("UserDetails").then(info => {
                    setLogin(info == null)
                })
        }
    }, [userDetails])

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator 
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {
                        Login?
                        <Stack.Screen name="Auth" component={AuthScreens}/>
                        :
                        <Stack.Screen name="Stack" component={StackScreens}/>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default MainNavigator