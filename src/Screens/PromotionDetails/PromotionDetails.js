import React, { Component } from 'react';
import { View, Alert, Text, SafeAreaView, TouchableWithoutFeedback, Share, FlatList, ActivityIndicator } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../Components/Input/Input';
import { width } from "../../Components/Dimensions/Dimensions";
import AsyncStorage from '@react-native-community/async-storage';

const commentList = [
    {userName: 'Sebastian', datetime: '7:08 PM 07/10/2020', comment: 'sure'},
    {userName: 'Christian Dang', datetime: '8:15 PM 07/10/2020', comment: 'dfdgfdgd'},
    {userName: 'Micheal Phel', datetime: '9:10 AM 08/10/2020', comment: 'like this'},
    {userName: 'SELIK SELIK', datetime: '3:08 PM 09/10/2020', comment: 'i need this'},
    {userName: 'Thuong Vo', datetime: '5:20 AM 15/10/2020', comment: 'cool'},
    {userName: 'Mai Tran', datetime: '2:42 AM 20/10/2020', comment: 'wellplay'},
    {userName: 'David Moi', datetime: '1:54 PM 20/10/2020', comment: 'OMG !!!'},
    {userName: 'Sebastian', datetime: '7:08 PM 07/10/2020', comment: 'sure'},
    {userName: 'Christian Dang', datetime: '8:15 PM 07/10/2020', comment: 'dfdgfdgd'},
    {userName: 'Micheal Phel', datetime: '9:10 AM 08/10/2020', comment: 'like this'},
    {userName: 'SELIK SELIK', datetime: '3:08 PM 09/10/2020', comment: 'i need this'},
    {userName: 'Thuong Vo', datetime: '5:20 AM 15/10/2020', comment: 'cool'},
    {userName: 'Mai Tran', datetime: '2:42 AM 20/10/2020', comment: 'wellplay'},
    {userName: 'David Moi', datetime: '1:54 PM 20/10/2020', comment: 'OMG !!!'},
    {userName: 'CUOI CUNG', datetime: '1:54 PM 20/10/2020', comment: 'OMG !!!'}
]

export default class PromotionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            like: false,
            commentList: [],
            page: 1,
            itemLoading: false,
            handleLoadMore: false,
            refresh: true,
            token: ''
        };
    }

    componentDidMount() {
        this.getCommentList(
            this.state.token, 
            this.state.page, 
        );
        setTimeout(() => {
            this.setState({ 
                itemLoading: true,
                handleLoadMore: true,
                refresh: false,
                loaded: true 
            });
        }, 500);
    }

    goBackPreviouScreen = () => {
        this.clearComment()
        this.props.navigation.goBack()
    }

    async getCommentList(token, page) {

    }

    refresh = () => {
        this.setState({ 
            commentList: [],
            page: 1,
            itemLoading: true, 
            handleLoadMore: true,
        },  () => {
                this.getCommentList(
                    this.state.token, 
                    this.state.page, 
                );
            }
        );
    }

    renderRow = ({item, index}) => {
        return(
            <View style={[styles.commentWrapper, {backgroundColor: index % 2 == 0 ? '#fff' : 'rgba(0,0,0,0.1)'}]}>
                <View style={styles.left}>
                    <Icon
                        name='person-circle-outline'
                        size={70}
                    />
                </View>
                <View style={styles.right}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text style={styles.dateTime}>{item.datetime}</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            </View>
        )
    }

    renderFooter = () => {
        return( 
            this.state.itemLoading && this.state.handleLoadMore ? 
            <View style={styles.itemLoader}>
                <ActivityIndicator size='large'/>
            </View> : null
        )
    }

    scrollToTop() {
        if(this.state.commentList.length > 0) {
            this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
        } 
    }

    like = () => {
        this.setState({ like: !this.state.like })
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

    setValue = (name, value) => {
        this.setState({ [name]: value}, () => {})
    }

    clearComment = () => {
        this.childComment.clearOldInput();
    }

    sendCmt = () => {

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
                                
                            </View>
                            <View style={styles.headerRight}>

                            </View>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.bodyHeader}>
                                <Text style={styles.headerTitle}>Promotion Details</Text>
                            </View>
                            <View style={styles.headerBar}>
                                <Text style={styles.headerBarTitle}>FREE BOTTLE OF PROSECCO</Text>
                            </View>
                            <View style={styles.contentWrapper}>
                                <Text style={styles.content}>When you spend more than 50 usd on a menu</Text>
                            </View>
                            <View style={styles.social}>
                                <TouchableWithoutFeedback onPress={this.like}>
                                    <Icon
                                        name={this.state.like ? 'heart' : 'heart-outline'}
                                        size={19}
                                        color='tomato'
                                    />
                                </TouchableWithoutFeedback>
                                <Text style={styles.socialText}>14</Text>
                                <Icon
                                    name='chatbubbles-outline'
                                    size={19}
                                    color='tomato'
                                    style={{ marginLeft: 5 }}
                                />
                                <Text style={styles.socialText}>70</Text>
                                <Icon
                                    name='time-outline'
                                    size={19}
                                    color='tomato'
                                    style={{ marginLeft: 5 }}
                                />
                                <Text style={styles.socialText}>2020-08-26</Text>
                                <TouchableWithoutFeedback onPress={this.onShare}>
                                    <View style={styles.share}>
                                        <Icon
                                            name='share-social-outline'
                                            size={18}
                                            color='tomato'
                                        />
                                        <Text style={styles.socialText}>Share</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={styles.cmtList}>
                                <FlatList
                                    ref={(ref) => { this.flatListRef = ref }}
                                    data={commentList}
                                    refreshing={this.state.refresh}
                                    onRefresh={this.refresh}
                                    renderItem={this.renderRow}
                                    keyExtractor={(item, index) => index.toString()}
                                    onEndReached={this.state.handleLoadMore ? this.handleLoadMore : null}
                                    onEndReachedThreshold={0.1}
                                    ListFooterComponent={this.state.itemLoading ? this.renderFooter : null}
                                    disableVirtualization={true}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.yourCmtWrapper}>
                                <View style={styles.yourCmt}>
                                    <Input
                                        placeholder='Your Comment...'
                                        name='comment'
                                        editable={true}
                                        setValue={this.setValue}
                                        hideshowText={false}
                                        width={width - 90}
                                        multiline={true}
                                        onRef={ref => (this.childComment = ref)}
                                    />
                                </View>
                                <View style={styles.sendCmt}>
                                    <TouchableWithoutFeedback onPress={this.sendCmt}>
                                        <Icon
                                            name='send-outline'
                                            color='tomato'
                                            size={22}
                                        />
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                    </View>
            </SafeAreaView>
        )
    }
}

