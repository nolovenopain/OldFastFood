import React, { Component } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { width, height } from '../../Components/Dimensions/Dimensions';
import { styles } from '../Splash/css';

export default class Splash extends Component {

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }
    
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
          this.props.navigation.navigate('RootNavigation');
        }
    }
    
    render() {
        return (
            // <ImageBackground
            //     style={{ width: width, height: height }}
            //     source={require('../../Assets/Image/splash_screen.jpg')}
            //     resizeMode='stretch'
            // />
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text>This is splash</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
