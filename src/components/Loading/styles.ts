import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // borderColor: "#000",
        // borderWidth: 1
    },

}
)


export default styles;