import React, { Component } from "react";
import {Alert,Animated,StyleSheet,TouchableOpacity,View, BackHandler, SafeAreaView, StatusBar,Dimensions,Text,ScrollView,Image} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Colors, Fonts, Sizes } from "../constants/styles";
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons, Ionicons,AntDesign,FontAwesome,MaterialCommunityIcons  } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";
import HomeScreen from "../screens/home/homeScreen";
import TicketsScreen from "../screens/tickets/ticketsScreen";
import NotificationScreen from "../screens/notification/notificationScreen";
import ProfileScreen from "../screens/profile/profileScreen";
import CreateEventScreen from '../screens/createEvent/createEventScreen';
import MyEventsScreen from '../screens/myEvents/myEventsScreen';
import DescriptionScreen from "../screens/description/descriptionScreen";
import CategoryScreen from "../screens/category/categoryScreen";
import CoHostScreen from "../screens/coHost/coHostScreen";
import MemberScreen from "../screens/member/memberSceen";
import EditDetailScreen from '../screens/editDetail/editDetailScreen'
import EventsTicketsManagementScreen from '../screens/eventTicketsManagement/eventTicketsManagementScreen'
import CheckInsScreen from '../screens/checkIns/checkInsScreen'
import ContactUsScreen from '../screens/contactUs/contactUsScreen'
//screens/checkIns/checkInsScreen.js
import { createDrawerNavigator } from '@react-navigation/drawer';

//import { createStackNavigator } from '@react-navigation/stack';
import user from '../assets/images/users/user1.png'


const { height } = Dimensions.get('window');
//const user = require('../assets/images/users/user1.png')
console.log(user)
const Drawer = createDrawerNavigator();

class DrawerContent extends Component{
  constructor(props) {
      super(props);
}
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <View style={{ flex: 1 }}>
		<View style={{height:height*0.05}}></View>
		<View style={{height:height*0.8,borderWidth:0}}>
		<View style={{width:60,height:60,backgroundColor:'rgb(240,240,240)',alignSelf:'center',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
				<Image source={user} style={{width:60,height:60,borderRadius:30}} />
		</View>

		<Text style={{fontWeight:'bold',alignSelf:'center'}}>Samantha Smith </Text>
		<Text style={{alignSelf:'center'}}>django</Text>
		<View style={{marginTop:10,flexDirection:'row',justifyContent:'center',alignSelf:'center',width:'70%'}}>
		<View style={{flexDirection:'row',flex:1,alignSefl:'center',borderWidth:0}}>
		<Text style={{fontWeight:'bold',marginRight:10,}}>0</Text>
		<Text>Followers</Text>
		</View>
		<View style={{flexDirection:'row',flex:1,alignSefl:'center'}}>
		<Text style={{fontWeight:'bold',marginRight:10,}}>0</Text>
		<Text>Following</Text>
		</View>
		</View>
		<View style={{marginTop:20,borderWidth:0,height:height*0.5}}>
		<ScrollView>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<MaterialIcons name='person' color={Colors.primaryColor} size={28}/><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>My Page</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyEvents') }} style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<MaterialIcons name="event" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>My Events</Text>
		</TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CreateEvent') }} style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
    <MaterialIcons name="event" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Create Events</Text>
    </TouchableOpacity>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<FontAwesome5 name="folder-plus" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Create Folders</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<MaterialCommunityIcons name="qrcode-scan" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Scans</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<MaterialCommunityIcons name="ticket-account" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>My Tickets</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<MaterialIcons name="favorite" size={24} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Favorites Events</Text>
		</TouchableOpacity>
    <TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
    <MaterialIcons name="favorite" size={24} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Language</Text>
    </TouchableOpacity>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<Ionicons name="notifications" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Notifications</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<Ionicons name="md-people" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Terms and conditions</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')} style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginBottom:7,}}>
		<MaterialIcons name="privacy-tip" size={28} color={Colors.primaryColor} /><Text style={{ fontSize:17, marginLeft:10, borderWidth:0 }}>Privacy</Text>
		</TouchableOpacity>
		</ScrollView>
		</View>

		</View>

		<TouchableOpacity style={{height:40,flexDirection:'row',borderWidth:0,alignItems:'center',paddingLeft:10,marginTop:15}}>
		<FontAwesome name="sign-out" size={28} color={Colors.primaryColor} /><Text style={{fontSize:17, marginLeft:10,}}>Sign Out</Text>
		</TouchableOpacity>

    </View>
    </SafeAreaView>
        )
    }
}

