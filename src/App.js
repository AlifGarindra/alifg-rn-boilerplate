import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { IFitnessXLogo } from './assets'
import { Gap } from './components'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <IFitnessXLogo />
          <Gap height={15} />
          <Text>Everybody Can Train</Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity style={{ backgroundColor: '#92A3FD', borderRadius: 20, paddingVertical: 18, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Poppins-Bold' }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})