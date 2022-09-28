import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView, Switch, } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const EventsTicketsManagementScreen = (props) => {

  return (
    <View style={{ flex:1, }}>

    <View style={{ backgroundColor:'white', flex:0.09, flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', justifyContent:'space-between'}}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{ fontWeight:'bold', fontSize:17, }}>Events Tickets Management</Text>
    <View style={{  backgroundColor:'red', }}></View>
    </View>

    <View style={{ flex:0.81, }}>

    <TouchableOpacity style={{ height:70, alignItems:'center', justifyContent:'center',}}>
      <Text style={{ color:'red', fontSize:15, }}> + Add New Ticket </Text>
    </TouchableOpacity>

    <View style={{ width:'100%', paddingHorizontal:10, paddingTop:10, backgroundColor:'white'}}>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Total tickets</Text>
        <Text style={{ fontWeight:'bold'}}> 1 </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Total tickets Value</Text>
        <Text style={{ fontWeight:'bold' }}> Free </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Total Seats</Text>
        <Text style={{ fontWeight:'bold' }}> 80000 </Text>
      </View>

    </View>

    <View style={{ width, height:height*0.65, borderWidth:0, }}>
    <FlatList
      data={[0,1]}
      renderItem={({item})=>
      <>
    <View style={{ width:'100%', paddingHorizontal:10, paddingTop:10, }}>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Label</Text>
        <Text style={{ fontWeight:'bold'}}> Simple </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Status</Text>
        <Text style={{ fontWeight:'bold' }}> Active </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>No of Seats</Text>
        <Text style={{ fontWeight:'bold' }}> 30000 </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Price</Text>
        <Text style={{ fontWeight:'bold' }}> 80 </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Sale Start Time </Text>
        <Text style={{ fontWeight:'bold' }}> Thu Aug 25, 2022 10:48 AM </Text>
      </View>

      <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{ }}>Price</Text>
        <Text style={{ fontWeight:'bold' }}>Thu Aug 25, 2022 10:48 AM</Text>
      </View>

    </View>

    <TouchableOpacity onPress={()=>props.navigation.navigate('CheckIns')} style={{ height:70, alignItems:'center', justifyContent:'center',}}>
      <Text style={{ color:'red', fontSize:15, }}> Edit Ticket </Text>
    </TouchableOpacity>

    </>}

    />
    </View>
    </View>

    </View>

  )
}
EventsTicketsManagementScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(EventsTicketsManagementScreen);
