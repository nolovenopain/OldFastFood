import { StyleSheet } from "react-native";
import { orange } from '../../Components/Colors/Color';
import { width } from '../../Components/Dimensions/Dimensions';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center'
    },
    logo: {
        marginTop: 30,
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: orange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    logoTitle: {
        fontSize: 30,
        color: orange
    },
    via: {
        fontSize: 18,
        color: orange,
        marginBottom: 20
    },
    facebookBtn: {
        width: width/1.1,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5
    },
    facebookTitle: {
        color: '#fff',
        fontSize: 16
    },
    googleBtn: {
        width: width/1.1,
        height: 50,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5
    },
    googleTitle: {
        color: '#fff',
        fontSize: 16
    },
    input: {
        width: width/1.2,
        marginBottom: 20,
        borderBottomColor: orange,
        borderBottomWidth: 1
    },
    inputTitle: {
        fontSize: 15,
        color: orange,
        fontWeight: 'bold'
    },
    orGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    line: {
        width: width/3 - 30,
        borderTopWidth: 0.5
    },
    orBox: {
        width: 30,
        alignItems: 'center'
    },
    orTitle: {
        fontSize: 13
    },
    forgotPasswordWrapper: {
        width: width/1.2,
        alignItems: 'flex-end',
        marginBottom: 40
    },
    forgotPasswordText: {
        color: orange,
        fontStyle: 'italic',
    },
    logInBtn: {
        width: width/1.2,
        height: 40,
        borderWidth: 1,
        borderColor: orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    logInTitle: {
        color: orange,
        fontSize: 16,
        fontWeight: 'bold'
    },
    choice: {
        color: orange,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15
    }, 
    registerText: {
        color: orange,
        fontStyle: 'italic',
        fontSize: 15
    }
});

export { styles };
