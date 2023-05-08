import { View, FlatList, StyleSheet, Image } from 'react-native';
import Button from './components/Button';
import GoalItem from './components/GoalItem';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setEnteredGoal('');
  };

  const addGoalHandler = () => {
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    toggleModal(!isModalVisible);
    setEnteredGoal('');
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style={'light'} />
      <View style={styles.appContainer}>
        <GoalInput
          visible={isModalVisible}
          value={enteredGoal}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          toggleModal={toggleModal}
        />

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
        />
        <Button
          title="Add new goal"
          backgroundColor="#5e0acc"
          color="#fff"
          onPress={toggleModal}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
