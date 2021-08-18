import React from "react";
import {View,ScrollView} from "react-native";
import Header from "../components/Header";
import Mainbody from "../components/Mainbody";
import Recommend from "../components/Recommend";
import Footer from "../components/Footer"
import styles from "../style/headerStyle";


const IndexScreen = ({navigation}) => {
  
    return (
      
         <View style={{backgroundColor:'white'}}>
         <Header></Header>
          <Mainbody></Mainbody>
          <Recommend></Recommend>
          <Recommend></Recommend>
          <Footer></Footer>
       </View>
      )
  };

  export default IndexScreen;