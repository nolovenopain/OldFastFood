import { StyleSheet } from "react-native";
import { width } from "../../Components/Dimensions/Dimensions";
import { orange } from '../../Components/Colors/Color';

const SIZE = 70

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: width,
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'row',
    },
    headerLeft: {
        width: 60,
        alignItems: 'center',
        paddingTop: 10
    },
    headerCenter: {
        width: width - 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerRight: {
        width: 60, 
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 21,
    },
    body: {
        width: width, 
        alignItems: 'center',
        flex: 1,
    },
    bodyHeader: {
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 10
    },
    bodyHeaderLeft: {
        width: SIZE
    },
    bodyHeaderCenter: {
        width: width - SIZE * 2,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyHeaderRight: {
        width: SIZE,
        height: 120,
        justifyContent: 'flex-end',
    },
    changeLayoutList: {
        width: SIZE - 20,
        height: SIZE - 20,
        borderRadius: (SIZE - 20)/2,
        backgroundColor: orange,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: - (SIZE - 20)/2,
    },
    foodList: {
        flex: 1
    },
    listHeader: {
        width: width - 20,
        paddingVertical: 15,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'tomato',
        backgroundColor: '#fff'
    },
    listHeaderText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    elementNormal: {
        width: width - 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingVertical: 10
    },
    left: {
        width: (width - 20) * 2/5,
        alignItems: 'center'
    },
    right: {
        width: (width - 20) * 3/5,
        alignItems: 'center'
    },
    contentGroup: {
        width: (width - 20) * 3/5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    normalLayoutImage: {
        width: (width - 20) * 2/5 - 30,
        height: 100,
    },
    contentLeft: {
        width: (width - 20) * 3/5 * 4/5,
        paddingRight: 10
    },
    contentRight: {
        width: (width - 20) * 3/5 * 1/5,
        alignItems: 'center'
    },
    shortName :{
        color: 'gray',
    },
    fullName: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
    describe: {
        color: 'gray',
        fontSize: 12,
    },
    price: {
        color: 'tomato',
        fontSize: 16,
    },
    like: {
        width: 30,
        height: 30,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sale: {
        width: 30,
        height: 30,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saleText: {
        color: '#fff',
        fontSize: 12
    },
    addToCartBtnNormal: {
        width: (width - 20) * 3/5 - ((width - 20) * 3/5 * 1/5 - 30),
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: 'tomato',
        alignItems: 'center'
    },
    addToCart: {
        color: '#fff',
        fontSize: 13
    },
    groupCountQuantityNormal: {
        width: (width - 20) * 3/5 - ((width - 20) * 3/5 * 1/5 - 30),
        alignItems: 'center',
        flexDirection: 'row'
    },
    showQuantityNormal: {
        width: (width - 20) * 3/5 - ((width - 20) * 3/5 * 1/5 - 30) - 60,
        alignItems: 'center'
    },
    borderShowNormal: {
        alignItems: 'center',
        paddingVertical: 5,
        width: (width - 20) * 3/5 - ((width - 20) * 3/5 * 1/5 - 30) - 80,
        borderRadius: 5,
        borderWidth: 0.5
    },
    addToCartBtnGrid: {
        width: ((width - 20) - 20)/2 - 20,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: 'tomato',
        alignItems: 'center'
    },
    groupCountQuantityGrid: {
        width: ((width - 20) - 20)/2 - 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    showQuantityGrid: {
        width: ((width - 20) - 20)/2 - 80,
        alignItems: 'center'
    },
    borderShowGrid: {
        alignItems: 'center',
        paddingVertical: 5,
        width: ((width - 20) - 20)/2 - 100,
        borderRadius: 5,
        borderWidth: 0.5
    },
    minusBtn: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    plusBtn: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    
    quantity: {
        fontSize: 13
    },
    elementGrid: {
        width: ((width - 20) - 20)/2,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20
    },
    gridLayoutImage: {
        width: ((width - 20) - 20)/2,
        height: 100
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    elementGridTop: {
        marginBottom: 10
    },
    elementGridBodyTop: {
        flexDirection: 'row',
        alignItems: 'center',
        width: ((width - 20) - 20)/2
    },
    elementGridBodyTopLeft: {
        width: ((width - 20) - 20)/2 * 3/4,
        paddingRight: 15,
        paddingLeft: 5
    },
    elementGridBodyTopRight: {
        width: ((width - 20) - 20)/2 * 1/4,
        alignItems: 'flex-end',
        paddingRight: 5
    },
    elementGridBody: {
        width: ((width - 20) - 20)/2
    },
    fullNameWrapper: {
        width: ((width - 20) - 20)/2,
        paddingLeft: 5,
        paddingRight: 20
    },
    describeWrapper: {
        width: ((width - 20) - 20)/2,
        paddingLeft: 5,
        paddingRight: 10,
        marginBottom: 10
    }
});

export { styles };