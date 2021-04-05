import { StyleSheet } from "react-native";
import { width, height } from '../../Components/Dimensions/Dimensions';
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
        paddingTop: 5,
        paddingBottom: 80
    },
    element: {
        width: width - 10,
        height: 180,
        borderWidth: 0.5,
        marginBottom: 10,
        justifyContent: 'flex-end'
    },
    content: {
        width: width - 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    elementTitle: {
        fontSize: 16,
        color: '#fff',
    },
    elementContent: {
        color: '#fff',
        marginBottom: 7
    },
    elementBottom: {
        flexDirection: 'row',
        paddingLeft: 5
    },
    elementText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 13
    }
});

export { styles };