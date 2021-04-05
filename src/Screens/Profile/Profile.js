import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image, Text, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../Components/Input/Input';
import { width } from "../../Components/Dimensions/Dimensions";
import OptionAccountModal from '../../Modal/OptionAccountModal/OptionAccountModal';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            optionAccountModalVisible: false,
            editable: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 500);
    }

    setValue = (name, value) => {
        this.setState({ [name]: value}, () => {})
    }

    goBackPreviouScreen = () => {
        this.props.navigation.goBack()
    }

    openModalOptionAccount = () => {
        this.setState({ optionAccountModalVisible: true })
    }

    closeModalOptionAccount = () => {
        this.setState({ optionAccountModalVisible: false })
    }

    changeEditableStatus = () => {
        this.setState({ editable: !this.state.editable })
    }

    save = () => {

    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                { !this.state.loaded ? loading() : null }
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <TouchableWithoutFeedback onPress={this.goBackPreviouScreen}>
                                    <Icon
                                        name='arrow-back-circle-outline'
                                        color='#fff'
                                        size={29}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.headerCenter}>
                                <Text style={styles.headerTitle}>My Details</Text>
                            </View>
                            <View style={styles.headerRight}>
                                
                            </View>
                        </View>
                        <View style={styles.body}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.optionBtnWrapper}>
                                    <TouchableWithoutFeedback onPress={this.openModalOptionAccount}>
                                        <Icon
                                            name='ellipsis-vertical-outline'
                                            color='tomato'
                                            size={30}
                                        />
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.profileBox}>
                                    <View style={styles.avatarWrapper}>
                                        <Image
                                            style={styles.avatar}
                                            source={require('../../Assets/noAvatar.png')}
                                        />
                                    </View>
                                    <View style={styles.boxTitleWrapper}>
                                        <Text style={styles.boxTitle}>DELIVERY DETAIL</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.rowLeft}>
                                            <Text style={styles.rowTitle}>Fullname</Text>
                                        </View>
                                        <View style={styles.rowRight}>
                                            <Input
                                                name='fullName'
                                                editable={this.state.editable}
                                                setValue={this.setValue}
                                                hideshowText={false}
                                                width={(width - 60) * 3/4}
                                                oldValue='Ryan Nguyen'
                                                multiline={true}
                                                textAlign='right'
                                                fontSize={13}
                                                onRef={ref => (this.childFullName = ref)}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.rowLeft}>
                                            <Text style={styles.rowTitle}>Address</Text>
                                        </View>
                                        <View style={styles.rowRight}>
                                            <Input
                                                name='address'
                                                editable={this.state.editable}
                                                setValue={this.setValue}
                                                hideshowText={false}
                                                width={(width - 60) * 3/4}
                                                oldValue=''
                                                multiline={true}
                                                textAlign='right'
                                                fontSize={13}
                                                onRef={ref => (this.childAddress = ref)}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.rowLeft}>
                                            <Text style={styles.rowTitle}>Email</Text>
                                        </View>
                                        <View style={styles.rowRight}>
                                            <Input
                                                name='email'
                                                editable={this.state.editable}
                                                setValue={this.setValue}
                                                hideshowText={false}
                                                width={(width - 60) * 3/4}
                                                oldValue='sdfbsfbsdfbsdhfbsdhbsdhbsdfjsdbfhsdbfjsdbfhjdbjsdfdsfsdf@gmail'
                                                multiline={true}
                                                textAlign='right'
                                                fontSize={13}
                                                onRef={ref => (this.childEmail = ref)}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.rowLeft}>
                                            <Text style={styles.rowTitle}>Phone</Text>
                                        </View>
                                        <View style={styles.rowRight}>
                                            <Input
                                                name='address'
                                                editable={this.state.editable}
                                                setValue={this.setValue}
                                                hideshowText={false}
                                                width={(width - 60) * 3/4}
                                                oldValue='0981963960'
                                                multiline={true}
                                                textAlign='right'
                                                fontSize={13}
                                                onRef={ref => (this.childAddress = ref)}
                                            />
                                        </View>
                                    </View>
                                </View>
                                {this.state.editable ? 
                                    <TouchableHighlight
                                        underlayColor='gray'
                                        style={styles.saveBtn}
                                        onPress={this.save}
                                    >
                                        <Text style={styles.saveBtnTitle}>Save</Text>
                                    </TouchableHighlight> : null
                                }   
                            </ScrollView>
                        </View>
                        {/* MODAL OPTION ACCOUNT */}
                            <OptionAccountModal
                                optionAccountModalVisible={this.state.optionAccountModalVisible}
                                closeModalOptionAccount={this.closeModalOptionAccount}
                                editable={this.state.editable}
                                changeEditableStatus={this.changeEditableStatus}
                                navigation={this.props.navigation}
                            />
                        {/* MODAL OPTION ACCOUNT */}
                    </View>
            </SafeAreaView>
        )
    }
}

