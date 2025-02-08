import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/HomeScreen';
import RecentWorkout from './src/RecentWorkout';
import SignUpForm from './src/Signup';
import LoginForm from './src/Login';
import Leaderboard from './src/Leaderboard';
import Dashboard from './src/Dashboard';
import PersonalChallengeButton from './src/CurrentChallenges';
import NewChal from './src/NewChallenge';
import AgainstSelfScreen from './src/AgainstSelf';
import MyAccountScreen from './src/MyAccountScreen';
import CreateDuoChallenge from './src/DuoChallengeCreate';
import DuoChallenge from './src/DuoCurrentChallenge';
import CreateSoloChallenge from './src/SoloChallengeCreate';
import SoloUserChallenge from './src/SoloCurrentChallenge';
import CardApp from './src/dummyData';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
          containerStyle={styles.screenContainer}
        />
        <Stack.Screen
          name="RecentWorkout"
          component={RecentWorkout}
          options={{ title: 'Recent Workout' }}
          containerStyle={styles.screenContainer}
        />
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ title: 'Login' }}
          containerStyle={styles.screenContainer}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpForm}
          options={{ title: 'Sign Up' }}
          containerStyle={styles.screenContainer}
        />
        <Stack.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{ title: 'Leaderboard' }}
          containerStyle={styles.screenContainer}
        />
        <Stack.Screen
          name="PersonalChallengeButton"
          component={PersonalChallengeButton}
          options={{ title: 'Personal Challenge Button' }}
          containerStyle={styles.screenContainer}
        />

        <Stack.Screen
          name="NewChal"
          component={NewChal}
          options={{ title: 'New Challenge' }}
          containerStyle={styles.screenContainer}
        />
        <Stack.Screen name="Against Self" component={AgainstSelfScreen} />

        <Stack.Screen name="Against Friend" component={CreateDuoChallenge} />

        <Stack.Screen name="Current Duo Challenge" component={DuoChallenge} />

        <Stack.Screen
          name="Create Solo Challenge"
          component={CreateSoloChallenge}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
          containerStyle={styles.screenContainer}
        />

        <Stack.Screen
          name="MyAccountScreen"
          component={MyAccountScreen}
          options={{ title: 'My Account' }}
          containerStyle={styles.screenContainer}
        />

        <Stack.Screen
          name="SoloCurrentChallenge"
          component={SoloUserChallenge}
        />

        <Stack.Screen name="ExerciseCards" component={CardApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
});
