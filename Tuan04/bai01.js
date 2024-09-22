import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  CheckBox,
  TouchableOpacity,
} from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

  const generatePassword = () => {
    // Logic to generate the password
    console.log('Generating password...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} placeholder="" editable={false} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.lengthInput}
          placeholder=""
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={(text) => setPasswordLength(text)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <CheckBox
          value={includeLowerCase}
          onValueChange={setIncludeLowerCase}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include upper case letters</Text>
        <CheckBox
          value={includeUpperCase}
          onValueChange={setIncludeUpperCase}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include number</Text>
        <CheckBox value={includeNumber} onValueChange={setIncludeNumber} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include special symbol</Text>
        <CheckBox
          value={includeSpecialSymbol}
          onValueChange={setIncludeSpecialSymbol}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235B',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#151537',
    height: 40,
    marginBottom: 20,
  },
  inputBox: {
    color: '#ffffff',
    fontSize: 18,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
  },
  lengthInput: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 40,
    padding: 5,
  },
  button: {
    backgroundColor: '#3B3B98',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default PasswordGenerator;
