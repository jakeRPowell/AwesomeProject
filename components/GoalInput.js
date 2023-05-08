import { StyleSheet, TextInput, View, Modal, Image } from 'react-native';
import Button from './Button';
import React from 'react';

export default function GoalInput({
  visible,
  value,
  goalInputHandler,
  addGoalHandler,
  toggleModal,
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/target.png')}
        />

        <TextInput
          placeholder="... add a course Goal"
          placeholderTextColor="#311b6b"
          style={styles.textInput}
          value={value}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            onPress={toggleModal}
            backgroundColor="#f31282"
          />
          <Button
            title="Add goal"
            onPress={addGoalHandler}
            backgroundColor="#5e0acc"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
    padding: 20,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 5,
    color: '#311b6b',
    width: '100%',
    height: 40,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
