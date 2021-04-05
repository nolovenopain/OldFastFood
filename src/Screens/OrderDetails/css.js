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
        paddingBottom: 65
    },
    headerBox: {
        width: width - 20,
        paddingVertical: 10, 
        paddingLeft: 15,
        backgroundColor: 'orange',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    headerBarTitle: {
        fontSize: 16
    },
    box: {
        width: width - 20,
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 40,
        paddingVertical: 12,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    },
    left: {
        width: (width - 40)/2,
        paddingLeft: 10
    },
    right: {
        width: (width - 40)/2,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    title: {
        color: 'gray'
    },
    paymentWrapper: {
        width: width - 20,
        paddingVertical: 10, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 5
    },
    paymentLeft: {
        width: (width - 40)/2
    },
    paymentRight: {
        width: (width - 40)/2,
        alignItems: 'flex-end'
    },
    orderDetailBar: {
        width: width - 20,
        paddingVertical: 10, 
        paddingLeft: 15,
        backgroundColor: 'tomato',
    },
    orderDetailTitle: {
        fontSize: 16,
        color: '#fff'
    },
    totalTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    totalNumber: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export { styles };