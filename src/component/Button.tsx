import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  textbutton: string;
  onPress: () => void;
}

function Button({textbutton, onPress}: Props): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.button}>{textbutton}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const style = StyleSheet.create({
  button: {
    padding: 25,
    backgroundColor: 'blue',
    borderRadius: 50,
    aspectRatio: 1 / 1,
    textAlign: 'center',
    fontSize: 25,
    color: '#fdfafb',
  },
});
