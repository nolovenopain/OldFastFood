import React, { Component } from 'react';
import { View, Alert, Text, SafeAreaView, TouchableWithoutFeedback, TouchableHighlight, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./css";
import Icon from "react-native-vector-icons/Ionicons";

export default class ForgotPasswordModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputWithDots: this.props.emailForgotPasword ? (this.props.emailForgotPasword.length > 40 ? this.props.emailForgotPasword.substr(0,40) + '...' : this.props.oldValue) : '',
            input: this.props.emailForgotPasword ? this.props.emailForgotPasword : '',
            isFocused: false,
        };
    }

    componentDidMount() {
        this.props.onRef ? this.props.onRef(this) : null
    }

    componentWillUnmount() {
        this.props.onRef ? this.props.onRef(null) : null
    }

    closeModal = () => {
        this.props.closeForgotPasswordModal()
    }

    handleFocus = () => 
        this.setState({ 
            isFocused: true, 
            inputWithDots: this.state.input
        });

    handleBlur = () =>  
        this.setState({ 
            isFocused: false,
            inputWithDots: this.state.input.length > 40 ? this.state.input.substr(0,40) + '...' : this.state.input 
        });

    clearEmailForgotPassword() {
        this.setState({ 
            inputWithDots: '', 
            input: '' 
        });
        this.props.setEmailForgotPassword('');
    }

    sendEmail = () => {
        
    }

    render() { 
        return (
            <SafeAreaView style={{flex: 1}}>
                <Modal
                    animationType='fade' 
                    transparent={true}
                    visible={this.props.forgotPasswordModalVisible}
                >
                    <TouchableWithoutFeedback onPress={this.closeModal}>
                        <View style={styles.modalWrapper}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <Text style={styles.modalTitle}>Forgot Pasword</Text>
                                    <View style={styles.input}>
                                        <TextInput
                                            style={styles.emailForgotPasword}
                                            placeholder='Email'
                                            onChangeText={(input) => {
                                                this.props.setEmailForgotPassword(input),
                                                this.setState({ 
                                                    input, 
                                                    inputWithDots: input 
                                                });
                                            }}
                                            value={this.state.inputWithDots}
                                            onFocus={this.handleFocus}
                                            onBlur={this.handleBlur}
                                            autoCapitalize='none'
                                            keyboardType='email-address'
                                            underlineColorAndroid='transparent'
                                        />
                                        {this.state.inputWithDots != '' && 
                                            this.state.inputWithDots != null && 
                                                this.state.inputWithDots != undefined ? 
                                                    <TouchableOpacity
                                                        style={styles.btnDelete}
                                                        onPress={() => {
                                                            this.setState({ 
                                                                inputWithDots: '', 
                                                                input: '' 
                                                            }),
                                                            this.props.setEmailForgotPassword('')
                                                        }}
                                                    >
                                                        <Icon
                                                            name='close-circle'
                                                            size={20}
                                                            color='silver'
                                                        />
                                                    </TouchableOpacity> : null
                                        }
                                    </View>
                                    <View style={styles.noteWrapper}>
                                        <Text style={styles.note}>
                                            To reset your password please enter your email address and we will send
                                            you an email with instuctrions on how to reset your password
                                        </Text>
                                    </View>
                                    <TouchableHighlight
                                        underlayColor='gray'
                                        onPress={this.sendEmail}
                                        style={styles.sendEmailBtn}
                                    >
                                        <Text style={styles.sendEmailTitle}>Send</Text>
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