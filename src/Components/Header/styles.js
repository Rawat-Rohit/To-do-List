import { StyleSheet, Dimensions } from "react-native";
import { colors } from '../../colors/Colors';

export const styles = StyleSheet.create({
    headerBackground: {
        backgroundColor:colors.primary,
        justifyContent:"center",
        paddingLeft:Dimensions.get('screen').width * 0.05
    },
    headerText:{
        color:colors.text,
        fontWeight:"bold"
    }
})