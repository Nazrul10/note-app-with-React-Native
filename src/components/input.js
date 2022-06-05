import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({placeholder, onChangeText}) => {
    return <TextInput placeholder={placeholder} onChangeText={onChangeText} style={styles.input}/>
    
};

export default Input;

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 0.2,
        marginTop: 40
        
    }
})