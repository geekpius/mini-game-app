import {View, StyleSheet, Alert, Platform, FlatList,} from 'react-native'
import Title from "../components/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Label from '../components/Label';
import Card from '../components/Card';
import GuessLogItem from '../components/GuessLogItem';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 0, maxBoundary = 100;

export default function GameScreen({pickedNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, pickedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if(currentGuess === pickedNumber){
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, pickedNumber, onGameOver]);


    useEffect(() => {
       minBoundary = 1;
       maxBoundary = 100;
    }, []);


    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < pickedNumber) || (direction === 'higher' &&currentGuess > pickedNumber)){
            Alert.alert('Don\'t lie!!!!', 'You know that this is wrong....', [{text: 'Sorry'}])
            return
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess+1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevState => [...prevState, newRndNumber])
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Label style={{marginBottom: 20}}>Higher or Lower?</Label>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            +
                        </PrimaryButton>
                    </View>

                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            -
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            
            <View style={{flex: 1, padding: 16}}>
                <FlatList 
                    keyExtractor={(item, index) => index}
                    data={guessRounds}
                    renderItem={(data) => <GuessLogItem roundNumber={guessRounds.length - data.index} guess={data.item} />}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'android'? 50 : 24,
    },

    buttonContainer: {
        flexDirection: 'row',
    },
    buttonWrapper: {
        flex: 1,
    },

});