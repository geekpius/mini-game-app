import {StyleSheet, View} from "react-native";
import Colors from "../constants/colors";

export default function Card({children}){
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2,},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center',
    },
});