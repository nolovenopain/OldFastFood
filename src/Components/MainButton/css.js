import { StyleSheet } from "react-native";
import { orange } from '../Colors/Color';

const SIZE = 80;

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        opacity: 0.9,
        backgroundColor: orange,
        marginBottom: 20,
    }
});

export { styles };