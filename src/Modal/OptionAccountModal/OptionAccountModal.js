import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import { styles } from "./css";
import AsyncStorage from '@react-native-community/async-storage';

export default class OptionAccountModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {

    }

    closeModal = () => {
        this.props.closeModalOptionAccount()
    }

    changeEditableStatus = () => {
        this.props.changeEditableStatus()
        this.props.closeModalOptionAccount()
    }

    signOut = () => {
        Alert.alert(
            'Alert',
            'Do you want to log out ?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => {
                    this.props.closeModalOptionAccount()
                    AsyncStorage
                    .clear()
                    .then(() => { this.props.navigation.navigate('UserNavigation')})
                }}
            ],
            {cancelable: true}
        )
    }

    render() { 
        return (
            <SafeAreaView style={{flex: 1}}>
                <Modal
                    animationType='fade' 
                    transparent={true}
                    visible={this.props.optionAccountModalVisible}
                >
                    <TouchableWithoutFeedback onPress={this.closeModal}>
                        <View style={styles.modalWrapper}>
                            <View style={styles.modalContentWrapper}>
                                <TouchableWithoutFeedback>
                                    <View style={styles.modalContent}>
                                        <TouchableWithoutFeedback onPress={this.changeEditableStatus}>
                                            <View style={styles.optionWrapper}>
                                                <Text style={[styles.title, {color: this.props.editable ? 'gray' : 'tomato' }]}>
                                                    Edit
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <View style={styles.separate}></View>
                                        <TouchableWithoutFeedback onPress={this.signOut}>
                                            <View style={styles.optionWrapper}>
                                                <Text style={[styles.title, {color: 'tomato'}]}>
                                                    Sign Out
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </SafeAreaView>
        )
    }
}