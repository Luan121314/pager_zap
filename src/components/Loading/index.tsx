import React from 'react';
import { ActivityIndicator, Modal, View } from "react-native";
import styles from './styles';

const Loading = () => {
    return (
        <View style={styles.container} >
            <Modal
                transparent={true}
                visible
                style={styles.modalView}>
                    <ActivityIndicator size="large" color="#0a0a23" />
            </Modal>
        </View>
    )
}
export default Loading