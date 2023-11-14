import React, { useState } from 'react';
import { Button, Text,TextInput,View } from 'react-native';

function Details({navigation,route}) {
    let {name}=route.params;
    const[stuName,setstuName] =useState('')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details</Text>
          <Text>ItemId:</Text>
          <Text>Name:  {stuName}</Text>
          <TextInput 
          placeholder='enter name'
          onChangeText={(text)=> {setstuName(text)}}
          ></TextInput>
          <Button 
          title='Change name'
          onPress={()=> navigation.navigate('Home',{
            name:stuName
          })
            
          }
          />
        </View>
      );
}

export default Details;