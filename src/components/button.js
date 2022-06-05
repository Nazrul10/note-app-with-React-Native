import React from 'react';
import { TouchableOpacity,Text,StyleSheet} from 'react-native';

const Button = ({title,customeStyle, onPress}) => {
    return (
        <TouchableOpacity style={[customeStyle, styles.button]} onPress={onPress}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button:{
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
        width: 165,
        height: 45,
        backgroundColor: '#6c63ff'
    },
    title:{
        fontSize: 16,
        color: '#fff'
    }
})