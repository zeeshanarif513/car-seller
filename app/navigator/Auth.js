import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/login';
import Signup from '../screen/signup';
import StackScreens from './StackScreens';

const Stack = createStackNavigator();

const AuthScreens = () => (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
            headerTransparent: true,
            gestureEnabled: false,
        }}>
        <Stack.Screen 
            name="Login"
            component={Login}
        />
        <Stack.Screen 
            name="Signup"
            component={Signup}
        />
        <Stack.Screen 
            name="Stack"
            component={StackScreens}
        />
    </Stack.Navigator>
)

export default AuthScreens