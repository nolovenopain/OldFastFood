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
    elementWrapper: {
        width: (width - 15)/2,
        height: 180,
        marginLeft: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        marginBottom: 5,
    },
    element: {
        width: (width - 15)/2,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    elementTitle: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        lineHeight: 25
    }
});

export { styles };