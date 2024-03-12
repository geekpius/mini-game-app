import {StyleSheet, Text} from "react-native";
import Colors from "../constants/colors";

export default function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        textAlign: 'center',
        color: Colors.white,
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.white,
    }
});