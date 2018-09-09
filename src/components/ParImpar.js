import React from 'react'
import { View, Text } from 'react-native'
import Padrao from './../styles/Padrao'
import If from './../If/if'

export default props =>
  <View>
    <If test={props.numero % 2 === 0}>
      <Text style={Padrao.ex}> PAR </Text>
    </If>
    <If test={props.numero % 2 !== 0}>
      <Text style={Padrao.ex}> ÍMPAR </Text>
    </If>
  </View>
//  <View>
// {
//      props.numero % 2 === 0
//      ? <Text style={Padrao.ex}>O número é par</Text>
//      : <Text style={Padrao.ex}>O número é ímpar</Text>
// }
//  </View>