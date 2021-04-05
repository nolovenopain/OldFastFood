import { StyleSheet } from 'react-native'
import { width } from '../Dimensions/Dimensions';

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
    },
    input: {
        flexDirection: 'row',
    },
    inputText: { 
        color: '#000'
    },
    btnDelete: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnEye: {
        alignItems: 'center',  
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    label: {
        color: 'grey',
    },
    required: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export { styles }