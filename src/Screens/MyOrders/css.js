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
        paddingTop: 10,
        alignItems: 'center',
        width: width, 
        paddingBottom: 80
    },
    headerBar: {
        width: width - 20,
        paddingVertical: 10, 
        paddingLeft: 15,
        backgroundColor: 'orange',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 20 
    },
    headerBarTitle: {
        fontSize: 16
    },
    elementWrapper: {
        width: width,
        paddingLeft: 10
    },
    elementBox :{
        width: width - 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        marginBottom: 20
    },
    elementLeft: {
        width: (width - 20)/2,
        paddingLeft: 20
    },
    statusTitle: {
        fontSize: 20,
        marginBottom: 10
    },
    status: {
        color: 'tomato',
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    orderNumber: {
        fontSize: 13,
        color: 'gray'
    },
    elementRight: {
        flexDirection: 'row',
        alignItems : 'center',
    },
    forwardIcon: {
        marginRight: 20
    },
    payment: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 10
    },
    paymentWrapper: {
        width: (width - 20)/2 - 50,
        alignItems: 'flex-end'
    },
    forwardWrapper: {
        width: 50
    }
});

export { styles };