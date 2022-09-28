import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView, Switch, } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const EditDetailScreen = (props) => {

  const [state,setState] = useState(0);


  return (
    <View style={{ flex:1, }}>

    <View style={{ flex:0.05,  flexDirection:'row', alignItems:'center', width:'95%', alignSelf:'center', justifyContent:'space-between', marginBottom:15, marginTop:20}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('MyEvents')} style={{ width:20,height:20 }}>
        <FontAwesome name='arrow-left' color='black' size={20}/>
        </TouchableOpacity>
        <Text style={{ fontWeight:'bold', fontSize:17, }}>Edit Event</Text>
        <View style={{  backgroundColor:'red', }}></View>
    </View>



        <View style={{ marginTop:10, width:'95%', alignSelf:'center', flex:0.9}}>

        <ScrollView style={{ borderWidth:0, }}>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Django' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            <FontAwesome name='check' color='black' size={20}/>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:40,}}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Thu Sep 1, 2022 1:17 PM' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            <FontAwesome name='check' color='black' size={20}/>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20,}}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Thu Sep 1, 2022 1:17 PM' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            <FontAwesome name='check' color='black' size={20}/>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20,}}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Central Time' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            <FontAwesome name='check' color='black' size={20}/>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20,}}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Paris France' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            <FontAwesome name='check' color='black' size={20}/>
            </View>


            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20, }}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Django' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            </View>

            <View style={{ width:width*0.99, backgroundColor:'orange',height:2, marginTop:20, marginBottom:20, }}></View>

            <Text style={{ borderRadius:10, padding:10, backgroundColor:'rgba(255,0,0,0.5)'}}>Link:http://www.tempoevent.com/django</Text>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20,}}>
            <FontAwesome name='arrow-left' color='orange' size={20}/>
            <TextInput defaultValue='Paris France' style={{ flexGrow:1, marginHorizontal:10, }}></TextInput>
            <FontAwesome name='check' color='black' size={20}/>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:40,}}>
            <TouchableOpacity style={{ flexGrow:1, }} onPress={()=>props.navigation.navigate('Category')}><Text  style={{  marginHorizontal:10, }}>Change Category</Text></TouchableOpacity>
            <Text style={{ color:'red'}}>Food</Text>
            </View>

            <TouchableOpacity style={{ marginTop:height*0.2, backgroundColor:'orange', width:width*0.95, alignSelf:'center', alignItems:'center', justifyContent:'center', height:40, borderRadius:10, }}>
              <Text>UPDATE</Text>
            </TouchableOpacity>

        </ScrollView>
        </View>

    </View>

  )
}
EditDetailScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(EditDetailScreen);
