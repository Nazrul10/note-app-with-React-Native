import React from 'react';
import { ScrollView, Text,Image, View, TextInput,StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';

const signIn = ({navigation}) => {
    return (
        <SafeAreaView>
            <Image style={{height: 300, width: 300, alignSelf: 'center', marginTop: 10}}
            source={require('../image/logimage.png')}/>
            <Text style={{fontSize: 18, fontWeight:'bold', textAlign: 'center'}}>
                Never forget your notes
            </Text>
            <View style={{paddingHorizontal: 30,
                paddingVertical: 20}}>
                <TextInput placeholder='Email' style={styles.input}/>
                <TextInput placeholder='Password' secureTextEntry style={styles.input}/>
                <Button customeStyle={{alignSelf: 'center', marginTop: 40}} title={'Login'}/>
            </View>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={{alignSelf: 'center', marginTop:10}}>
                    Don't have an account? <Text style={{color: 'green'}}>Sign up</Text>
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default signIn;

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 0.2,
        marginTop: 40
        
    }
})