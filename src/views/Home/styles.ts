import { StyleSheet } from 'react-native';
import CONSTANTS from '../../contants';
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
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: CONSTANTS.styles.primary.text
    },
    textGreetings: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: CONSTANTS.styles.primary.text,
        marginBottom: 10
    },
    body: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center'
    },
    image: {
        // flex: 1,
        resizeMode: "contain",
        // opacity:0.4,
        height: 245,
        width: 245
    },
    button: {
        backgroundColor: CONSTANTS.styles.primary.button,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        elevation: 3
        // position: 'absolute',
        // bottom: 30
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
    }
})

export default styles;