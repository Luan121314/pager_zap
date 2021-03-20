import { StyleSheet } from "react-native";
import CONSTANTS from "../../contants";

const styles = StyleSheet.create({
    containerButtonOptions: {
        backgroundColor: CONSTANTS.styles.primary.button,
        borderRadius: 8,
        zIndex: 1,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    menuContent:{
        backgroundColor: CONSTANTS.styles.primary.button
    },
    buttonMaster: {
        padding:8
    },
    containerOptions: {
        backgroundColor: CONSTANTS.styles.primary.button
    },
    button: {
        backgroundColor: CONSTANTS.styles.primary.button
    }
})

export default styles;