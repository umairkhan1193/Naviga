import React from 'react';
import { Text,View ,Button} from 'react-native';

function Home({navigation,route}) {
    let{name}=route.params;
   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text></Text>
          <Text>Name:  {JSON.stringify(name)}</Text>
          <Button
      title='Go to Details'
      onPress={()=> navigation.navigate('Detail',{
        itemid: 56,
        name:'umair'
      })}></Button>
          
          
        </View>
      );
}

export default Home;