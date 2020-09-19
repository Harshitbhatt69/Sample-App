import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text style={styles.text}>Hii there</Text>
    <Button
    onPress={()=>navigation.navigate('Components')}
    title="Go to components demo"
    />
    <Button 
    title="List demo"
    onPress={()=>navigation.navigate('List')}
    />
    <Button 
    title="Go to Image Demo"
    onPress={()=>navigation.navigate('Image')}
    />
    <Button 
    title="Go to Counter Demo"
    onPress={()=>navigation.navigate('Counter')}
    />
    <Button 
    title="Go to color Demo"
    onPress={()=>navigation.navigate('Color')}
    />
    <Button 
    title="Go to Square Demo"
    onPress={()=>navigation.navigate('Square')}
    />
    <Button 
    title="Go to Password Demo"
    onPress={()=>navigation.navigate('Password')}
    />
    <Button 
    title="Go to Box Screen Demo"
    onPress={()=>navigation.navigate('Box')}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
