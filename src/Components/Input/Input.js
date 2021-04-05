import React, { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./css";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputWithDots: this.props.oldValue ? (this.props.oldValue.length > this.props.length &&  !this.props.multiline ? this.props.oldValue.substr(0,this.props.length) + '...' : this.props.oldValue) : '',
            showPass: this.props.hideshowText,
            close: false,
            isFocused: false,
            input: this.props.oldValue ? this.props.oldValue : ''
        };
    }

    componentDidMount() {
        this.props.onRef ? this.props.onRef(this) : null
    }
    
    componentWillUnmount() {
        this.props.onRef ? this.props.onRef(null) : null
    }

    showPass() {
        this.setState({
            showPass: !this.state.showPass
        })
    }

    handleFocus = () => 
        this.setState({ 
            isFocused: true, 
            inputWithDots: this.state.input
        });

    handleBlur = () =>  
        this.setState({ 
            isFocused: false,
            inputWithDots: this.state.input.length > this.props.length && !this.props.multiline ? this.state.input.substr(0,this.props.length) + '...' : this.state.input 
        });
    
    clearOldInput() {
        this.textInput.clear();
        this.setState({ 
            inputWithDots: '', 
            input: '' 
        });
        this.props.setValue(this.props.name, '');
    }
    
    render() {
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: !this.state.isFocused && this.state.inputWithDots == '' ? 15 : -10,
            fontSize: 12,
            color: '#929caa',
        };

        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        placeholder={this.props.placeholder ? this.props.placeholder : ''}
                        style={
                            [
                                styles.inputText, 
                                this.props.multiline ? null : { height: 35 }, 
                                this.props.fontSize ? { fontSize: this.props.fontSize } : { fontSize: 14 },
                                this.props.textAlign ? { textAlign: this.props.textAlign } : null,
                                { width: this.props.width, marginLeft: this.props.marginLeft }
                            ]
                        }
                        secureTextEntry={this.state.showPass}
                        onChangeText={(input) => {
                            this.props.setValue(this.props.name, input);
                            this.setState({ 
                                input, 
                                inputWithDots: input 
                            });
                        }}
                        value={this.state.inputWithDots}
                        autoCapitalize='none'
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        editable={this.props.editable}
                        multiline={this.props.multiline ? true : false}
                        textAlignVertical='center'
                        keyboardType={this.props.keyboardType}
                        ref={input => { this.textInput = input }}
                        underlineColorAndroid='transparent'
                    />
                    <View style={[styles.btnGroup, {width: this.props.btnGroupWidth}]}>
                        {(this.state.inputWithDots != '' && 
                            this.state.inputWithDots != null && 
                                this.state.inputWithDots != undefined && 
                                    this.props.editable == true && 
                                        this.props.marginLeft) ? 
                            ( <TouchableOpacity
                                style={[{marginLeft: this.props.marginLeft, marginRight: this.props.marginRight ? this.props.marginRight : 0}, styles.btnDelete]}
                                onPress={() => {
                                    this.setState({ 
                                        inputWithDots: '', 
                                        input: '' 
                                    }),
                                    this.props.setValue(this.props.name, '')
                                }}
                            >
                                <Icon
                                    name='close-circle'
                                    size={20}
                                    color='silver'
                                />
                            </TouchableOpacity> ) : null
                        }
                        {this.props.type == 'Password' ? 
                            <TouchableOpacity
                                style={styles.btnEye}
                                onPress={() => this.showPass()}
                            >
                                <Icon 
                                    name={this.state.showPass ? 'ios-eye' : 'ios-eye-off'}
                                    size={23}
                                    color='silver' 
                                />
                            </TouchableOpacity> : null
                        }
                    </View>
                </View>
            </View>
        );
    }
}