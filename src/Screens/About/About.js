import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Linking, Text, ScrollView, SafeAreaView, TouchableHighlight, Share } from 'react-native';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import ShowOpeningHoursModal from '../../Modal/ShowOpeningHoursModal/ShowOpeningHoursModal';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOpeningHoursModalVisible: false,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                })
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    goBackPreviouScreen = () => {
        this.props.navigation.goBack()
    }

    onRegionChange = (region) => { 
        this.setState({ 
            region: {
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
            }
        });
    }
    
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

    goToSendEmail = () => {
        Linking.openURL('mailto: suusoft@gmail.com')
    }

    goToCallNumber = () => {
        Linking.openURL('tel: +(84) 1658296686')
    }

    goToHomePage = () => {
        Linking.openURL('https://suusoft.com')
    }

    goToFaceBook = () => {
        Linking.openURL('https://m.facebook.com/suusoft')
    }

    openShowOpeningHoursModal = () => {
        this.setState({ showOpeningHoursModalVisible: true })
    }

    closeShowOpeningHoursModal = () => {
        this.setState({ showOpeningHoursModalVisible: false })
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
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
                        <View style={styles.headerRight}>
                            <Text style={styles.headerTitle}>About</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.body}>
                            <View style={styles.logo}>
                                <Text style={styles.logoTitle}>Fastfood</Text>
                            </View>

                            <MapView
                                provider={PROVIDER_GOOGLE}
                                region={this.state.region}
                                onRegionChangeComplete={this.onRegionChange}
                                style={styles.bgGeoLocationWrapper}                        
                            >
                                <Marker
                                    coordinate={{
                                        latitude: this.state.region.latitude,
                                        longitude: this.state.region.longitude
                                    }}
                                />        
                            </MapView>

                            <View style={styles.contactInfoWrapper}>
                                <View style={styles.contactRow}>
                                    <View style={styles.contactRowLeft}>
                                        <Text style={styles.contact}>Address: </Text>
                                    </View>
                                    <View style={styles.contactRowRight}>
                                        <Text style={styles.contact}>Hoan Kiem, Hanoi, VietNam</Text>
                                    </View>
                                </View>
                                <View style={styles.contactRow}>
                                    <View style={styles.contactRowLeft}>
                                        <Text style={styles.contact}>Email: </Text>
                                    </View>
                                    <TouchableWithoutFeedback onPress={this.goToSendEmail}>
                                        <View style={[styles.contactRowRight, {borderBottomColor: 'tomato',  borderBottomWidth: 0.5}]}>
                                            <Text style={styles.orange}>suusoft@gmail.com</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.contactRow}>
                                    <View style={styles.contactRowLeft}>
                                        <Text style={styles.contact}>Telephone: </Text>
                                    </View>
                                    <TouchableWithoutFeedback onPress={this.goToCallNumber}>
                                        <View style={[styles.contactRowRight, {borderBottomColor: 'tomato',  borderBottomWidth: 0.5}]}>
                                            <Text style={styles.orange}>+(84) 1658296686</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>

                            <TouchableHighlight
                                underlayColor='silver'
                                style={styles.option}
                                onPress={this.onShare}
                            >
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Icon
                                            name='share-social-outline'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.title}>Share</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Icon
                                            name='chevron-forward'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='silver'
                                style={styles.option}
                                onPress={this.openShowOpeningHoursModal}
                            >
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Icon
                                            name='timer-outline'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.title}>Opening Hours</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Icon
                                            name='chevron-forward'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='silver'
                                style={styles.option}
                                onPress={this.goToHomePage}
                            >
                                <View style={[styles.row, { borderBottomWidth: 0 }]}>
                                    <View style={styles.left}>
                                        <Icon
                                            name='newspaper-outline'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.title}>News</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Icon
                                            name='chevron-forward'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='silver'
                                style={styles.facebook}
                                onPress={this.goToFaceBook}
                            >
                                <View style={styles.fbRow}>
                                    <View style={styles.left}>
                                        <Icon
                                            name='logo-facebook'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.title}>Facebook</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Icon
                                            name='chevron-forward'
                                            color='tomato'
                                            size={25}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <Text style={styles.bottomTitle}>2018 SuuSoft.com</Text>
                            <Text style={styles.madeBy}>Made by BOSS SuuSoft</Text>
                            <Text style={styles.orangeTerm}>Term & Conditions. Privacy Policy</Text>
                        </View>
                    </ScrollView>
                    <ShowOpeningHoursModal
                        showOpeningHoursModalVisible={this.state.showOpeningHoursModalVisible}
                        closeShowOpeningHoursModal={this.closeShowOpeningHoursModal}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

