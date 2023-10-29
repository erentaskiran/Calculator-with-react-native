import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [answer, setAnswer] = useState('0');
  const [result, setResult] = useState('');
  const buttonTexts=['7','8','9','/','4','5','6','*','1','2','3','-','0','AC','=','+'];
  const addValue = (number) => {
    if (answer === '0') {
      setAnswer(number.toString());
    }else if(number==='AC'){
      clearAnswer();
    } else if(number=='='){
      evaluateExpression();
    }
    else {
      setAnswer(answer + number);
    }
  }
  const evaluateExpression = () => {
    try {
      const result = eval(answer);
      setResult(result);

    } catch (error) {
      console.error("Hesaplama hatası:", error);

      setAnswer('HATALI GİRİŞ!!!');

    }
  }
  const clearAnswer = () => {
    setAnswer('0');
    setResult('');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer} >
        <TextInput
        style={styles.inputText}
        value={answer}
        onChangeText={setAnswer}
        keyboardType='numeric'
        />
      </View>
      <View style={styles.buttonContainer}>
        {buttonTexts.map(
          (item,index)=>(
            <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={()=>addValue(item)}
            >
              <Text style={styles.buttonText}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  resultText:{
    fontSize:40,

  },
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
  },  
  inputText:{
    fontSize:30,
  },
  buttonContainer:{
    flex:7,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  button:{
    fontSize:24,
    width:'25%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:'1',
    borderColor:'black',
    color:'black',
  },
  buttonText:{
    fontSize:24,
  },
});
