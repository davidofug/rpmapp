import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style';

const DashboardScreen = ({ navigation }) => {
  return (
    <>
      <View style={[GLOBAL_STYLES.flexRow,{'flex':0.3}]}>
        <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Prayer') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Prayer Request</Text>
          </TouchableOpacity>
        <TouchableOpacity
            style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Bible') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Bible Lessons</Text>
        </TouchableOpacity>
      </View>
      <View style={[GLOBAL_STYLES.flexRow,{'flex':0.3}]}>
        <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Testimonies') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Testimonies</Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Service') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Main Service</Text>
        </TouchableOpacity>
      </View>
      <View style={[GLOBAL_STYLES.flexRow, {'flex':0.3}]}>
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Cell') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Online Cell</Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Tithe') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Tithe Session</Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem]}
          onPress={() => { navigation.navigate('Donate') }}>
              <Text style={GLOBAL_STYLES.dashboardItemText}>Donate</Text>
          </TouchableOpacity>
      </View>
      <View style={[GLOBAL_STYLES.flexRow, {'flex':.5}]}>

      </View>
    </>
  )
}

export default DashboardScreen