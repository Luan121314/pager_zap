import React from 'react';
import { View, Text } from 'react-native';
import { Switch as SwitchElement } from 'react-native-paper';
import CONSTANTS from '../../contants';
import styles from './styles';

interface SwitchProps {
    label: string,
    name: string,
    value: boolean,
    state: (state: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({ label, name, state, value }) => {

    const onToggleSwitch = () => state(!value);

    return (
        <View key={name} style={styles.containerSwitch} >
            <Text style={styles.text} >{label}</Text>
            <SwitchElement
                value={value}
                onValueChange={onToggleSwitch}
                color={CONSTANTS.styles.primary.button}
            />
        </View>
    );
};

export default Switch;