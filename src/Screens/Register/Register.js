import React, { Component } from 'react';
import { View, TouchableHighlight, TouchableWithoutFeedback, Alert, Text, ScrollView, SafeAreaView } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import { width } from '../../Components/Dimensions/Dimensions';
import Input from '../../Components/Input/Input';
import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // loaded: false,
        };
        this.clearRegisterInput = this.clearRegisterInput.bind(this)
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ loaded: true });
        // }, 500);
    }

    setValue = (name, value) => {
        this.setState({ [name]: value}, () => {})
    }

    clearRegisterInput() {
        this.childEmail.clearOldInput();
        this.childPassword.clearOldInput();
        this.childConfirmPassword.clearOldInput();
        this.childFullname.clearOldInput();
        this.childAddress.clearOldInput();
        this.childPhone.clearOldInput();
    }

    register = () => {

    }

    backToLoInScreen = () => {
        this.props.navigation.goBack()
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
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>EMAIL</Text>
                            <Input
                                name='email'
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
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>CONFIRM PASSWORD</Text>
                            <Input
                                name='confirm_password'
                                editable={true}
                                setValue={this.setValue}
                                hideshowText={true}
                                width={width/1.2 - 80}
                                btnGroupWidth={70}
                                length={40}
                                marginLeft={10}
                                marginRight={5}
                                type='Password'
                                onRef={ref => (this.childConfirmPassword = ref)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>FULL NAME</Text>
                            <Input
                                name='fullName'
                                editable={true}
                                setValue={this.setValue}
                                hideshowText={false}
                                width={width/1.2 - 40}
                                btnGroupWidth={30}
                                length={40}
                                marginLeft={10}
                                onRef={ref => (this.childFullname = ref)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>ADDRESS</Text>
                            <Input
                                name='address'
                                editable={true}
                                setValue={this.setValue}
                                hideshowText={false}
                                width={width/1.2 - 40}
                                btnGroupWidth={30}
                                length={40}
                                marginLeft={10}
                                onRef={ref => (this.childAddress = ref)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputTitle}>PHONE</Text>
                            <Input
                                name='phone'
                                editable={true}
                                setValue={this.setValue}
                                hideshowText={false}
                                width={width/1.2 - 40}
                                btnGroupWidth={30}
                                length={40}
                                marginLeft={10}
                                keyboardType='phone-pad'
                                onRef={ref => (this.childPhone = ref)}
                            />
                        </View>
                        <TouchableHighlight
                            underlayColor='gray'
                            onPress={this.register}
                            style={styles.registerBtn}
                        >
                            <Text style={styles.registerTitle}>COMPLETE</Text>
                        </TouchableHighlight>
                        <TouchableWithoutFeedback onPress={this.backToLoInScreen}>
                            <Text style={styles.backToLoginText}>Have already account? SIGN IN now</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

