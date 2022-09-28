import React, { Component, useState, useRef } from "react";
import { SafeAreaView, Dimensions, Animated, View, StatusBar, StyleSheet, Text, FlatList,TouchableOpacity,ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { Ionicons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';

const notificationsList = [
    {
        key: '1',
        time: '2h ago',
	title: 'Nouvelle',
	content : [{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},]
    },

    {
        key: '2',
        title: 'Cette Semaine',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
        time: '2 days ago',
	content : [{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},]
    },
    {
        key: '3',
        title: 'Ce mois ci',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
        time: '2 days ago',
	content : [{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},
,
{
        title: 'Checkout New Trending ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscig',
		},]
    },
];

const {width,height} = Dimensions.get('screen')
class NotificationScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>
                    {this.header()}
                    <Notifications />
                </View>
            </SafeAreaView>
        )
    }

    header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.whiteColor20Bold }}>
                    Notifications
                </Text>
            </View>
        )
    }
}

const Notifications = () => {

	return( <View style={{ width:'90%', alignSelf:'center'}} >

			<View>
				<FlatList
				data={notificationsList}
				style={{ borderWidth:0,height:height*0.68}}
				showVerticalScrollbarindicator={false}
				renderItem={({item})=><View style={{ width:width*0.9,  marginBottom:15, }}>
					<Text style={{ fontWeight:'bold', fontSize:17, marginBottom:5}}>{item.title}</Text>
					
					<View >
					{
						item.content.map(item=><View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:10, }}>
					<View style={styles.box}></View>
					<View style={{flex:2,}}>
					<Text style={{fontSize:13,fontWeight:'bold'}}>{item.title}</Text>
					<Text>{item.description}</Text>
					</View>
					<TouchableOpacity style={{ flex:1, backgroundColor:Colors.primaryColor, height:30,borderRadius:5,justifyContent:'center',alignItems:'center' }}>
						<Text style={{ color:'white', fontWeight:'bold' }}>S'abonner</Text>
					</TouchableOpacity>
					</View>)
					}
					</View>
				</View>}
			 	/>
				
			</View>

		</View>	
	)
	

	} 
const styles = StyleSheet.create({
    headerWrapStyle: {
        paddingTop: Sizes.fixPadding * 2.0,
        paddingBottom: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        borderBottomRightRadius: Sizes.fixPadding + 5.0,
    },
    notificationIconWrapStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        borderColor: Colors.primaryColor,
        borderWidth: 2.0,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3.0,
    },
    notificationWrapStyle: {
        marginBottom: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        flex: 1,
        marginBottom: Sizes.fixPadding,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: 54.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333',
        elevation: 0.0,
    },
box:{
	width:45,
	height:45,
	borderRadius:25,
	borderColor:Colors.primaryColor,
	borderWidth:1,
	marginRight:5,
	},
});

export default withNavigation(NotificationScreen);