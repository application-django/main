import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView, Switch, } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const ContactUsScreen = (props) => {

  return (
    <View style={{ flex:1, }}>

    <View style={{ flex:0.09, flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', justifyContent:'space-between'}}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{ fontWeight:'bold', fontSize:17, }}>Contact Us</Text>
    <View style={{  backgroundColor:'red', }}></View>
    </View>

    <View style={{ flex:0.9, width:'95%', alignSelf:'center',  }}>

    <Text style={{ }}>Name</Text>
    <TextInput style={{ fontWeight:'bold', height:50, fontSize:16, marginBottom:20, marginTop:10, backgroundColor:'white', }}></TextInput>

    <Text style={{ }}>Title</Text>
    <TextInput style={{ fontWeight:'bold', height:50, fontSize:16, marginBottom:20, marginTop:10, backgroundColor:'white',}}></TextInput>

    <Text style={{ }}>Message</Text>
    <TextInput style={{ fontWeight:'bold', height:50, fontSize:16, marginBottom:20, marginTop:10, backgroundColor:'white',}}></TextInput>

    <TouchableOpacity style={{ backgroundColor:Colors.primaryColor, alignItems:'center', justifyContent:'center', borderRadius:5, height:50, width:'100%',marginTop:'auto',marginBottom:10,}}>
    <Text style={{ }}>SEND</Text>
    </TouchableOpacity>
    </View>


    </View>

  )
}
ContactUsScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(ContactUsScreen);
