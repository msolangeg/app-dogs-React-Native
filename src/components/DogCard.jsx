import React from 'react'
import { View, Text, Pressable, Image, StyleSheet, FlatList } from 'react-native'

const DogCard = ({ dog }) => {

    const temperaments = dog.temperament.split(', ')

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{dog.name}</Text>

            <View style={styles.containerInfo}>
                <View>
                    <Pressable>
                        <Image source={{ uri: dog.image }} style={styles.image} />
                    </Pressable>
                </View>
                <View style={{ gap: 8 }}>
                    <Text style={styles.subtitle}>Características</Text>
                    <Text style={styles.text}>Height: {dog.height}</Text>
                    <Text style={styles.text}>Weight: {dog.weight}</Text>
                    <Text style={styles.text}>Life Span: {dog.life_span}</Text>
                    <View>
                        <Text style={styles.text}>Temperaments:</Text>
                        <FlatList
                            style={styles.tagsContainer}
                            data={temperaments}
                            renderItem={({ item }) => <Text style={styles.tag}>{item}</Text>}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DogCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#699072',
        padding: 8,
        borderRadius: 8,
        gap:16,
    },

    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        gap: 16,

    },

    image: {
        height: 100,
        width: 100,
        objectFit: 'cover',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#F3EFEA'

    },

    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    subtitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    text: {
        color: '#fff',
        fontSize: 12,
    },

    tag: {
        color: '#FFF',
        backgroundColor: '#BF6F41',
        fontSize: 12,
        padding: 4,
        borderRadius: 8,
    },

    tagsContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 4,
        flexWrap: 'wrap',
        width:250,
        padding:8,
    }

})