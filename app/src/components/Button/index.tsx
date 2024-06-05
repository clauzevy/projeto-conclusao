import { TouchableOpacity,Text, StyleSheet } from "react-native";
type Props = {
    text: string
}
export function Button ({text}:Props){
    return(
        <TouchableOpacity>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
 
}) 