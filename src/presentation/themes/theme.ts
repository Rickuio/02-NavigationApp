import { StyleSheet } from "react-native";

export const globalColors = {

    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    blank: '#ffffff'

}


export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.blank,
        justifyContent: 'center',
        alignItems: 'center'

    },
    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        width: '90%',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    buttonText: {
        color: globalColors.blank,
        fontSize: 18
    },
    speedText: {
        fontSize: 24,
        marginBottom: 20,
    },
        warningText: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
})