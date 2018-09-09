import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Componente' texto2='React Native'/>
        <ParImpar numero={30}/>
        <Inverter texto='React Native'/>
        <MegaSena numeros={9}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 20
  }
})