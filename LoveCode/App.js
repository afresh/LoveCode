/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './views/TabBar';
import Home from "./views/Home";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['首页', '活动', '视频', '我的'],
            tabIconNames: ['md-home', 'md-aperture', 'md-videocam', 'md-person'],
        };
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <TabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>

                <Home tabLabel='key1'/>

                <View style={styles.content} tabLabel='key2'>
                    <Text>#2</Text>
                </View>

                <View style={styles.content} tabLabel='key3'>
                    <Text>#3</Text>
                </View>

                <View style={styles.content} tabLabel='key4'>
                    <Text>#4</Text>
                </View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    }
});
