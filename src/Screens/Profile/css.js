import { StyleSheet } from "react-native";
import { width, height } from "../../Components/Dimensions/Dimensions";
import { orange } from '../../Components/Colors/Color';

const SIZE = 120;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: height
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
    },
    optionBtnWrapper: {
        width: width/1.05, 
        alignItems: 'flex-end',
        marginBottom: 40,
    },
    profileBox: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width - 20,
        borderRadius: 15,
        paddingBottom: 20,
        marginBottom: 20
    },
    avatarWrapper: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE/2,
        marginTop: -60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    avatar: {
        width: SIZE - 20,
        height: SIZE - 20,
        borderRadius: (SIZE - 20)/2
    },
    boxTitleWrapper: {
        width: width - 60,
        marginBottom: 10
    },
    boxTitle: {
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        width: width - 60,
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    },
    rowLeft: {
        width: (width - 60) * 1/4,
    },
    rowRight: {
        width: (width - 60) * 3/4,
        paddingVertical: 5,
    },
    rowTitle: {
        color: 'gray',
        fontSize: 13
    },
    text: {
        fontSize: 13,
        textAlign: 'right',
    },
    saveBtn: {
        width: width - 20,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        marginBottom: 30
    },
    saveBtnTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    }
});

export { styles };