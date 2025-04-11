import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity , TextInput } from 'react-native';
import { Alert } from "react-native";


export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [media, setMedia] = useState(null);

  const CalcularMedia = (n1, n2, n3) => {
    setMedia(null);
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    const num3 = parseFloat(n3);

    if (!(num1<=10&&num1>=0&&num2<=10&&num2>=0&&num3<=10&&num3>=0)){
      Alert.alert("Números inválidos");
      return;
    }
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      const resultado = (num1 + num2 + num3) / 3;
      setMedia(resultado.toFixed(2));
  
      if (resultado >= 6) {
        Alert.alert(`PASSOU!`, `MÉDIA: ${resultado.toFixed(2)}`);
      } else {
        Alert.alert(`NÃO PASSOU!`,`MÉDIA: ${resultado.toFixed(2)}`);
      }
  
    } else {
      setMedia('Valores inválidos');
      Alert.alert(setMedia);
    }
  };
  return (
    
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
        style={styles.logo}
        source={require('./imagem/logo.png')}
        />
        <Text>PASSOU DE ANO?</Text>
        <TextInput style={styles.textBox} value={number1} onChangeText={setNumber1} placeholder="Digite o primeiro numero" keyboardType="numeric"></TextInput>
        <TextInput style={styles.textBox} value={number2} onChangeText={setNumber2} placeholder="Digite o segundo numero" keyboardType="numeric"></TextInput>
        <TextInput style={styles.textBox} value={number3} onChangeText={setNumber3}
        placeholder="Digite o terceiro numero" keyboardType="numeric"></TextInput>
        <TouchableOpacity style={styles.button} onPress={()=> CalcularMedia(number1,number2,number3)}><Text style={styles.text}>Calcular Média</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textBox: {
    height: 40,
    borderColor: '#000',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    width: '80%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
