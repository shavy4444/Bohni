import React from 'react';
import{View,Image,Text,StyleSheet} from "react-native";
import { color } from 'react-native-reanimated';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const styles=StyleSheet.create({
Image:{
    justifyContent:'center',
    height:"74%",
    width:"100%",
    position:'absolute'
},
container:{
    flex:1,
    justifyContent:'center',
    height:"20%"
},
text:{
    marginTop:18,
fontSize:40,
flexDirection:'row',
color:'white',
fontWeight:'800'
},
icon:{
    marginBottom:10,
    paddingBottom:10
},
basetext:{
    marginBottom:5,
    paddingHorizontal:5,
    paddingBottom:5,
    fontSize:18,
    color:'white'
},contain:{
    position:'absolute',
    top:"45%",
    backgroundColor:'white',
    width:"90%",
    borderColor:'#8a795d',
    borderRadius:10,
    padding:14,
    margin:10,
    marginTop:15,
    alignSelf:'center',
},cont: {
   flex:1,
    marginVertical:10,
    justifyContent:'center',
    top:"36%"
  },conti:{
      alignItems:'center',
      backgroundColor:'#EBF8F1',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:4,
      marginHorizontal:20,
      marginVertical:5,
      bottom:"2%",
      borderColor:'green'
  },bino:{
      padding:5,
      margin:5
  },rating:{
      color:'#e19330',
      alignSelf:'flex-end',
      position:"absolute",
      paddingRight:10,
      top:"10%"
  }
});

export default styles;