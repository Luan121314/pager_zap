import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Message from "./views/Message";
import Home from "./views/Home";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="home" >
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="message" component={Message} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;