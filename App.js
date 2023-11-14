import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PRo from "./Terminal/props";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PRo name={"umair"} num={123}></PRo>

    /*
  <NavigationContainer>
    <Stack.Navigator  initialRouteName='Home'>
      <Stack.Screen initialParams={{name: "Umair"}} name='Home'   component={Home} />
      <Stack.Screen name='Detail' component={Details} />
    </Stack.Navigator>
  </NavigationContainer>


    
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'
       screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center'
      }}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} style={styles.container}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/> 
      </Stack.Navigator >
    </NavigationContainer>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
