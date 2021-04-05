/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import InitNavigation from './src/Navigators/InitNavigation';
import {orange} from './src/Components/Colors/Color';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<>
				<StatusBar backgroundColor={orange}/>
				<InitNavigation/>
			</>
		);
	}  
}
