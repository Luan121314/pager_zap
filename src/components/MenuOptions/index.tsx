import React, { useState } from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles';

interface MenuOptions {
    options: Array<{
        label: string,
        pressEvent: () => void
    }>
}

const MenuOptions: React.FC<MenuOptions> = ({ options }) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const MenuOptions = (
        <RectButton
            onPress={openMenu}
            style={styles.buttonMaster}
        >
            <Entypo
                name="dots-three-vertical"
                size={24}
            />
        </RectButton>)

    if (options.length == 0) {
        return <></>
    }

    return (
        <View
            style={styles.containerButtonOptions}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={MenuOptions}
                style={styles.containerOptions}
                contentStyle={styles.menuContent}
            >
                {options.map(item => (
                    <Menu.Item
                        key={item.label}
                        style={styles.button}
                        onPress={item.pressEvent}
                        title={item.label}
                    />
                ))}

            </Menu>
        </View>
    );
};

export default MenuOptions;