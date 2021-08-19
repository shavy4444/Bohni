import React from 'react';
import{View,ImageBackground,Text} from "react-native";
import Logo from "../images/jd.jpg";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from "../style/headerStyle";
import { ButtonGroup } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native';


const buttons = ['FOLLOW', 'SHARE', 'OFFER'];
const icons=[<MaterialCommunityIcons name="share-outline" size={24} color="black" />,<MaterialCommunityIcons name="share-outline" size={24} color="black" />,<MaterialCommunityIcons name="share-outline" size={24} color="black" />];
const Header = () => {
return(


    <View style={{backgroundColor:'white',height:"53%"}}>
       
            <ImageBackground source={Logo} resizeMode="cover" style={styles.Image}>
                 <Text style={styles.rating}><MaterialCommunityIcons name="star" size={19} color="#e19330" />4.3</Text>
      <Text style={styles.text}>IIuvia bakery
      <MaterialCommunityIcons style={styles.icon} name="check-decagram" size={20} color="#24acba" /></Text>
     <Text style={styles.basetext}>{' '}<Entypo name="dot-single" size={24} color="#64a93f" />Open {'    '}     
     <Ionicons name="location-outline" size={24} color="#e19330" />2.3Km
     </Text>
    </ImageBackground>
    <View elevation={5} style={styles.contain}>
      <Text style={{fontSize:23},{marginBottom:10}}>
      <AntDesign name="dropbox" size={24} color="#e19330" />{'     '}Order online {'                '}
      <MaterialIcons name="delivery-dining" size={24} color="#e19330" />{'  '}No delivery
      </Text>
      <Text style={{fontSize:23},{marginBottom:5}}>
      <FontAwesome name="car" size={20} color="#e19330" />{'      '}On the move{'                '}
      <Entypo name="calendar" size={20} color="#e19330" />{'   '}Appointment
      </Text>
      </View>
      <View style={styles.cont}>
      <ButtonGroup
        icon ={icons}
        buttons={buttons}
        containerStyle={{height: 40},{borderRadius:10}}
        buttonContainerStyle={{backgroundColor: 'white'}}
        textStyle={{color: 'black'}}
      />
    </View >
    <View style={styles.conti}>
        <Text style={styles.bino}>
        <Fontisto name="wallet" size={19} color="green" />
            {'  '}You have Rs 40 Boni coin</Text>
    </View>

</View>
)
};

export default Header; 
   
 
