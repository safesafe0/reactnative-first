import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import TimeLineScreen from './src/screens/TimeLineScreen';
import PostScreen from './src/screens/PostScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TimeLineStack = createStackNavigator();
const SigninStack = createStackNavigator();

function HomeStackScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
    </HomeStack.Navigator>
  )
}

function TimeLineStackScreen(){
  return(
    <TimeLineStack.Navigator>
      <TimeLineStack.Screen 
        name="TimeLine" 
        component={TimeLineScreen} 
      />
      <TimeLineStack.Screen 
        name="Post" 
        component={PostScreen} 
      />
      <TimeLineStack.Screen 
        name="Detail" 
        component={PostDetailScreen} 
      />
    </TimeLineStack.Navigator>
  )
}

function SigninStackScreen(){
  return(
    <SigninStack.Navigator>
      <SigninStack.Screen 
        name="Signin" 
        component={SigninScreen} 
      />
      <SigninStack.Screen 
        name="Login" 
        component={LoginScreen} 
      />
      <SigninStack.Screen 
        name="Signup" 
        component={SignupScreen} 
      />
    </SigninStack.Navigator>
  )
}

function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({color,size})=>{
            const icons={
            Home:'home',
            TimeLine:'logo-twitter',
            Signin:'person',
            };
            return (
              <Icon
              name={icons[route.name]}
              color={color}
              size={size}
              />
            );
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="TimeLine" 
          component={TimeLineStackScreen}
        />
        <Tab.Screen 
          name="Signin"
          component={SigninStackScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;