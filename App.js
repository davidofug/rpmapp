/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './Screens/LoginScreen'
import DashboardScreen from './Screens/DashboardScreen'
import PrayerScreen from './Screens/PrayerScreen'
import BibleScreen from './Screens/BibleScreen'
import TestimoniesScreen from './Screens/TestimoniesScreen'
import ServiceScreen from './Screens/ServiceScreen'
import CellScreen from './Screens/CellScreen'
import TitheScreen from './Screens/TitheScreen'
import DonateScreen from './Screens/DonateScreen'
import { ActivityContext, ActivityProvider } from './components/Providers/ActivityProvider'
const App = () => {
  const Stack = createNativeStackNavigator();
  // const { activity } = React.useContext(ActivityContext)
  // console.log(activity)
  return (
  // <ActivityProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Prayer" component={PrayerScreen}
          options={{
            'title': 'Make a Prayer Request',
          }} />
        <Stack.Screen
          name="Bible"
          options={{
            'title': 'Bible lessons',
          }}
          component={BibleScreen}
        />
        <Stack.Screen name="Testimonies" component={TestimoniesScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="Cell" component={CellScreen} />
        <Stack.Screen name="Tithe" component={TitheScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    // </ActivityProvider>
  )
}

export default App