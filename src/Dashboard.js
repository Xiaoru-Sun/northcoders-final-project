import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Phoenix from './Phoenix';
import { getUsers } from '../api';

const Dashboard = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [userFirstName, setUserFirstName] = useState('');

  const load = async () => {
    try {
      let id = await AsyncStorage.getItem('userData');
      setUserId(JSON.parse(id).id);
      let data = await getUsers(JSON.parse(id).id);
      setUserFirstName(data.firstName);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.whiteText}>
        Welcome {userFirstName.toUpperCase()}!
      </Text>

      <Text>{'\n'}</Text>
      <Phoenix />
      <Text>{'\n'}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RecentWorkout')}
        >
          <Text style={styles.buttonText}>Submit Recent Workout 🏃‍♂️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonalChallengeButton')}
        >
          <Text style={styles.buttonText}>My Current Challenges 🏃‍♀️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NewChal')}
        >
          <Text style={styles.buttonText}>Start New Challenge 🎯</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Leaderboard')}
        >
          <Text style={styles.buttonText}>Leaderboard 🏆</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyAccountScreen')}
        >
          <Text style={styles.buttonText}>My account 🔐</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002131',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    // backgroundColor: 'green',
    marginTop: 50,
  },
  whiteText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Dashboard;
