import React, { Component } from 'react';
import { View, Alert, Text, SafeAreaView, TouchableWithoutFeedback, Image, FlatList, ActivityIndicator, TouchableHighlight, ImageBackground } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";import Icon from 'react-native-vector-icons/Ionicons';
import { width } from "../../Components/Dimensions/Dimensions";
import AsyncStorage from '@react-native-community/async-storage';

export default class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            like: false,
            foodList: [
                {id: 0, shortName: 'curly fries arby', fullName: 'curly fries arby ádgadasdasdasdad', describe: 'this is bami bread for old people who can not eat hard food', price: 3.21, quantity: 0},
                {id: 1, shortName: 'curly fries arby', fullName: 'curly fries arby ádgadasdasdasdad', describe: 'this is bami bread for old people who can not eat hard food', price: 3.21, quantity: 0},
                {id: 2, shortName: 'curly fries arby', fullName: 'curly fries arby ádgadasdasdasdad', describe: 'this is bami bread for old people who can not eat hard food', price: 3.21, quantity: 0},
                {id: 3, shortName: 'curly fries arby', fullName: 'curly fries arby ádgadasdasdasdad', describe: 'this is bami bread for old people who can not eat hard food', price: 3.21, quantity: 0},
                {id: 4, shortName: 'curly fries arby', fullName: 'curly fries arby ádgadasdasdasdad', describe: 'this is bami bread for old people who can not eat hard food', price: 3.21, quantity: 0},
                {id: 5, shortName: 'curly fries arby', fullName: 'curly fries arby ádgadasdasdasdad', describe: 'this is bami bread for old people who can not eat hard food', price: 3.21, quantity: 0}
            ],
            page: 1,
            itemLoading: false,
            handleLoadMore: false,
            refresh: true,
            token: '',
            grid: true
        };
    }

    componentDidMount() {
        this.getFoodList(
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
        this.props.navigation.goBack()
    }

    async getFoodList(token, page) {

    }

    refresh = () => {
        this.setState({ 
            foodList: [],
            page: 1,
            itemLoading: true, 
            handleLoadMore: true,
        },  () => {
                this.getFoodList(
                    this.state.token, 
                    this.state.page, 
                );
            }
        );
    }

    renderRow = ({item}) => {
        return(
            this.state.grid ? 
                <TouchableWithoutFeedback onPress={() => this.plus(item)}>
                    <View style={styles.elementGrid}>
                        <View style={styles.elementGridTop}>
                            <ImageBackground
                                style={styles.gridLayoutImage}
                                source={require('../../Assets/noImage.jpg')}
                            >
                                <View style={styles.iconGroup}>
                                    <View style={styles.like}>
                                        <Icon
                                            name='ios-heart-circle-outline'
                                            color='#fff'
                                            size={25}
                                        />
                                    </View>
                                    <View style={[styles.sale, { marginLeft: 10 }]}>
                                        <Text style={styles.saleText}>Sale</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.elementGridBody}>
                            <View style={styles.elementGridBodyTop}>
                                <View style={styles.elementGridBodyTopLeft}>
                                    <Text 
                                        style={styles.shortName}
                                        numberOfLines={1}
                                    >
                                        {item.shortName.toUpperCase()}
                                    </Text>
                                </View>
                                <View style={styles.elementGridBodyTopRight}>
                                    <Text 
                                        style={styles.price}
                                        numberOfLines={1}
                                    >
                                        {item.price}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.fullNameWrapper}>
                                <Text 
                                    style={styles.fullName}
                                    numberOfLines={1}
                                >
                                    {item.fullName.toUpperCase()}
                                </Text>
                            </View>
                            <View style={styles.describeWrapper}>
                                <Text 
                                    style={styles.describe}
                                    numberOfLines={3}
                                >
                                    {item.describe}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.elementGridBottom}>
                            {item.quantity == 0 ? 
                                <TouchableWithoutFeedback onPress={() => this.plus(item)}>
                                    <View style={styles.addToCartBtnGrid}>
                                        <Text style={styles.addToCart}>ADD TO CART</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                    :
                                <View style={styles.groupCountQuantityGrid}>
                                    <TouchableWithoutFeedback onPress={() => this.minus(item)}>
                                        <View style={styles.minusBtn}>
                                            <Icon
                                                name='remove'
                                                color='#fff'
                                                size={20}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <View style={styles.showQuantityGrid}>
                                        <View style={styles.borderShowGrid}>
                                            <Text style={styles.quantity}>{item.quantity}</Text>    
                                        </View>
                                    </View>
                                    <TouchableWithoutFeedback onPress={() => this.plus(item)}>
                                        <View style={styles.plusBtn}>
                                            <Icon
                                                name='add'
                                                color='#fff'
                                                size={20}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            } 
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                    :
                <TouchableWithoutFeedback onPress={() => item.quantity > 0 ? {} : this.plus(item)}>
                    <View style={styles.elementNormal}>
                        <View style={styles.left}>
                            <Image
                                style={styles.normalLayoutImage}
                                source={require('../../Assets/noImage.jpg')}
                            />
                        </View>
                        <View style={styles.right}>
                            <View style={styles.contentGroup}>
                                <View style={styles.contentLeft}>
                                    <Text style={styles.shortName}>{item.shortName.toUpperCase()}</Text>
                                    <Text 
                                        style={styles.fullName}
                                        numberOfLines={1}
                                    >
                                        {item.fullName.toUpperCase()}
                                    </Text>
                                    <Text 
                                        style={styles.describe}
                                        numberOfLines={3}
                                    >
                                        {item.describe}
                                    </Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                                <View style={styles.contentRight}>
                                    <View style={[styles.like, { marginBottom: 10 }]}>
                                        <Icon
                                            name='ios-heart-circle-outline'
                                            color='#fff'
                                            size={25}
                                        />
                                    </View>
                                    <View style={styles.sale}>
                                        <Text style={styles.saleText}>Sale</Text>
                                    </View>
                                </View>
                            </View>
                            {item.quantity == 0 ? 
                                <TouchableWithoutFeedback onPress={() => this.plus(item)}>
                                    <View style={styles.addToCartBtnNormal}>
                                        <Text style={styles.addToCart}>ADD TO CART</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                    :
                                <View style={styles.groupCountQuantityNormal}>
                                    <TouchableWithoutFeedback onPress={() => this.minus(item)}>
                                        <View style={styles.minusBtn}>
                                            <Icon
                                                name='remove'
                                                color='#fff'
                                                size={20}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <View style={styles.showQuantityNormal}>
                                        <View style={styles.borderShowNormal}>
                                            <Text style={styles.quantity}>{item.quantity}</Text>    
                                        </View>
                                    </View>
                                    <TouchableWithoutFeedback onPress={() => this.plus(item)}>
                                        <View style={styles.plusBtn}>
                                            <Icon
                                                name='add'
                                                color='#fff'
                                                size={20}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            } 
                        </View>
                    </View>
                </TouchableWithoutFeedback>   
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
        if(this.state.foodList.length > 0) {
            this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
        } 
    }

    changeLayout = () => {
        this.setState({ grid: !this.state.grid })
    }

    plus = (item) => {
        var foodList = [];
        this.state.foodList.map((value, key) => {
            if(value.id == item.id) {
                value.quantity = value.quantity + 1
            }
            foodList.push(value)
        })
        this.setState({ foodList })
    }

    minus = (item) => {
        var foodList = [];
        this.state.foodList.map((value, key) => {
            if(value.id == item.id && value.quantity > 0) {
                value.quantity = value.quantity - 1
            }
            foodList.push(value)
        })
        this.setState({ foodList })
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
                                <View style={styles.bodyHeaderLeft}>

                                </View>
                                <View style={styles.bodyHeaderCenter}>
                                    <Text style={styles.headerTitle}>Food List</Text>
                                </View>
                                <View style={styles.bodyHeaderRight}>
                                    <TouchableHighlight 
                                        style={styles.changeLayoutList}
                                        underlayColor='silver'
                                        onPress={this.changeLayout}
                                    >
                                        <Icon
                                            name={this.state.grid ? 'grid' : 'list'}
                                            color='tomato'
                                            size={25}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={styles.foodList}>
                                <View style={styles.listHeader}>
                                    <Text style={styles.listHeaderText}>{this.state.foodList.length} ITEMS READY FOR YOU</Text>
                                </View>
                                <FlatList
                                    contentContainerStyle={{ paddingTop: 10 }}
                                    ref={(ref) => { this.flatListRef = ref }}
                                    data={this.state.foodList}
                                    refreshing={this.state.refresh}
                                    onRefresh={this.refresh}
                                    renderItem={this.renderRow}
                                    key={this.state.grid ? '#' : '_'}
                                    keyExtractor={(item, index) => this.state.grid ? '#' + item.id.toString() : '_' + item.id.toString()}
                                    onEndReached={this.state.handleLoadMore ? this.handleLoadMore : null}
                                    onEndReachedThreshold={0.1}
                                    ListFooterComponent={this.state.itemLoading ? this.renderFooter : null}
                                    disableVirtualization={true}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={this.state.grid ? 2 : null}
                                />
                            </View>
                        </View>
                    </View>
            </SafeAreaView>
        )
    }
}

