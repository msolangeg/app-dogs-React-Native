import React from 'react'
import { FlatList, Text } from 'react-native'
import { dogs } from './dogs'
import DogCard from './DogCard'

const DogsList = () => {
    
  return (
    <FlatList
        style={{ paddingBottom:250, marginBottom:100, paddingLeft:16, paddingRight:16}}
        data={dogs}
        ItemSeparatorComponent={()=> <Text> </Text>}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <DogCard dog={item}/>}
    />
  )
}

export default DogsList