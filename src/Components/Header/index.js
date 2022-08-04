import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
export default function Header(props) {

  return (
    <View style={[styles.headerBackground,{height:props?.height ? props?.height : "7%"}]}>
      <Text style={styles.headerText}>To Do List</Text>
    </View>
  )
}