import * as React from 'react';
import { View, Text, Button  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{useState ,useEffect,useContext} from 'react'
import { ContextProvider,MyContext } from '../globle/practicecontext';






  export default function Profile() {
   
    const[name,setname]=useState('');
  
    useEffect(()=>{
        getdata();
      },[])
      const getdata = async () => {
        let Name;
           try {
             Name = await AsyncStorage.getItem('Username')
             setname(Name)
               }
           catch (e) {
            console.warn(e);
          }
        }
    return (
   
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome {name}!</Text>  
        <Text>This is your Profile</Text>

        <Button title='Increse' onPress={()=>{
          setval(val+1)
          setval1(val1+1)
          setval2(val2+1)
        }}></Button>
      </View>
      
    );
  }