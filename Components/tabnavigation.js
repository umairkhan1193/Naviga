import * as React from 'react';
import { Text, View,TextInput,StyleSheet,navigation} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-web';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <TextInput style={styles.input}
      ></TextInput>
      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}
function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
    
  }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Text><input type="radio" name='i'/>Dark</Text>
      <Text><input type="radio" name='i'/>Light</Text>
    </View>
  );

}

const Tab = createBottomTabNavigator();


export default function Tabnav() {
  return (
    <NavigationContainer>
     
      <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused? 'ios-home': 'ios-home-outline';
                }
                else if (route.name === 'Profile') {
                    iconName = focused ? 'ios-person' : 'ios-person-outline';
                  }
                 else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'red',
              tabBarInactiveTintColor: 'gray',
            })}
          >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        color: '#000',
        width: '70%',
        marginBottom: 10,
      },
})