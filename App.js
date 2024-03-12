import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {
    const [pickedNumber, setPickedNumber] = useState();
    const [isGameOver, setIsGameOver] = useState(false);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded, fontError] = useFonts({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

   
    if (!fontsLoaded && !fontError) {
      return <AppLoading />;
    }

    function onPickedNumberHandler(pickedNumber){
        setPickedNumber(pickedNumber)
    }
    function onGameOverHandler(guessRound){
        setIsGameOver(true)
        setGuessRounds(guessRound)
    }

    function startNewGameHandler(){
      setPickedNumber(null)
      setGuessRounds(0)
    }

    let screen = <StartGameScreen onPickedNumber={onPickedNumberHandler} />

    if(pickedNumber){
        screen = <GameScreen pickedNumber={pickedNumber} onGameOver={onGameOverHandler} />
    }

    if(isGameOver){
        screen = <GameOverScreen pickedNumber={pickedNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
    }

  return (
    <>
      <StatusBar style={'light'} />
      <LinearGradient colors={[Colors.primary700, Colors.ascent500]} style={styles.appScreen}>
        <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode={'cover'}
            style={styles.appScreen}
            imageStyle={styles.backgroundImage}
        >
            <SafeAreaView style={styles.appScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
    appScreen: {
      flex: 1,
    },
    backgroundImage: {
      opacity: 0.15,
    }
});
