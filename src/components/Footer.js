import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { FAB } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
    return (
    
       
        <View style={styles.container}>
            <FAB
          style={styles.fab}
          placement="right"
          size="small"
          title="Browse"
          icon={<Ionicons name= 'options'color= 'white' size={20} />}
          color="#e19330"
           />
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
        bottom: "-2%",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#24acba",
        height: "7%",
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
    },fab:{
        padding:5,
        margin:5,
        position:'absolute',
        bottom:"90%"
    }
});

export default Footer;