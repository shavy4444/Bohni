import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Recommend = () => {
    return (
      <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../images/base.jpg')} />
            </View>
            <View style={{marginHorizontal: 8}}>
                <Text style={styles.titleText}>Blueberry Almond Cookies</Text>
                <Text style={styles.costText}>₹ 169.00 (100gm)</Text>
            </View>
            <View>
                <Text style={styles.addText}>{" "} + Add </Text>
            </View>
        </View>
        
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 8,
        backgroundColor:'white',
        flexDirection: "row",
        borderWidth: 1,
        marginHorizontal: 18,
        padding: 5,
        borderColor: "#e5e5e5",
        borderRadius: 6,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical:10,
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
        resizeMode: "cover",
    },
    titleText: {
        fontWeight: "bold",
        marginBottom: 30,
    },
    addText: {
        borderWidth: 2,
        padding: 5,
        marginRight:5,
        borderRadius: 5,
        color: "#33a243",
        borderColor: "#33a243",
        marginTop: "100%",
        width: 65
    },
    costText: {
        color: "#e8993c"
    }
});

export default Recommend;