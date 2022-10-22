import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {Picker} from  '@react-native-picker/picker'

const CiudadPick = ({ciudad, setCiudad}) => {

    const {cambiarCiudad} = ciudad;
   
  return (
    <View>
    <Text></Text>
    <View style={styles.item}>
      <Picker style={styles.ciudades} selectedValue={cambiarCiudad} onValueChange={cambiarCiudad=>setCiudad({...ciudad,cambiarCiudad})}>
      <Picker.Item label='Ciudades' value=""/>
      <Picker.Item label="Aguilares" value="Aguilares" />
      <Picker.Item label="Apopa" value="Apopa"/>
      <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque"/>
      <Picker.Item label="Ciudad Delgado" value="CiudadDelgado"/>
      <Picker.Item label="Cuscatancingo" value="Cuscatancingo"/>
      <Picker.Item label="El Paisnal" value="El Paisnal"/>
      <Picker.Item label="Ilopango" value="Ilopango"/>
      <Picker.Item label="Mejicanos" value="Mejicanos"/>
      <Picker.Item label="Nejapa" value="Nejapa"/>
      <Picker.Item label="Panchimalco" value="Panchimalco"/>
      <Picker.Item label="Rosario de Mora" value="Rosario de Mora"/>
      <Picker.Item label="San Marcos" value="San Marcos"/>
      <Picker.Item label="San Martín" value="San Martín"/>
      <Picker.Item label="San Salvador" value="San Salvador"/>
      <Picker.Item label="Santiago Texacuangos" value="Santiago Texacuangos"/>
      <Picker.Item label="Soyapango" value="Soyapango"/>
      <Picker.Item label="Tonacatepeque" value="Tonacatepeque"/>
      </Picker>
    </View>
  
  </View>
  )
}


const styles = StyleSheet.create({
    ciudades:{
      backgroundColor:"white",
      width:"60%",
      marginTop:40,
      marginBottom:60
    },
    item:{
      alignItems:"center"
    }
  })
  

export default CiudadPick;