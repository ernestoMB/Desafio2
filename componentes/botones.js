import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export function BOTONBUSCAR (props){

    const {text, onPress} = props;
  return (
        <TouchableOpacity
            style={{...styles.btn, backgroundColor:'#000000'}}
            onPress={onPress}>   
            <Text style={{...styles.btnText,color:'white'}}>{text}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        alignSelf:'center',
        width:220,
        height:40,
        borderRadius:10,
        alignContent:'center',
        padding:5,
        marginBottom:100
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        
    }
})