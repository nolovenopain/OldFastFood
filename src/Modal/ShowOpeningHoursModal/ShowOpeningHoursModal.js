import React, { Component } from 'react';
import { View, Alert, Text, SafeAreaView, TouchableWithoutFeedback, TouchableHighlight, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./css";
import Icon from "react-native-vector-icons/Ionicons";

export default class ShowOpeningHoursModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {

    }

    closeModal = () => {
        this.props.closeShowOpeningHoursModal()
    }

    render() { 
        return (
            <SafeAreaView style={{flex: 1}}>
                <Modal
                    animationType='fade' 
                    transparent={true}
                    visible={this.props.showOpeningHoursModalVisible}
                >
                    <TouchableWithoutFeedback onPress={this.closeModal}>
                        <View style={styles.modalWrapper}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <View style={styles.modalHeader}>
                                        <Text style={styles.modalTitle}>Opening Hours</Text>
                                    </View>
                                    <View style={styles.showTime}>

                                    </View>
                                    <TouchableHighlight
                                        underlayColor='silver'
                                        style={styles.close}
                                        onPress={this.closeModal}
                                    >
                                        <Text style={styles.closeTitle}>Close</Text>
                                    </TouchableHighlight>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </SafeAreaView>
        )
    }
}