import { StyleSheet } from "react-native";
import CONSTANTS from "../../contants";

const styles = StyleSheet.create({
    containerSwitch: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "100%"
    },
    text: {
        fontFamily: "Poppins-SemiBold",
        marginRight: 10,
        textAlign: "left"
    },
    input:{
        backgroundColor: CONSTANTS.styles.primary.button,
        color: CONSTANTS.styles.primary.text,
        height: 35,
        minWidth: 150
    }
})

export default styles;