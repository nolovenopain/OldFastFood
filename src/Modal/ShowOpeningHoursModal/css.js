import { StyleSheet } from "react-native";
import { width } from '../../Components/Dimensions/Dimensions';
import { orange } from '../../Components/Colors/Color';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: width/1.15,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        color: '#fff'
    },
    modalHeader: {
        paddingVertical: 12,
        width: width/1.15,
        backgroundColor: 'tomato',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center'
    },
    close: {
        width: width/1.15,
        paddingVertical: 12,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        borderColor: 'gray',
        borderTopWidth: 0.5
    },
    closeTitle: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    showTime: {
        width: width/1.15,
        height: 150
    }
});

export { styles };