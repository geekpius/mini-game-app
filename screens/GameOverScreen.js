import {StyleSheet, View, Image, Text} from 'react-native'
import Colors from '../constants/colors'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

export default function GameOverScreen({roundsNumber, pickedNumber, onStartNewGame}){
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>

            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess 
                the number <Text style={styles.highlightText}>{pickedNumber}</Text>
            </Text>

            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        margin: 36,
        overflow: 'hidden',
    },

    image: {
        height: '100%',
        width: '100%',
    },

    summaryText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },

    highlightText: {
        fontFamily: "OpenSans-Bold",
        color: Colors.primary500,
    }


});