class BottomTabBarScreen extends Component{
    constructor(props) {
        super(props);
	}
        render(){
	return(


	<SafeAreaView style={{ flex: 1,  }}>
      	<StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
  <View style={{ flex: 1 }}>
  <NavigationContainer>
	<Drawer.Navigator drawerContent={(props)=><DrawerContent {...props}/>} screenOptions={{header:()=>null}}>
	<Drawer.Screen name='tabBar' component={tabBar} />
  <Drawer.Screen name='MyEvents' component={MyEventsScreen} />
  <Drawer.Screen name='CreateEvent' component={CreateEventScreen} />
  <Drawer.Screen name='Category' component={CategoryScreen} />
  <Drawer.Screen name='Description' component={DescriptionScreen} />
  <Drawer.Screen name='CoHost' component={CoHostScreen} />
  <Drawer.Screen name='Member' component={MemberScreen} />
  <Drawer.Screen name='EditDetail' component={EditDetailScreen} />
  <Drawer.Screen name='EventsTicketsManagement' component={EventsTicketsManagementScreen} />
  <Drawer.Screen name='CheckIns' component={CheckInsScreen} />
  <Drawer.Screen name='ContactUs' component={ContactUsScreen} />


	</Drawer.Navigator>
  </NavigationContainer>
	</View>
	</SafeAreaView>


	)
    }

}
class tabBar extends Component {

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(100);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();
        return true;
    };

    _spring() {
        this.setState({ backClickCount: 1 }, () => {
            Animated.sequence([
                Animated.spring(
                    this.springValue,
                    {
                        toValue: -.1 * height,
                        friction: 5,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.springValue,
                    {
                        toValue: 100,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
            ]).start(() => {
                this.setState({ backClickCount: 0 });
            });
        });
    }
    index =  1;

    state = {
        currentIndex: this.index ? this.index : 1,
        backClickCount: 0
    };



     _renderIcon = (routeName, selectedTab) => {
      let icon = '';

      switch (routeName) {
        case 'Home':
          icon = 'home';
          break;
        case 'Tickets':
          icon = 'ticket-alt';
          break;
        case 'Profile':
          icon = 'person';
          break;
        case 'Notification':
          icon = 'notifications';
          break;
      }

	if(icon == 'ticket-alt')
	return (<FontAwesome5 name={icon} size={26} color={routeName === selectedTab ? Colors.primaryColor : Colors.lightGrayColor } />)

      return (
	<MaterialIcons name={icon} size={26} color={routeName === selectedTab ? Colors.primaryColor : Colors.lightGrayColor } />
      );
    };

     renderTabBar = ({ routeName, selectedTab, navigate }) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {this._renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      );
    };


render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>

          <CurvedBottomBar.Navigator
screenOptions={{
    header:()=>null
    }}
            style={styles.bottomBar}
            strokeWidth={0.5}
            height={55}
            circleWidth={55}
            bgColor="white"
            initialRouteName="Home"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
              <Animated.View style={styles.btnCircle}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
		                  backgroundColor:'white',
                  }}
                  onPress={() => this.props.navigation.navigate('Tweet')}>
                 <MaterialIcons name="add" size={20} color='blue' />
		 </TouchableOpacity>
              </Animated.View>
            )}
            tabBar={this.renderTabBar}>

            <CurvedBottomBar.Screen
              name="Home"
              position="LEFT">
		{()=><HomeScreen toggleDrawer={this.props.navigation.toggleDrawer} />}

	    </CurvedBottomBar.Screen>

            <CurvedBottomBar.Screen
              name="Tickets"
              position="LEFT">

	     {()=><TicketsScreen />}
	    </CurvedBottomBar.Screen>

            <CurvedBottomBar.Screen
              name="Notification"

              position="RIGHT">

	     {()=><NotificationScreen options={{ tabBarBadge:3 }} />}
	    </CurvedBottomBar.Screen>

            <CurvedBottomBar.Screen
              name="Profile"
              position="RIGHT">

	   {()=><ProfileScreen />}
	   </CurvedBottomBar.Screen>

          </CurvedBottomBar.Navigator>

      </View>
                <Animated.View style={[styles.animatedView, { transform: [{ translateY: this.springValue }] }]}>
                    <Text style={{ ...Fonts.whiteColor14Regular }}>
                        Press Back Once Again to Exit
                    </Text>
                </Animated.View>

</SafeAreaView>
    );
  }
};


  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    button: {
      marginVertical: 5,
    },
    bottomBar: {
    marginBottom:-10,
},
    btnCircle: {
      width: 60,
      height: 60,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 1,
      bottom: 30,
    },
    imgCircle: {
      width: 30,
      height: 30,
      tintColor: 'gray',
    },
    img: {
      width: 30,
      height: 30,
    },
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 0,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    }
  });


BottomTabBarScreen.navigationOptions = () => {
    return {
        header: () => null,
    }
}

export default withNavigation(BottomTabBarScreen);
