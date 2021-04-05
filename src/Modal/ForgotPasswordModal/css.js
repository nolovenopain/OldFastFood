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
        paddingBottom: 30
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 20
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.7,
        flexDirection: 'row',
        width: width/1.25,
        marginBottom: 20
    },
    emailForgotPasword: {
        height: 35,
        width: width/1.25 - 40,
    },
    btnDelete: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    noteWrapper: {
        width: width/1.4,
        marginBottom: 40,
    },
    note: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 20
    },
    sendEmailBtn: {
        width: width/1.25,
        height: 45,
        borderRadius: 20,
        backgroundColor: orange,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
    },
    sendEmailTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export { styles };