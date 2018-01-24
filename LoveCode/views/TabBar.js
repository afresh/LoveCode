'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';

class TabBar extends Component {

    constructor(props) {
        super(props);
    }

    static setAnimationValue({value}) {
        console.log(value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(TabBar.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#f15a22" : "#a1a3a6"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]} // 图标
                        size={30}
                        color={color}/>
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

TabBar.propTypes = {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    activeTab: PropTypes.number, // 当前被选中的tab下标
    tabs: PropTypes.array, // 所有tabs集合

    tabNames: PropTypes.array, // 保存Tab名称
    tabIconNames: PropTypes.array, // 保存Tab图标
};

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 60,
        backgroundColor:'#efefef'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default TabBar;
