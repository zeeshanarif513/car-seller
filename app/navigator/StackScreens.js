import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/home';
import AddEditCar from '../screen/addEditCar';


const Stack = createStackNavigator();

const StackScreens = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            headerTransparent: true,
            gestureEnabled: false,
        }}>
        <Stack.Screen 
            name="Home"
            component={Home}
        />
        <Stack.Screen 
            name="AddEditCar"
            component={AddEditCar}
        />
    </Stack.Navigator>
)

export default StackScreens