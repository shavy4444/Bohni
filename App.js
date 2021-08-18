import { Text,View } from 'react-native';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, HeaderBackButton} from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Header } from 'react-native/Libraries/NewAppScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AuthStack = createStackNavigator();

export default ()=> (
<NavigationContainer>
     <AuthStack.Navigator>
 <AuthStack.Screen name="home"component={IndexScreen} options={{headerShown:false}}  />    
         </AuthStack.Navigator>
 </NavigationContainer>
);