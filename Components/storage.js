import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, View } from 'react-native-web';
function Storage() {
  const storeData1 = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }

  const storeData2 = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  
    return (
        <View>
        <Button title="strore value" onPress={()=>{storeData2('umaie')}}>
        <Button title="Get value" onPress={()=>{getData}}>

        </Button>
        </View>
        
      
    );
}

export default Storage;