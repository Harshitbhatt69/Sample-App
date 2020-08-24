import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const CounterScreen = () => {
    const [counter, setCount]=useState(0); //array destructuring (ES6)
    return (
    <View>
    <Button title="Increase" onPress={() => { setCount(counter + 1); }}/>
    <Button title="Decrease" onPress={() => { setCount(counter - 1); }}/>
    <Text>Current Count: {counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});


export default CounterScreen;