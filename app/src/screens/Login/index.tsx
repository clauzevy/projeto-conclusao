import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


export function Login(){
    
    return(
        <View style={styles.containe}>
            <Input label="Nome" placeholder="Usuario"/> 
            <Input label="Senha" placeholder="Senha" secureTextEntry={true} />           
            <Button text="Enter"/>
        </View>
    );
};

const styles = StyleSheet.create({
  containe:{
    flex:1,
    justifyContent:"center",
    gap:15,
  }  
})