import React from "react";
import { View, StyleSheet } from 'react-native'
import AppBar from "./AppBar";
import DogsList from "./DogsList";



const Main = () => {
return(
    <View style={styles.container}>
        <AppBar/>
        <DogsList/>
    </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F3EFEA'
    },
})