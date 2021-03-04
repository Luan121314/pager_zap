import { } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        // marginTop: 60
    },
    textHeader: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: "#000"
    },
    body: {
        borderWidth: 0.2,
        height: 350,
        marginTop: 40,
        elevation: 5
    },
    content: {
        flex: 1,
        padding: 20
    },
    textContent: {
        fontFamily:"Poppins-Regular",
        color: "#000"
    },
    textAuthor: {
        fontFamily: "Poppins-SemiBold",
        marginTop: 10
    },
    footer: {
        justifyContent: 'flex-end',
        padding: 10
    },
    sharedContent: {
        alignItems: 'flex-start'
    },
    textShared: {
        fontFamily: "Poppins-Regular",
        color: "#000"
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
        backgroundColor: "#E0EEEE",
        marginHorizontal: 10
    },
    buttonBack: {
        position: 'absolute',
        top: 50,
        left: 30,
        height: 45,
        width: 45,
        borderRadius: 10,
        borderColor:"#f08080",
        elevation: 2,
        backgroundColor: "#ffefd5",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;