import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView, Switch, } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const MyEventsScreen = (props) => {

  return (
    <View style={{ flex:1, }}>

    <View style={{ flex:0.05, flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', justifyContent:'space-between'}}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{ fontWeight:'bold', fontSize:17, }}>Events List</Text>
    <View style={{  backgroundColor:'red', }}></View>
    </View>

    <View style={{  flex:0.9, borderWidth:0, marginTop:20, }}>
    <FlatList
    data={['Django','Flask']}
    renderItem={({item})=><View style={{ width:width*0.95, alignSelf:'center'}}>
    <Image source={require('../../assets/images/djEvents/DJEvent1.png')} style={{ width:'100%', height:150, }} />
    <TouchableOpacity style={{ width:'95%', height:50, alignSelf:'center', alignItems:'center', justifyContent:'center', backgroundColor:Colors.primaryColor, borderRadius:10, marginTop:20,  }}>
      <Text style={{ color:'white', }}>EDIT EVENT COVER</Text>
    </TouchableOpacity>

    <Text style={{ marginLeft:'5%',color:'red', fontSize:16, fontWeight:'bold', marginTop:20, }}>01 Septembre 2022</Text>
    <Text style={{ marginLeft:'5%',color:'black', fontSize:18, fontWeight:'bold', marginTop:5, }}>Django</Text>

    <View style={{ marginLeft:'5%', flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', marginTop:10,  }}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{  fontSize:16, flexGrow:1, marginLeft:5,}}>Paris,France</Text>
    </View>

    <View style={{ marginLeft:'5%', flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', marginTop:10,  }}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{  fontSize:16, flexGrow:1, marginLeft:5,}}>01:17 PM - 06:17 PM</Text>
    </View>

    <View style={{ marginLeft:'5%', flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', marginTop:10,  }}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{  fontSize:16, flexGrow:1, marginLeft:5,}}>0 Views</Text>
    </View>

    <View style={{ marginLeft:'5%', flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', marginTop:10,  }}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{  fontSize:16, flexGrow:1, marginLeft:5, color:'blue'}}>hhtps://tempo.live/django</Text>
    </View>


    <View style={{   paddingLeft:'5%', alignItems:'center', justifyContent:'space-between' ,height:70, width:'95%', alignSelf:'center' , backgroundColor:'white', flexDirection:'row', marginTop:15, borderRadius:10, }}>
    <Text style={{ fontWeight:'bold', fontSize:16, }}>Enable Refunds</Text>
    <View style={{ width:50, height:50, }}>
    <Switch/>
    </View>
    </View>

    <View style={{ width:'95%', alignSelf:'center', backgroundColor:'white', marginTop:15, }}>

            <TouchableOpacity onPress={()=>props.navigation.navigate('EventsTicketsManagement')} style={{ paddingLeft:'5%', flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center', marginTop:15,  }}>
            <View>
              <Text style={{ color:'grey' }}>Ticket Management</Text>
              <Text>Ticket</Text>
            </View>
              <FontAwesome name='arrow-right' color='red' size={20}/>
            </TouchableOpacity>

            <View style={{ paddingLeft:'5%', flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center', marginTop:15,  }}>
            <View>
              <Text style={{ color:'grey' }}>Ticket sold</Text>
              <Text>Ticket</Text>
            </View>
              <FontAwesome name='arrow-right' color='red' size={20}/>
            </View>

            <View style={{ paddingLeft:'5%', flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center', marginTop:15,  }}>
            <View>
              <Text style={{ color:'grey' }}>Total Seats</Text>
              <Text style={{ fontWeight:'bold', }}>0</Text>
            </View>
            <View>
              <Text style={{ color:'grey' }}>Checks-in</Text>
              <Text style={{ fontWeight:'bold', }}>0</Text>
            </View>
            <View>
              <Text style={{ color:'grey' }}>Left</Text>
              <Text style={{ fontWeight:'bold', }}>0</Text>
            </View>
              <FontAwesome name='arrow-right' color='red' size={20}/>
            </View>

    </View>

    <View style={{  paddingTop:10, backgroundColor:'white', marginTop:15, width:'95%', alignSelf:'center', paddingLeft:'5%' }}>
      <Text style={{ fontWeight:'bold', fontSize:15, }}>EVENT MEMBERS</Text>
      <View style={{  flexDirection:'row', justifyContent:'space-between', width:'100%', alignSelf:'center', marginTop:15,  }}>
      <View>
        <Text style={{ color:'grey' }}>Event Management Staff</Text>
        <Text style={{ fontWeight:'bold', }}>1 host, 0 staff members</Text>
      </View>
        <FontAwesome name='arrow-right' color='red' size={20}/>
      </View>
    </View>


    <View style={{ paddingBottom:20, paddingTop:10, backgroundColor:'white', marginTop:15, width:'95%', alignSelf:'center', paddingLeft:'5%' }}>
      <Text style={{ fontWeight:'bold', fontSize:15, }}>HOST OPTIONS</Text>

      <View style={{ flexDirection:'row', width:'95%', alignSelf:'center', justifyContent:'space-between', marginTop:15, }}>
        <View style={{ width:'45%', alignItems:'center', justifyContent:'center'}}>
          <FontAwesome name='arrow-right' color='red' size={25}/>
          <Text style={{ fontWeight:'bold', }}>Edit Event</Text>
        </View>

        <View style={{ width:'45%', alignItems:'center', justifyContent:'center' }}>
          <Feather name='settings' color='red' size={25}/>
          <Text style={{ fontWeight:'bold', }}>Event Privacy</Text>
        </View>
      </View>

      <View style={{ flexDirection:'row', width:'95%', alignSelf:'center', justifyContent:'space-between', marginTop:15, }}>
        <View style={{ width:'45%', alignItems:'center', justifyContent:'center'}}>
          <FontAwesome name='arrow-right' color='red' size={25}/>
          <Text style={{ fontWeight:'bold', }}>Edit Event</Text>
        </View>

        <View style={{ width:'45%', alignItems:'center', justifyContent:'center' }}>
          <Feather name='settings' color='red' size={25}/>
          <Text style={{ fontWeight:'bold', }}>Event Privacy</Text>
        </View>
      </View>
      <View style={{ flexDirection:'row', width:'95%', alignSelf:'center', justifyContent:'space-between', marginTop:15, }}>
        <View style={{ width:'45%', alignItems:'center', justifyContent:'center'}}>
          <Feather name='settings' color='red' size={25}/>
          <Text style={{ fontWeight:'bold', }}>Delete Event</Text>
        </View>
      </View>

    </View>

    <TouchableOpacity style={{ marginTop:20, borderRadius:10, width:'95%', alignSelf:'center', justifyContent:'center', alignItems:'center', height:50, backgroundColor:Colors.primaryColor, marginBottom:25, }}>
      <Text style={{ color:'white'}}> DRAFT EVENT</Text>
    </TouchableOpacity>

    <View style={{ width:'100%', height:5, backgroundColor:'silver', marginBottom:25,}}>
    </View>

    </View>}
    />
    </View>

    </View>

  )
}
MyEventsScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(MyEventsScreen);
