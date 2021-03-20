import { Dimensions, StyleSheet } from 'react-native';
import CONSTANTS from '../contants';

const styles= StyleSheet.create({
    container:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        padding: 10,
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONSTANTS.styles.primary.default
    }
})

export default styles;