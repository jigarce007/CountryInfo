import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles/styles';

const palceholdercolor = '#cecece';
const selectioncolor = '#ffffff';

const App = () => {
  const createTwoButtonAlert = () => Alert.alert('Oops something went wrong!');
  const forgotPwd = () => Alert.alert('Please Contact Administrator.')
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        
      </View>
      <View style={styles.midcontainer}>
      <Text style={styles.textlabelheader}>Login</Text>
      
        <TextInput
          style={[styles.textniput, isFocusedEmail && styles.textinputFocused]}
          placeholder="Enter Email"
          placeholderTextColor={palceholdercolor}
          selectionColor={selectioncolor}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
        />
        <TextInput
          style={[
            styles.textniput,
            isFocusedPassword && styles.textinputFocused,
          ]}
          placeholder="Enter Password"
          placeholderTextColor={palceholdercolor}
          selectionColor={selectioncolor}
          secureTextEntry
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
        />
        <Text style={styles.textlabelsmallitablic} onPress={forgotPwd}>Forgot Password?</Text>
       
        
        <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
          <Text style={styles.buttonlablesmall}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomcontainer}>
        <Text>All Rights Reserved.ABC XYZ PVT LTD.</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
