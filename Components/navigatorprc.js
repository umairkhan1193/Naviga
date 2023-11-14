import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title='Go to Details'
      onPress={()=> navigation.navigate('Details',{
        itemid: 56,
        name:'umair'
      })}
      ></Button>
    </View>
  );
}

function DetailsScreen({route,navigation}) {
    const{itemid,name}=route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>itemid: {JSON.stringify(itemid)}</Text>
        <Text>Name: {JSON.stringify(name)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  export default function NAV() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        
        >
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }