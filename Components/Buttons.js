
import {View,Button,Text} from "react-native";
import {useState} from "react";

export default function IncDec(props){
    let[counter,setConter]=useState(0);
return(
    <View>
         <Text>{counter}</Text>
        <Button title="Increment"
        onPress={()=>{
            if(counter<=10){
                setConter(counter + 1)
            }

          
            console.log(counter);
        }}
        ></Button>
        <Button title="Decrement"
        onPress={()=>{

            if(counter<=0){
                setConter(counter - 1)
            }
            
            console.log(counter);
        }}></Button>
    </View>

);

}

