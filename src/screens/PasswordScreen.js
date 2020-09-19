import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { useState } from 'react';

const TextScreen = () => {

    const [password , setpassword] = useState("");

    return (
        <View>
        <Text>Enter Password: </Text>
        <TextInput 
        style = {styles.input} 
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={ newValue => setpassword(newValue)}
        />
        <Text>{password.length < 5 ? <Text>Password must be more than 5 haracters</Text> : null}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;