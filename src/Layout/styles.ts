import { Dimensions, StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    container:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        padding: 10,
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5F5DC"
    }
})

export default styles;