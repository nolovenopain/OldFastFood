import { StyleSheet } from "react-native";
import { width } from '../../Components/Dimensions/Dimensions';
import { orange } from '../../Components/Colors/Color';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center'
    },
    modalContentWrapper: {
        width: width/1.05 - 60,
        alignItems: 'flex-end',
        marginTop: 60
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 15
    },
    optionWrapper: {
        paddingVertical: 15,
        width: 80,
        alignItems: 'center'
    },
    separate: {
        width: 50,
        borderTopColor: 'gray',
        borderTopWidth: 0.5
    },

});

export { styles };