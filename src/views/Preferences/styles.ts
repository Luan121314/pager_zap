import { StyleSheet } from "react-native";
import CONSTANTS from "../../contants";

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        height: 150,
        justifyContent: 'center',
        width: "100%",
        overflow: 'hidden'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    textHeader: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: CONSTANTS.styles.primary.text
    },
    body: {
        flex: 1,
        marginVertical: 10,
        alignItems: "center",
        overflow: "hidden"
    },
    content: {
        // alignItems: "center",
    },
    textContent:{
        textAlign: "left",
        paddingLeft: 10,
        marginBottom: 5
    },
    optionsGroup: {
        width: 320,
        borderColor: "#000",
        borderWidth: 1,
        alignItems: "center",
        overflow: "hidden",
        padding: 10,
        marginBottom: 15
    },
    button: {
        backgroundColor: CONSTANTS.styles.primary.button,
        borderRadius: 8,
        zIndex: 1,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonSave: {
        backgroundColor: CONSTANTS.styles.primary.button,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        elevation: 3
        },
    textButton: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: CONSTANTS.styles.primary.text
    },
    footer: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "100%"
    }
});

export default styles;