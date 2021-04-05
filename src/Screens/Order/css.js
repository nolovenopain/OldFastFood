import { StyleSheet } from "react-native";
import { width, height } from '../../Components/Dimensions/Dimensions';
import { orange } from '../../Components/Colors/Color';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    header: {
        width: width,
        height: 40,
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
        paddingTop: 15,
        alignItems: 'center'
    },
    bodyHeader: {
        backgroundColor: '#fff',
        width: width - 20,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 15
    },
    bodyHeaderLeft: {
        width: width - 70,
        paddingLeft: 10
    },
    bodyHeaderRight: {
        width: 50,
        alignItems: 'center'
    },
    cartList: {
        width: width,
        alignItems: 'center'
    },
    totalOrder: {
        backgroundColor: '#fff',
        width: width - 20,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
        marginBottom: 90,
        marginTop: 7
    },
    topTotalOrder: {
        flexDirection: 'row',
        marginBottom: 15
    },
    totalOrderLeft: {
        width: (width - 60)/2,
    },
    totalOrderLeftBottom: {
        width: (width - 60)/2,
        paddingRight: 25,
    },
    totalOrderRight: {
        width: (width - 60)/2,
        alignItems: 'flex-end'
    },
    totalOrderTitle: {
        color: 'gray',
        fontSize: 15
    },
    discountCode: {
        color: 'gray',
        fontSize: 15
    },
    discountPercent: {
        color: 'gray',
        fontSize: 15
    },
    bottomTotalOrder: {
        flexDirection: 'row'
    },
    totalTitle: {
        color: 'gray',
        fontSize: 15,
        marginBottom: 5
    },
    totalNumber: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    orderButton: {
        paddingHorizontal: 15,
        height: 35,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
    },
    orderButtonWrapper: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    orderTitle: {
        color: '#fff',
        fontSize: 15
    },
    element: {
        width: width - 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        paddingBottom: 10
    },
    deleteElementBtn: {
        width: width - 30,
        paddingTop: 5,
    },
    orderFoodTitle: {
        fontSize: 19,
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: 10
    },
    elementContentGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    orderFoodTitleWrapper: {
        width: (width - 40)/2 + 20,
        paddingRight: 15,
    },
    orderFoodPriceWrapper: {
        width: ((width - 40)/2 - 20) * 3/4,
        paddingRight: 10,
        alignItems: 'center',
    },
    quantityGroupWrapper: {
        width: ((width - 40)/2 - 20) * 1/4,
        alignItems: 'center',
    },
    price: {
        color: 'tomato',
        fontSize: 18
    },
    minus: {
        marginTop: 5
    },
    plus: {
        marginBottom: 5
    },
    quantity: {
        margin: 3
    },
    boxQuantity: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    }
});

export { styles };