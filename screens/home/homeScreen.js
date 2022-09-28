import 'react-native-gesture-handler';
import React, { Component, useState } from "react";
import { SafeAreaView, View, StatusBar, Image, TouchableOpacity, ScrollView, StyleSheet, Text,Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Feather,AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons';
import TrendingDJEventsList from "../trendingDJEvents/trendingsDJEventsList";
import NearByDJEventsList from "../nearByDJEvents/nearByDJEventsList";
import { TabView, TabBar } from 'react-native-tab-view';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu } from 'react-native-material-menu';


const Drawer = createDrawerNavigator();
const locationsList = [
    'Syracuse, Connecticut',
    'South, Dakota',
    'Manchester, Kentucky',
    'Inglewood, Maine',
    'Mesa, New Jersey',
    'Utica, Pennsylvania',
    'Allentown, New Mexico',
];
const {width,height} = Dimensions.get('window')


class Home extends Component{
state = {
        showLocationOptions: false,
        selectedLocation: locationsList[0],
    }

    render() {
	//console.log(this.props.navigation)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>
                    {this.header()}
                    <TrendingAndNearByDJEvents props={this.props} />
                </View>
            </SafeAreaView>
        )
    }

    header() {
        return (
            <View style={styles.headerWrapStyle}>
                <View style={styles.headerLocationInfoWrapStyle}>
                    <TouchableOpacity style={{}} onPress={()=>this.props.toggleDrawer()} >
			<View style={{width:30,height:3,borderRadius:3,backgroundColor:'white',marginBottom:5}} ></View>
			<View style={{width:30,height:3,borderRadius:3,backgroundColor:'white',marginBottom:5}} ></View>
			<View style={{width:30,height:3,borderRadius:3,backgroundColor:'white',marginBottom:5}} ></View>
		    </TouchableOpacity>

                    <View style={{ flex: 0.9, marginLeft: Sizes.fixPadding, marginLeft:20,  }}>
                        <Text style={{ ...Fonts.whiteColor14Regular }}>
                            Your Location
                        </Text>
                        <Menu
                            visible={this.state.showLocationOptions}
                            style={{ paddingVertical: Sizes.fixPadding - 5.0, }}
                            anchor={
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => this.setState({ showLocationOptions: true })}
                                    style={{ flexDirection: 'row', alignItems: 'center', }}
                                >
                                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor16SemiBold }}>
                                        {this.state.selectedLocation}
                                    </Text>
                                    <MaterialIcons
                                        name="arrow-drop-down"
                                        color={Colors.whiteColor}
                                        size={24}
                                        style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                                    />
                                </TouchableOpacity>
                            }
                            onRequestClose={() => this.setState({ showLocationOptions: false })}
                        >
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    locationsList.map((item, index) => (
                                        <Text
                                            key={index}
                                            style={{ marginHorizontal: Sizes.fixPadding, marginTop: Sizes.fixPadding, ...Fonts.blackColor16SemiBold }}
                                            onPress={() => this.setState({ selectedLocation: item, showLocationOptions: false })}
                                        >
                                            {item}
                                        </Text>
                                    ))
                                }
                            </ScrollView>
                        </Menu>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this.props.navigation.push('MapView')}
                    >
                        <Image
                            source={require('../../assets/images/icons/map.png')}
                            style={{ width: 20.0, height: 20.0, resizeMode: 'contain' }}
                        />
                    </TouchableOpacity>
                    <Feather
                        name="search"
                        size={17}
                        color={Colors.whiteColor}
                        style={{ marginLeft: Sizes.fixPadding + 5.0 }}
                        onPress={() => this.props.navigation.push('Search')}
                    />
                </View>
            </View>
        )
    }
}

const TrendingAndNearByDJEvents = ({ props }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Social' },
        { key: 'second', title: 'Events' },
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <TrendingDJEventsList props={props} />;
            case 'second':
                return <NearByDJEventsList props={props} />;
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: Colors.primaryColor, }}
                    style={{ marginTop: Sizes.fixPadding, backgroundColor: Colors.whiteColor, elevation: 0.0, marginHorizontal: Sizes.fixPadding * 2.0, }}
                    renderLabel={({ route, focused }) => (
                        <Text
                            style={focused ? { ...Fonts.primaryColor18Bold } : { ...Fonts.lightGrayColor18Bold }}>
                            {route.title}
                        </Text>
                    )}
                />
            )}
        />
    )
}
/*
class HomeScreen extends Component {

render(){

return(
<>
<Drawer.Navigator drawerContent={()=><DrawerContent/>} screenOptions={{header:()=>null}}>
<Drawer.Screen name='home' component={Home}/>
</Drawer.Navigator>
</>
	
	)
}

    
}*/

const styles = StyleSheet.create({
    headerWrapStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        borderBottomRightRadius: Sizes.fixPadding + 5.0,
        padding: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerLocationInfoWrapStyle: {
        flex: 1,
        marginRight: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default withNavigation(Home);