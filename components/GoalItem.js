import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem({ deleteGoalHandler, id, text }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler.bind(this, id)}
        android_ripple={{ color: '#340670' }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    color: 'white',
    borderRadius: 5,
    marginVertical: 8,
  },

  goalText: {
    padding: 10,
    color: 'white',
  },
});
