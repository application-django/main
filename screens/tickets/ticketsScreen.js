import React, { Component } from "react";
import { SafeAreaView, Dimensions, View, StatusBar, ScrollView, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import Dialog from "react-native-dialog";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const { width,height } = Dimensions.get('window');

class LiveEventsScreen extends Component{
render(){
return(
	<View style={{flex:1,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
		<Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center'}}>No galllerie</Text>
		<TouchableOpacity style={{marginTop:20,alignSelf:'center',borderRadius:10,justifyContent:'center',alignItems:'center',width:width*0.5,alignSelf:'center',height:40,backgroundColor:Colors.primaryColor}}><Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Create One</Text></TouchableOpacity>
	</View>
)
}

}

class TicketPurchasedScreen extends Component{
render(){
return(
	<View style={{flex:1,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
  <View style={{ width:'60%', height:100, borderWidth:0,  transform:[{rotate:'142deg'}], marginBottom:20, }}>
    <FontAwesome5 name='ticket-alt' color={Colors.primaryColor} size={100} style={{ }} />

  </View>
		<Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center'}}>No Tickets Purshased Yet!</Text>
    <Text style={{ textAlign:'center', marginTop:10, }}>Explore great events nearby</Text>
		<TouchableOpacity style={{marginTop:20,alignSelf:'center',borderRadius:15,justifyContent:'center',alignItems:'center',width:width*0.7,alignSelf:'center',height:50,backgroundColor:Colors.primaryColor}}><Text style={{color:'white',fontWeight:'bold',fontSize:20}}>EXPLORE EVENTS</Text></TouchableOpacity>
	</View>
)
}

}

class TicketsScreen extends Component {

    state = {
        showLogoutDialog: false,
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 7.0 }}>


		<View style={{width,backgroundColor:'red',height:height*0.9,marginTop:0, borderWidth:1,}}>
    <Tab.Navigator screenOptions={({routeName})=>{}}>
      <Tab.Screen name="Tickets" component={TicketPurchasedScreen} />
      <Tab.Screen name="Live EVents" component={LiveEventsScreen}  / >

    </Tab.Navigator>
			</View>
                    </ScrollView>
                    {this.logoutDialog()}
                </View>
            </SafeAreaView>
        )
    }

    logoutDialog() {
        return (
            <Dialog.Container
                visible={this.state.showLogoutDialog}
                contentStyle={styles.logoutDialogStyle}
                headerStyle={{ margin: 0.0, padding: 0.0, }}
                onRequestClose={() => this.setState({ showLogoutDialog: false })}
            >
                <View style={{ backgroundColor: Colors.whiteColor, }}>
                    <View style={styles.logoutTitleWrapStyle}>
                        <Text style={{ ...Fonts.whiteColor20Bold }}>
                            Logout
                        </Text>
                    </View>
                    <Text style={{ marginVertical: Sizes.fixPadding * 2.0, textAlign: 'center', ...Fonts.blackColor18Bold, }}>
                        Are you sure want to logout?
                    </Text>
                    <View style={styles.cancelAndLogoutButtonWrapStyle}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.setState({ showLogoutDialog: false })}
                            style={styles.cancelAndLogoutButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor18ExtraBold }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                this.setState({ showLogoutDialog: false })
                                this.props.navigation.push('Welcome')
                            }}
                            style={styles.cancelAndLogoutButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor18ExtraBold }}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    profileOptions() {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('UserDJs')}
                >
                    {this.profileOptionsSort({ optionTitle: 'My DJs', optionDescription: 'DJs you follow' })}
                </TouchableOpacity>
                {this.divider()}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('BottomTabBar', { index: 2 })}
                >
                    {this.profileOptionsSort({ optionTitle: 'My Tickets', optionDescription: 'List of event tickets you booked' })}
                </TouchableOpacity>
                {this.divider()}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('FavoriteEvents')}
                >
                    {this.profileOptionsSort({ optionTitle: 'Favorite Events', optionDescription: 'List of event that you saved' })}
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('BottomTabBar', { index: 3 })}
                >
                    {this.divider()}
                    {this.profileOptionsSort({ optionTitle: 'Notifications', optionDescription: 'Know about your account activity' })}
                </TouchableOpacity>
                {this.divider()}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('TermsAndConditions')}
                >
                    {this.profileOptionsSort({ optionTitle: 'Terms & Conditions', optionDescription: 'Know about company policies' })}
                </TouchableOpacity>
                {this.divider()}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('FAQs')}
                >
                    {this.profileOptionsSort({ optionTitle: 'FAQs', optionDescription: 'Get your question answered' })}
                </TouchableOpacity>
                {this.divider()}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ showLogoutDialog: true })}
                >
                    {this.profileOptionsSort({ optionTitle: 'Logout', optionDescription: 'Logout from your account' })}
                </TouchableOpacity>
                {this.divider()}
            </View>
        )
    }

    profileOptionsSort({ optionTitle, optionDescription, navigateTo }) {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding, }}>
                <Text style={{ ...Fonts.blackColor16SemiBold }}>
                    {optionTitle}
                </Text>
                <Text style={{ ...Fonts.grayColor12SemiBold }}>
                    {optionDescription}
                </Text>
            </View>
        )
    }

    divider() {
        return (
            <View
                style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginHorizontal: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    profileInfo() {
        return (
            <View style={styles.profileInfoWrapStyle}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <SharedElement id="photo">
                        <Image
                            source={require('../../assets/images/users/user1.png')}
                            style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                        />
                    </SharedElement>

                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                        <Text style={[{ ...Fonts.grayColor14SemiBold },{textAlign:'center'}]}>
                            Hey,
                        </Text>
                        <Text style={[{ ...Fonts.blackColor16SemiBold },{backgroundColor:'white',alignSelf:'center'}]}>
                            Samantha Smith
                        </Text>
                <TouchableOpacity style={{alignSelf:'center',marginTop:5,alignItems:'center' 		,justifyContent:'center',backgroundColor:Colors.primaryColor,width:80,height:30,borderRadius:10}} onPress={() => this.props.navigation.push('EditProfile', { id: "photo" })}><Text style={{color:'white',fontWeight:'bold'}}>Edit</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

    header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.whiteColor20Bold }}>
                    Profile
                </Text>
            </View>
        )
    }
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
    profileInfoWrapStyle: {
        marginTop: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoutDialogStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        width: width - 40,
        padding: 0.0,
    },
    cancelAndLogoutButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        shadowColor: Colors.primaryColor,
        elevation: 5.0,
        borderColor: 'rgba(34, 105, 190, 0.7)',
        borderWidth: 1.0,
        flex: 1, marginHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelAndLogoutButtonWrapStyle: {
        marginHorizontal: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutTitleWrapStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
followers:{
	padding:10,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 0},
        shadowOpacity: 1,
        shadowRadius: 1,
	elevation:20,
	width:'90%',
	alignSelf:'center',
	flexDirection:'row',
	borderWidth:0,
	justifyContent:'space-between',
	borderRadius:10,
	backgroundColor:'white',

},
});

export default withNavigation(TicketsScreen);
