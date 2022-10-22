import React ,  {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View , ImageBackground,  Alert, Image} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { BOTONBUSCAR } from "./componentes/botones";



const App =()=>{
  //guardamor el estado y el vadlor del pick
  const [load, setload] = useState(false)
  const [ciudad, setCiudad] = useState();
  const [data, setData] = useState([])

  //Empezamos a consumir la api


  
  const  url = 'https://api.openweathermap.org/data/2.5/weather?q='+ciudad+',SV&appid=e1449640039f8dc2416afc90b4b435f1&units=metric&lang=es';
  
  getWeather = () =>{

    if(ciudad=="")
    {
      Alert.alert("seleccione un país")
    }
    else{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
          setData(data);    
        }) 

    } 
    
   
  }

  


 return(
 <View style={styles.container}>
    <ImageBackground source={require('./src/SM.jpg')} resizeMode="cover" style={styles.image}>
    <Text style={styles.tittle}>Weather San Salvador</Text>
    <View style={styles.item}>
      <Picker style={styles.ciudades} selectedValue={ciudad} onValueChange={setCiudad}>
      <Picker.Item label='--Ciudades--' value="" />
      <Picker.Item label="Aguilares" value="Aguilares" source={require('./src/clima4.jpg')}/>
      <Picker.Item label="Apopa" value="Apopa"/>
      <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque"/>
      <Picker.Item label="Ciudad Delgado" value="Ciudad Delgado"/>
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
 
    <BOTONBUSCAR text="Ver Clima" onPress={()=>getWeather()}/>
    {
      data &&
      <View style={styles.infobox}>
        <Text style={styles.info} >{data?.name}, {data?.sys?.country}</Text>
        <View style={styles.fila}>
        <Text style={styles.info} >Temp: {Math.round(data?.main?.temp)}°C</Text>
        </View>
        <View style={styles.fila}>
        <Text style={styles.info}>Clima: {data?.weather[0].description}</Text>      
        </View>
        <View style={styles.fila}>
        <Text style={styles.info} >min: {Math.round(data?.main?.temp_min)}°C</Text>
        <Text style={styles.info} >, max: {Math.round(data?.main?.temp_max)}°C</Text>
        </View>
        <Text style={styles.info} >Humedad: {Math.round(data?.main?.humidity)}%</Text>
        <Text style={styles.info} >Viento: {Math.round(data?.wind?.speed)}km/h</Text>
      </View>
    }
    <Text></Text>
    </ImageBackground>
    <Image style={styles.img} source={require('./src/openweather.jpg')}></Image>
 </View>
 )
}

const styles = StyleSheet.create({
  tittle: {
  textAlign:'center',
  fontSize: 35,
  color:"white"
  },
  image: {
    flex:1,
    flexDirection:"column",
    Alig: "center"
  },
  container: {
    flex: 1,
  },
  img:{
    width:"100%",
    height:100,
    flexDirection:"row",
    resizeMode: "contain",
  },
  box:
  {
    borderRadius:50
  },
  ciudades:{
      backgroundColor:"white",
      width:"60%",
      marginTop:40,
      marginBottom:60
  },
  item:{
      alignItems:"center"
  },
  info:{
    fontSize:20,
    color:"black",
    textAlign:"center"
  },
  infobox:
  {
    backgroundColor:"#fff",
    width:"70%",
    alignSelf:"center",
    borderRadius:10,
   
    padding:15
  },
  fila:
  {
    flexDirection:"row",
    alignSelf:"center"
  }

});

export default App;
