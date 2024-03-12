import {View, TextInput, StyleSheet, Alert} from 'react-native'
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from '../components/Title';
import Label from '../components/Label';
import Card from '../components/Card';

export default function StartGameScreen({onPickedNumber}){
    const [text, setText] = useState('')

    function onChangeHandler(value){
        setText(value)
    }

    function onConfirmHandler(){
        const enteredNumber = parseInt(text)
        if(isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99){
            Alert.alert(
                'Invalid Number',
                'Number must be between 0 to 99',
                [{text: 'Okay', onPress: onResetHandler}]
            )
            return
        }

        onPickedNumber(enteredNumber);
    }
    function onResetHandler(){

    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Label>Enter Number</Label>
                <TextInput
                    style={styles.inputField}
                    maxLength={2}
                    KeyboardType={'number-pad'}
                    onChangeText={onChangeHandler}
                    value={text}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    inputField: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: Colors.ascent500,
        borderBottomWidth: 2,
        color: Colors.ascent500,
        marginVertical: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonWrapper: {
        flex: 1,
    },

});