import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ title, color = '#fff', backgroundColor, onPress }) => {
  return (
    <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default Button;
