import { View, Text } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'
const ActivityIndicator = ({children}) => {
  return (
    <View style={[GLOBAL_STYLES.container,GLOBAL_STYLES.activityIndicator]}>
        {children}
    </View>
  )
}

export default ActivityIndicator