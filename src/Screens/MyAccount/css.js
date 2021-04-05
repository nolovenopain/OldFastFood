import { StyleSheet } from "react-native";
import { width, height } from '../../Components/Dimensions/Dimensions';
import { orange } from '../../Components/Colors/Color';

const SIZE = 130

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center'
    },
    header: {
        width: width,
        height: 50,
        backgroundColor: orange,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLeft: {
        width: 60,
        alignItems: 'center'
    },
    headerRight: {
        width: width - 60
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 21
    },
    body: {
        paddingTop: 20,
        alignItems: 'center'
    },
    avatar: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE/2,
        borderWidth: 2,
        borderColor: orange,
        marginBottom: 20
    },
    wellcome: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 50
    },
    btn: {
        width: width/1.3,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'tomato',
        marginBottom: 15
    },
    btnTitle: {
        color: 'tomato',
        fontWeight: 'bold'
    }
});

export { styles };