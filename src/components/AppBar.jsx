import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const AppBar = () => {
  return (
    <View style={styles.containerAppBar}>
        <Text style={styles.text}>AppBar</Text>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    containerAppBar:{
    backgroundColor: '#000000',
    height:48,
    },
    text:{
    color:'#ffffff'
    }

})