import { TextInput, View, Text, TextInputProps, StyleSheet } from "react-native";

type InputProps = TextInputProps & {
    label:string;
    placeholder:string;
}

export function Input({label, placeholder,...rest}:InputProps){
     return(
        <View style={styles.conteine}>
             <Text>
                {label}
            </Text>
            <TextInput style={styles.input} {...rest} placeholder={placeholder}  />
        </View>
    ) 
}

const styles = StyleSheet.create({
    conteine:{
       
    },
    input: {
        borderWidth:1,
        
    }
})

 