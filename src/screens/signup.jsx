import React, { useState } from 'react';
import { ScrollView, Text,Image, View, TextInput,StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';
import Input from '../components/input';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBWH0s-hFJZz-07MxXv3TYSFK1x_kBvAto",
  authDomain: "note-app-d201d.firebaseapp.com",
  projectId: "note-app-d201d",
  storageBucket: "note-app-d201d.appspot.com",
  messagingSenderId: "876581415786",
  appId: "1:876581415786:web:94559dc8c09cd0970c5313"
};
const app = initializeApp(firebaseConfig);
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

const genderOption = ['Male', 'Female']
const Signup = () => {
    
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')

    const submit = () =>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }
    return (
        <SafeAreaView>
            <View style={{paddingHorizontal: 30,
                paddingVertical: 20}}>
                <Input placeholder={"Full name"} onChangeText={(text)=> setName(text)} />
                <Input placeholder={"Age"} onChangeText={(text)=> setAge(text)} />
                <Input placeholder={"Email"} onChangeText={(text)=> setEmail(text)} />
                <Input placeholder={"Password"} secureTextEntry onChangeText={(text)=> setPassword(text)} />
                {
                    genderOption.map(option =>{
                        const selected = gender === option;
                        return(
                            <Pressable 
                            onPress={()=> setGender(option)}
                         style={styles.radioContainer}>
                            <View style={[styles.outerCircle, selected && styles.selectedOuter]}>
                            <View style={[styles.innerCircle, selected && styles.selectedInner]}></View>
                            </View>
                            <Text style={{marginLeft: 5}}>{option}</Text>
                    </Pressable>
                        )
                    })
                }

                <Button onPress={submit} customeStyle={{alignSelf: 'center', marginTop: 40}} title={'Sign up'}/>
             
            </View>
            <Pressable >
                <Text style={{alignSelf: 'center', marginTop:10}}>
                   Already have an account? <Text style={{color: 'green'}}>Sign In</Text>
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    radioContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    outerCircle:{
        height: 20,
        width: 20,
        borderRadius: 50,
        color: 'red',
        borderWidth: 1,
        padding: 1.5
    },
    innerCircle:{
        height: 15,
        width: 15,
        borderRadius: 50,
        alignSelf: 'center',
    },
    selectedOuter:{
        borderColor: 'orange'
    },
    selectedInner:{
        backgroundColor: 'orange',
       borderRadius: 50,
    }
})