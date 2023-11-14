import { View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

export default function Signup({navigation}) {
    const[name,setname]=useState('');
    const[password,setpassword]=useState('');
  
   
    
      const storeData = async () => {
        if(name.length == 0 || password.length == 0){
            Alert.alert("Warning!", "Enter your data")
         
        }
        else{
            const firstPair = ["Username", name]
            const secondPair = ["Password", password]
          try {
            await AsyncStorage.multiSet([firstPair, secondPair])
            navigation.navigate('Login')
            Alert.alert("Account Created Successfully");
    
          } catch (e) {
            console.warn(e);
          }
    
        }
        
      }
   
    return (
        <ImageBackground  style={styles.img}
        source={require("../assets/login.jpg")}>
      <View style={styles.container}>
        <View style={styles.TitleContainer}>
        <Text style={styles.mainheader}>Sign Up</Text>
        </View>
        <View style={styles.inputcontainer}>
            <Text style={styles.lables}>User Name </Text>
            <TextInput style={styles.inputstyle} autoCorrect={false}
            onChangeText={text =>setname(text)}
          
            ></TextInput>
        </View>
        <View style={styles.inputcontainer}>
            <Text style={styles.lables}>Password</Text>
            <TextInput style={styles.inputstyle} 
            autoCorrect={false}
            secureTextEntry={true}
            
            onChangeText={text=> setpassword(text)}
            ></TextInput>
        </View>
        <View style={{paddingTop:20,flexDirection:'row'}}>
           
            <TouchableOpacity onPress= {storeData}  >
            <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    </ImageBackground>
    
    
    )
  }
  const styles= StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent:'center',
        alignItems:'center'
      },
      img:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    
        
        
    
      },
         TitleContainer: {
          flex: 0.40,
          width: '100%',
          bottom: 10,
        },
         mainheader:{
            
            fontSize:25,
            backgroundColor:'blue',
            color:"#fff",
            paddingTop:3,
            paddingBottom:5,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center', 
            borderRadius:40  
    
    
         },
         inputcontainer:{
            margintop:20,
         },
         lables:{
            paddingTop:10,
            fontSize:18,
            color:"black",
            margintop:10,
            lineHeight:25,
            
         },
         inputstyle:{
          padding: 10,
          height: 40,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 20,
          color: '#000',
          width: '110%',
          marginBottom: 10,
         },
    
         btn: {
          width:  100,
          backgroundColor: "#ed3419",
          textAlign: "center",
          fontSize: 25,
          color: "#fff",
          height: 38,
          justifyContent: "center",
          borderLeftWidth: 1,
          fontFamily: "Calibri",
          borderColor: "#fff",
          borderRadius:20,
        },
    
    })