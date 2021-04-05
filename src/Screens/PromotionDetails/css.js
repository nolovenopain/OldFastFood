import { StyleSheet } from "react-native";
import { width, height } from "../../Components/Dimensions/Dimensions";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        flex: 1
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
        flex: 1
    },
    bodyHeader: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 10
    },
    social: {
        flexDirection: 'row',
        paddingLeft: 15,
        marginBottom: 10
    },
    socialText: {
        marginLeft: 5,
        fontSize: 13
    },
    headerBar: {
        width: width,
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingLeft: 15,
        marginBottom: 15
    },
    headerBarTitle: {
        fontWeight: 'bold'
    },
    contentWrapper: {
        width: width,
        paddingLeft: 15,
        marginBottom: 15
    },
    share: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    cmtList: {
        flex: 1
    },
    commentWrapper: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        width: 80,
        alignItems: 'center',
    },
    right: {
        width: width - 80,
        paddingRight: 20,
        paddingLeft: 5, 
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    dateTime: {
        fontSize: 12,
        color: 'silver',
        fontStyle: 'italic',
        marginBottom: 3
    },
    comment: {
        fontSize: 12,
        color: 'gray',
    },
    yourCmtWrapper: {
        flexDirection: 'row',
        height: 60,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    yourCmt: {
        width: width - 70,
        borderRadius: 20,
        borderColor: 'tomato',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendCmt: {
        width: 50,
        alignItems: 'center',
    },
    bottom: {
        
    }
});

export { styles };