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
    title="Image Screen"
    onPress={()=>navigation.navigate('Image')}
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
