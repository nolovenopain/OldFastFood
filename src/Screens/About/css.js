import { StyleSheet } from "react-native";
import { width } from "../../Components/Dimensions/Dimensions";
import { orange } from '../../Components/Colors/Color';

const styles = StyleSheet.create({
    container: {
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
        alignItems: 'center',
    },
    headerCenter: {
        width: width - 120, 
        alignItems: 'center',
    },
    headerRight: {
        width: 60
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 21,
    },
    body: {
        alignItems: 'center',
        width: width, 
        paddingBottom: 80
    },
    logo: {
        marginTop: 20,
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
    bgGeoLocationWrapper: {
        width: width,
        height: 150,
    },
    contactInfoWrapper: {
        paddingVertical: 10,
        paddingLeft: 15,
    },
    contact: {
        color: 'gray'
    },
    orange: {
        color: 'tomato',
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        paddingLeft: 5,
        marginBottom: 5
    },
    contactRowRight: {
        paddingVertical: 1,
    },
    option: {
        width: width,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    row: {
        width: width - 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingVertical: 10, 
    },
    left: {
        width: 40,
    },
    right: {
        width: 40,
        alignItems: 'flex-end'
    },
    middle: {
        width: width - 110,
        paddingLeft: 5
    },
    title: {
        fontSize: 15
    },
    facebook: {
        width: width,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        marginTop: 10,
        marginBottom: 15
    },
    fbRow: {
        width: width - 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10, 
    },
    bottomTitle: {
        marginBottom: 7
    },
    madeBy: {
        fontSize: 13,
        marginBottom: 7
    },
    orangeTerm: {
        color: 'tomato'
    }
});

export { styles };