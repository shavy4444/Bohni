import React from 'react';
import {View,Text,Button,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import styler from '../style/mainStyle';
import { Octicons } from '@expo/vector-icons';


const Mainbody=() =>{
 return (
   
<View>
     <View style={{flexDirection:'row'},{backgroundColor:'#E1E1E1',height:6}}></View>
              
      <View style={{flexDirection:'row',alignSelf:'center'}}>
      <TouchableOpacity style={styler.crumb1}>   
         <TouchableOpacity style={styler.crumb2}>
            <Text style={styler.btext2}>MENU</Text> 
              </TouchableOpacity>
       <Text style={styler.btext1}>ABOUT</Text> 
     </TouchableOpacity>
      </View>

      <View  style={styler.background}>
         <Octicons name="search" style={styler.iconstyle}color="#0DA7AD" />
        <TextInput
         style={flex='1'}placeholder="   search"
         />
     </View>
    <Text style={{fontWeight:'bold',paddingLeft:21}}>Recommended: (6)</Text>
   </View>
 )
};

export default Mainbody;