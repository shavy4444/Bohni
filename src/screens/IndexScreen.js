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
          <ScrollView style={{height:"30%"}}>
               <Recommend></Recommend>
               <Recommend></Recommend>
               <Recommend></Recommend>
          </ScrollView>
          <Footer></Footer>
       </View>
      )
  };

  export default IndexScreen;