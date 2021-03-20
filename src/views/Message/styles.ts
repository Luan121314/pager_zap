import { } from 'react';
import { StyleSheet } from 'react-native';
import CONSTANTS from '../../contants';

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        height: 100,
        justifyContent: 'center',
        width: "100%",
        overflow: 'hidden'
       
    },
    nav:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5
    },
    textHeader: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: CONSTANTS.styles.primary.text
    },
    body: {
        // maxHeight: 300,
        flex: 1,
        paddingTop: 40
    },
    content: {
        // flex: 1,
        paddingHorizontal:15
    },
    textContent: {
        fontFamily: "Poppins-Regular",
        color: CONSTANTS.styles.primary.text
    },
    textAuthor: {
        fontFamily: "Poppins-SemiBold",
        marginTop: 10
    },
    footer: {
        padding: 10,
        height: 100,
        borderTopWidth: 1,
        width: '100%'
    },
    sharedContent: {
        alignItems: 'center'
    },
    textShared: {
        fontFamily: "Poppins-Regular",
        color: CONSTANTS.styles.primary.text
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    sharedButton: {
        width: 45,
        height: 45,
        borderRadius: 10,
        padding: 10,
        backgroundColor: CONSTANTS.styles.primary.button,
        marginHorizontal: 10
    },
    button: {
        height: 45,
        width: 45,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: CONSTANTS.styles.primary.button,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;