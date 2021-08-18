import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.itemText}>1 ITEM</Text>
                <Text style={styles.costText}>₹ 1200.00</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.cartText}>VIEW CART</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "absolute",
        bottom: "2%",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#24acba",
        height: "8%",
        alignItems: "center",
        paddingHorizontal: 40
    },
    itemText: {
        color: "#e5e5e5ba",
        fontSize: 13
    },
    costText: {
        color: "white",
        fontSize: 18,
        marginTop: 6,
        fontWeight: "600"
    },
    cartText: {
        color: "white",
        fontSize: 18,
        marginTop: 6,
        fontWeight: "100"
    }
});

export default Footer;