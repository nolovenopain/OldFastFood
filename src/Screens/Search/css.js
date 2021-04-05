import { StyleSheet } from "react-native";
import { width, height } from '../../Components/Dimensions/Dimensions';
import { orange } from '../../Components/Colors/Color';

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
        paddingTop: 10,
        paddingBottom: 80
    },
    searchWrapper: {
        width: width - 20,
        height: 45,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBar: {
        width: width - 110,
        paddingHorizontal: 15,
        color: '#fff',
    },
    searchIconWrapper: {
        width: 60,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    separate: {
        borderLeftColor: '#fff',
        borderLeftWidth: 0.8,
        height: 30
    },
    btnDeleteWrapper: {
        width: 30,
        alignItems: 'center'
    }
});

export { styles };