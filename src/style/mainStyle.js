import React from 'react';
import{View,Image,Text,StyleSheet} from "react-native";
import { color } from 'react-native-elements/dist/helpers';

const styler =StyleSheet.create({
crumb1:{
   //justifyContent:'flex-end',
   flexDirection:'row',
   //paddingTop:10,
   marginTop:10,
   width:"90%",
   marginRight:10,
   marginLeft:10,
   borderRadius:6,
   backgroundColor:'#C4DFDF'
},btext1:{
   // textAlign:'right',
    paddingLeft:50,
    paddingTop:10,
    marginRight:40,
    fontSize:15,
    color:'white',
},btext2:{
    fontSize:15,
    color:'white',
    marginRight:50
},crumb2:{
    flexDirection:'row',
    backgroundColor:'#39CDCC',
    borderRadius:6,
    padding:8,
    paddingLeft:70,
    paddingTop:10,
    marginRight:20,
    

}, background: {
    //backgroundColor: '#99FFFF',
    borderWidth:1,
    borderColor:'#D5D5D5',
    fontSize: 10,
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:4,
    flexDirection:'row'
 // padding:10,
 // alignSelf:'center'
},
iconstyle:{
  alignSelf:'center',
  fontSize: 12,
  paddingLeft:7
}
});

export default styler;