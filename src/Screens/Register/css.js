import { StyleSheet } from "react-native";
import { orange } from '../../Components/Colors/Color';
import { width } from '../../Components/Dimensions/Dimensions';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        paddingBottom: 30
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
    registerBtn: {
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
    registerTitle: {
        color: orange,
        fontSize: 16,
        fontWeight: 'bold'
    },
    backToLoginText: {
        color: orange,
        fontStyle: 'italic',
        fontSize: 15,
    }
});

export { styles };