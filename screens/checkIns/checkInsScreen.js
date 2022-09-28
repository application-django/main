import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView, Switch, } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const CheckInsScreen = (props) => {

  return (
    <View style={{ flex:1, }}>

    <View style={{ flex:0.05, flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', justifyContent:'space-between'}}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ width:20,height:20 }}>
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{ fontWeight:'bold', fontSize:17, }}>Check Ins</Text>
    <View style={{  backgroundColor:'red', }}></View>
    </View>

    <View style={{ flex:0.9, paddingTop:40, width:'95%', alignSelf:'center',  }}>
        <Text style={{ color:'grey', fontSize:17, textAlign:'center'}}>Total Check Ins</Text>
        <Text style={{ fontWeight:'bold', fontSize:20, textAlign:'center'}}>0/8000</Text>
        <Text style={{ color:'grey' , fontSize:16, textAlign:'center'}}>0/8000</Text>
        <FlatList
          data={[0,1]}
          renderItem={({item})=><View style={{ flexDirection:'row', alignItems:'center', marginBottom:20, }}>
          <View style={{ width:60, height:60, borderRadius:30, alignItems:'center', justifyContent:'center', borderColor:'grey', borderWidth:1, }}>
            <Text style={{ fontWeight:'bold', }}>0</Text>
          </View>
          <Text style={{ fontWeight:'bold', flexGrow:1, marginHorizontal:10, }}>Complexe</Text>
          <Text style={{ fontWeight:'bold'}}>0/5000</Text>

          </View>}
        />
    </View>


    </View>

  )
}
CheckInsScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(CheckInsScreen);
