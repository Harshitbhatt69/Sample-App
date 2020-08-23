import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = <Text style={styles.textStyle3}>Harshit Bhatt</Text>
    return (
    <View>
    <Text style={styles.textStyle}>Getting Started with React Native</Text>
    <Text style={styles.textStyle2}>My Name is {name}</Text>
    </View>
    );
};

const styles =StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2:{
        fontSize: 20
    },
    textStyle3:{
        fontSize: 10
    }
});

export default ComponentsScreen;