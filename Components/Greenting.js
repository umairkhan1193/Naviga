import {View,Text} from "react-native";


export default function Greeting(props){
    //console.log(props); single value returns react-native
    return (
    <View>
    <Text>Hello, Welcome  {props.name}</Text>
    <Text>University is {props.uni}</Text>
    </View>)
}