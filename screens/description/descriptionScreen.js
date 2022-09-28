import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";


const {width,height} = Dimensions.get('window')
const data = [{name:'Amour'},{name:'Guerre'},{name:'Fiesta'},{name:'Ecole'}]
const DescriptionScreen = (props) => {

  return(
    <View style={{ flex:1 }}>
    <View style={{ flexDirection:'row', height:40, justifyContent:'space-between', width:'95%', alignSelf:'center', alignItems:'center' }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('MyEvents')} style={{ width:30, height:30, alignItems:'center', justifyContent:'center', }}>
        <Feather name='arrow-left' color='black' size={30} />
      </TouchableOpacity>
      <Text style={{ fontWeight:'bold', fontSize:17}}>Select Description</Text>
      <View style={{ width:20, height:20 }}></View>
    </View>

    <View style={{ width:'95%', height:'90%', alignSelf:'center', }}>
    <FlatList
    data={data}
    renderItem={({item})=><TouchableOpacity style={{ height:40, width:'100%', }}>
      <Text style={{ fontSize:17, }}>{item.name}</Text>
    </TouchableOpacity>}
    />
    </View>
    </View>
  )

}

DescriptionScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(DescriptionScreen);
