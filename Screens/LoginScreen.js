import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'
import {COLORS} from '../helpers/constants'
const LoginScreen = (props) => {
  return (
    <View style={GLOBAL_STYLES.container}>
          <Text>Login</Text>
          <TouchableOpacity
              style={GLOBAL_STYLES.button}
              onPress={() => {
              props.navigation.navigate('Dashboard')
          }}>
              <Text style={GLOBAL_STYLES.buttonText}>Login</Text>
          </TouchableOpacity>
    </View>
  )
}

export default LoginScreen