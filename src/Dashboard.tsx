import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './DashboardScreens/Home';
import YourVehicles from './DashboardScreens/YourVehicles';
import History from './DashboardScreens/History';
import Profile from './DashboardScreens/Profile';
import FindVehicle from './DashboardScreens/FindVehicle';

const Dashboard = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Your Vehicles" component={YourVehicles} />
      <Tab.Screen name="Find Vehicle" component={FindVehicle} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Dashboard;
