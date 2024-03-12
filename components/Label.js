import {StyleSheet, Text} from "react-native";
import Colors from "../constants/colors";

export default function Label({children, style}){
    return (
        <Text style={[styles.labelText, style]}>{children}</Text>
    );
}


const styles = StyleSheet.create({

    labelText: {
        color: Colors.ascent500,
        fontSize: 18,
    },
});