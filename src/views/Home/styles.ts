import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        padding: 10,
        height: 200,
        justifyContent: 'center'
    },
    textHeader:{
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },
    body: {
        flex: 1
    },
    image: {
        // flex: 1,
        resizeMode:"cover",
        opacity:0.4,
        height: "100%"
    },
    button: {
        backgroundColor: "#ffefd5",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        elevation: 3       
    },
    textButton: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: "#4682B4"
    },
    footer: {
        height: 200,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default styles;