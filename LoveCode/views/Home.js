'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

// 导入系统类
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
    render(){
        return(
            <View style={styles.layer}>
                <View style={styles.top}>
                    <View style={styles.topLocation}>
                        <View style={styles.inner}>
                            <Text style={{fontSize:16,fontWeight:'bold',marginRight:5,color:'white'}}>北京</Text>
                        </View>
                        <View style={styles.inner}>
                            <Icon
                                name={'md-arrow-dropdown'} // 图标
                                size={30}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.inner}>
                        <Icon
                            name={'md-add'} // 图标
                            size={30}
                            color={'white'}
                        />
                    </View>
                </View>
                <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.head}>
                        <View style={styles.buttonItem}>
                            <Icon
                                name={'md-qr-scanner'} // 图标
                                size={30}
                                color={'white'}/>
                            <Text style={{color: 'white'}}>
                                {'扫一扫'}
                            </Text>
                        </View>
                        <View style={styles.buttonItem}>
                            <Icon
                                name={'md-bowtie'} // 图标
                                size={30}
                                color={'white'}/>
                            <Text style={{color: 'white'}}>
                                {'社团'}
                            </Text>
                        </View>
                        <View style={styles.buttonItem}>
                            <Icon
                                name={'md-card'} // 图标
                                size={30}
                                color={'white'}/>
                            <Text style={{color: 'white'}}>
                                {'卡包'}
                            </Text>
                        </View>
                        <View style={styles.buttonItem}>
                            <Icon
                                name={'md-game-controller-b'} // 图标
                                size={30}
                                color={'white'}/>
                            <Text style={{color: 'white'}}>
                                {'游戏'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-square-outline'} // 图标
                                    size={30}
                                    color={'#e0861a'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'扫一扫'}
                                </Text>
                            </View>
                            <View style={styles.buttonItem}>
                                <Icon
                                    name={'md-apps'} // 图标
                                    size={30}
                                    color={'#d3d7d4'}/>
                                <Text style={{color: '#130c0e'}}>
                                    {'更多'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.reminds}>

                    </View>
                    <View style={styles.banner}>

                    </View>
                    <View style={styles.module}>

                    </View>
                    <View style={styles.module}>

                    </View>
                    <View style={styles.tail}>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layer:{
        flex: 1,
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#f6f5ec'
    },
    inner: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    top: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop: 5,
        paddingBottom: 5,
        height:44,
        backgroundColor:'#f15a22'
    },
    topLocation: {
        flexDirection:'row',
        width:screenWidth * 0.8
    },
    head: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop: 8,
        paddingBottom: 8,
        height:70,
        backgroundColor:'#f15a22'
    },
    scrollViewStyle: {
        backgroundColor:'#f6f5ec',
        marginTop:0,
        marginBottom:0
    },
    buttonItem: {
        flexDirection: 'column',
        alignItems: 'center',
        width:70
    },
    buttonGroup: {
        justifyContent:'space-around',
        alignItems:'stretch',
        height:210,
        marginBottom:5,
        backgroundColor:'white'
    },
    buttonRow: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop: 8,
        paddingBottom: 8,
        height:70
    },
    partition: {
        justifyContent:'space-around',
        alignItems:'stretch',
        height:5
    },
    reminds: {
        justifyContent:'space-around',
        alignItems:'stretch',
        height:70,
        marginBottom:5,
        backgroundColor:'white'
    },
    banner: {
        justifyContent:'space-around',
        alignItems:'stretch',
        height:100,
        marginBottom:5,
        backgroundColor:'white'
    },
    module: {
        justifyContent:'space-around',
        alignItems:'stretch',
        height:160,
        marginBottom:5,
        backgroundColor:'white'
    },
    tail: {
        justifyContent:'center',
        alignItems:'center',
        height:44
    },
});
