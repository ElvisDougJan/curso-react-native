import React from 'react'
import { Text } from 'react-native'
import Padrao from './../styles/Padrao'

export default props =>
  [
    <Text key={1} style={Padrao.ex}>{props.texto}</Text>,
    <Text key={2} style={Padrao.ex}>{props.texto2}</Text>
  ]