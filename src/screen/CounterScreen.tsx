import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from '../component/Button';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

function CounterScreen({navigation}: Props): JSX.Element {
  const [number, setNumber] = useState(0);
  console.log(navigation);

  return (
    <View style={style.container}>
      <View>
        <Button textbutton="Otra Pantalla" onPress={() => navigation.navigate('Blog')} />
      </View>
      <View style={style.counter}>
        {number > 0 ? (
          <Image
            style={style.logo}
            source={{
              uri: 'https://interseguridad.org/wp-content/uploads/2018/12/contadorpublico.jpeg',
            }}
          />
        ) : (
          <Image
            style={style.logo}
            source={{
              uri: 'https://img.freepik.com/vector-premium/concepto-quiebra_23-2148488952.jpg?w=2000',
            }}
          />
        )}
        <Text style={style.Text}> Cantidad: {number}</Text>
      </View>
      <View style={style.buttonFunction}>
        <Button textbutton="+1" onPress={() => setNumber(number + 1)} />
        <Button textbutton="-1" onPress={() => setNumber(number - 1)} />
      </View>
    </View>
  );
}

export default CounterScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  counter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 18,
  },
  buttonFunction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 25,
  },
  Text: {
    fontSize: 25,
    color: '#e1e1e1',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 120,
  },
});
