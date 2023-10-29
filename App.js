import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const [answer, setAnswer] = useState('0');
  const [count, setCount] = useState('');

  const addValue = (number) => {
    if (answer === '0') {
      setAnswer(number.toString());
    } else {
      setAnswer(answer + number);
    }
  }
  const evaluateExpression = () => {
    try {
      const result = eval(answer);
      setAnswer(result);

    } catch (error) {
      console.error("Hesaplama hatası:", error);

      setAnswer('HATALI GİRİŞ!!!');

    }
  }
  const clearAnswer = () => {
    setAnswer('0');
    setCount('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "right", fontSize: 65,marginBottom:50 ,width:'90%',maxWidth:'100%',height:80,maxHeight:80}}>{answer}</Text>
      
      <View style={{ flexDirection: 'row' }}>
        
        <View style={styles.numberButtons}>
          
          <View style={styles.numberButtonsColumn}>
            <TouchableOpacity style={styles.buttons} onPress={() => addValue(7)} ><Text style={styles.buttonsText}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(4)} ><Text style={styles.buttonsText}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(1)} ><Text style={styles.buttonsText}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(0)} ><Text style={styles.buttonsText}>0</Text></TouchableOpacity>
          </View>
          <View style={styles.numberButtonsColumn}>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(8)} ><Text style={styles.buttonsText}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(5)} ><Text style={styles.buttonsText}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(2)} ><Text style={styles.buttonsText}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue('.')} ><Text style={styles.buttonsText}>,</Text></TouchableOpacity>
          </View>
          <View style={styles.numberButtonsColumn}>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(9)} ><Text style={styles.buttonsText}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(6)} ><Text style={styles.buttonsText}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}onPress={() => addValue(3)} ><Text style={styles.buttonsText}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}title='=' color='black' onPress={evaluateExpression} ><Text style={styles.buttonsText}>=</Text></TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.actionButtons}>
          
          <TouchableOpacity style={styles.buttons}onPress={() => addValue('+')} ><Text style={styles.buttonsText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttons}onPress={() => addValue('-')} ><Text style={styles.buttonsText}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttons}onPress={() => addValue('*')} ><Text style={styles.buttonsText}>x</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttons}onPress={() => addValue('/')} ><Text style={styles.buttonsText}>÷</Text></TouchableOpacity>
        </View>
        
      </View>
      <TouchableOpacity style={{width:'100%',textAlign:'center',padding:10}}onPress={clearAnswer} ><Text style={{fontSize:48, backgroundColor:'#DDDDDD', textAlign:'center'}}>AC</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberButtons: {
    flex: 3,
    flexDirection: 'row',
  },
  actionButtons: {
    flex: 1,
  },
  numberButtonsColumn: {
    flex: 1,

  },
  buttons:{
    alignItems:'center',
    display:'flex',
    height:70,
    
  },
  buttonsText:{
    fontSize:48,
    backgroundColor:'#DDDDDD',
    width:'80%',
    
    textAlign:'center',

  },
});
