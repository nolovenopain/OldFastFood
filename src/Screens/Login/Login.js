import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, Text, ScrollView, SafeAreaView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Input from '../../Components/Input/Input';
import { width } from '../../Components/Dimensions/Dimensions';
import ForgotPasswordModal from '../../Modal/ForgotPasswordModal/ForgotPasswordModal';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // loaded: false,
            forgotPasswordModalVisible: false,
            emailForgotPasword: ''
        };
        this.clearLoginInput = this.clearLoginInput.bind(this)
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ loaded: true });
        // }, 500);
    }

    setValue = (name, value) => {
        this.setState({ [name]: value}, () => {})
    }

    clearLoginInput = () => {
        this.childEmail.clearOldInput();
        this.childPassword.clearOldInput();
    }

    loginViaFaceBook = () => {

    }

    loginViaGoogle = () => {
        
    }

    goToRegisterScreen = () => {
        this.props.navigation.navigate('Register')
    }

    logIn = () => {
        this.props.navigation.push('BottomNavigation')
    }

    closeForgotPasswordModal = () => {
        this.setState({ forgotPasswordModalVisible: false })
    }

    openForgotPasswordModal = () => {
        this.setState({ forgotPasswordModalVisible: true })
        this.childEmailForgotPassword.clearEmailForgotPassword()
    }

    setEmailForgotPassword = (email) => {
        this.setState({ emailForgotPasword: email })
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                {/* { !this.state.loaded ? loading() : null } */}
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.logo}>
                            <Text style={styles.logoTitle}>Fastfood</Text>
                        </View>
                        <Text style={styles.via}>Login Via</Text>
                        <TouchableOpacity 
                            style={styles.facebookBtn}
                            onPress={this.loginViaFaceBook}
                        >
                            <Text style={styles.facebookTitle}>FACEBOOK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.googleBtn}
                            onPress={this.loginViaGoogle}
                        >
                            <Text style={styles.googleTitle}>GOOGLE</Text>
                        </TouchableOpacity>
                        <View style={styles.orGroup}>
                            <View style={styles.line}></View>
                            <View style={styles.orBox}>
                                <Text style={styles.orTitle}>OR</Text>
                            </View>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>USER NAME</Text>
                            <Input
                                name='username'
                                editable={true}
                                setValue={this.setValue}
                                hideshowText={false}
                                width={width/1.2 - 40}
                                btnGroupWidth={30}
                                length={40}
                                marginLeft={10}
                                keyboardType='email-address'
                                onRef={ref => (this.childEmail = ref)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>PASSWORD</Text>
                            <Input
                                name='password'
                                editable={true}
                                setValue={this.setValue}
                                hideshowText={true}
                                width={width/1.2 - 80}
                                btnGroupWidth={70}
                                length={40}
                                marginLeft={10}
                                marginRight={5}
                                type='Password'
                                onRef={ref => (this.childPassword = ref)}
                            />
                        </View>
                        <View style={styles.forgotPasswordWrapper}>
                            <TouchableWithoutFeedback onPress={this.openForgotPasswordModal}>
                                <Text style={styles.forgotPasswordText}>Forgot your password? Tap here</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableHighlight
                            underlayColor='gray'
                            onPress={this.logIn}
                            style={styles.logInBtn}
                        >
                            <Text style={styles.logInTitle}>SIGN IN</Text>
                        </TouchableHighlight>
                        <Text style={styles.choice}>Or</Text>
                        <TouchableWithoutFeedback onPress={this.goToRegisterScreen}>
                            <Text style={styles.registerText}>Have not an account yet? SIGN UP now</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <ForgotPasswordModal
                        forgotPasswordModalVisible={this.state.forgotPasswordModalVisible}
                        closeForgotPasswordModal={this.closeForgotPasswordModal}
                        setEmailForgotPassword={this.setEmailForgotPassword}
                        emailForgotPasword={this.state.emailForgotPasword}
                        onRef={ref => (this.childEmailForgotPassword = ref)}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

