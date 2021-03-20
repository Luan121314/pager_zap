import React from 'react';
import { Text, TextInputProps, View, TextInput as TextElement } from 'react-native';
import styles from './styles';

interface InputProps extends TextInputProps {
    label: string,
    name: string
}

const TextInput: React.FC<InputProps> = ({ label, name, ...rest }) => {

    return (
        <View key={name} style={styles.containerSwitch} >
            <Text style={styles.text} >{label}</Text>
            <TextElement

                style={styles.input}
                {...rest}
            />
        </View>
    );
};

export default TextInput;