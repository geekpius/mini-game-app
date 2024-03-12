import {StyleSheet, View, Text} from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({children}){
    return (
       <View style={styles.container}>
           <Text style={styles.text}>{children}</Text>
       </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 24,
        margin: 24,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.ascent500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        color: Colors.ascent500,
    }
});