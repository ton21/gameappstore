import Reactotron from 'reactotron-react-native';

import React from 'react';
import styled from 'styled-components';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import LiveScreen from './pages/LiveScreen';
import ProfileScreen from './pages/ProfileScreen';
import GameScreen from './pages/GameScreen';

import Icon from 'react-native-vector-icons/Entypo';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

// device físico
console.tron = Reactotron.configure({host: '192.168.1.111'})
  .useReactNative()
  .connect();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 12,
    paddingTop: 12,
    height: 58,
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'LiveScreen':
              iconName = 'game-controller';
              break;
            case 'ProfileScreen':
              iconName = 'user';
              break;
            default:
              iconName = 'home';
              break;
          }
          return (
            <TabBarIconContainer focused={focused}>
              <Icon
                name={iconName}
                size={iconName == 'user' ? 22 : 24}
                color="#fff"
              />
            </TabBarIconContainer>
          );
        },
      })}>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? '#b30740' : '#343434')};
  padding: 6px 18px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export default Main;
