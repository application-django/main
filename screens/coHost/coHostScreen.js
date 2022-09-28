import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";


const {width,height} = Dimensions.get('window')
const CoHostScreen = (props) => {

  return(
    <View style={{ flex:1 }}>
    <View style={{ flexDirection:'row', height:40, justifyContent:'space-between', width:'95%', alignSelf:'center', alignItems:'center' }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('MyEvents')} style={{ width:30, height:30, alignItems:'center', justifyContent:'center', }}>
        <Feather name='arrow-left' color='black' size={30} />
      </TouchableOpacity>
      <Text style={{ fontWeight:'bold', fontSize:17}}>Co-Hosts and Hosts</Text>

      <View style={{ width:20, height:20 }}></View>
    </View>


    <View style={{ height:height*0.8 ,width:'100%', marginTop:20}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('Member') } style={{ marginBottom:20, alignItems:'center', justifyContent:'center', height:50, width:'100%', backgroundColor:'white'}}>
      <Text style={{ color:'red' ,fontWeight:'bold'}}>Add Host Member</Text>
    </TouchableOpacity>

    <View style={{ width:'95%', alignSelf:'center'}}>
    <FlatList
    showsVerticalScrollIndicator={false}
    data={[0,1,2,3,4,5,7,8,9,10,11]}
    renderItem={({item,index})=>{
      if(item == 0)
      return (<View style={{ height:60, width, flexDirection:'row', marginBottom:10}}>
      <Image style={{ width:60, height:60, borderRadius:10, marginRight:10, }} source={require('../../assets/images/djEvents/DJEvent1.png')} />
      <View style={{ flexGrow:1,  borderWidth:0 }}>
            <Text style={{ flex:1, fontWeight:'bold', margin:0, padding:0, borderWidth:1, fontSize:13, borderColor:'transparent',  }}>agbedevi martin</Text>
            <Text style={{ flex:1, margin:0, padding:0, fontSize:13, borderWidth:1, borderColor:'transparent', }}>martinnitch@gmail.com</Text>
            <Text style={{ flex:1, margin:0, padding:0, borderRadius:5, margin:0, fontSize:13,  backgroundColor:'rgb(200,200,200)', width:90, textAlign:'center', marginTop:3}}>Event Creator</Text>
      </View>
    </View>)

    else
    return (<View style={{ height:60, width, flexDirection:'row', marginBottom:10}}>
    <Image style={{ width:60, height:60, borderRadius:10, marginRight:10, }} source={require('../../assets/images/djEvents/DJEvent1.png')} />
    <View style={{ flexGrow:1,  borderWidth:0 }}>
          <Text style={{ flex:1, fontWeight:'bold', margin:0, padding:0, borderWidth:1, fontSize:13, borderColor:'transparent',  }}>agbedevi martin</Text>
          <Text style={{ flex:1, margin:0, padding:0, fontSize:13, borderWidth:1, borderColor:'transparent', }}>martinnitch@gmail.com</Text>
          <Text style={{ flex:1, margin:0, padding:0, borderRadius:5, margin:0, fontSize:13,  backgroundColor:'rgb(200,200,200)', width:90, textAlign:'center', marginTop:3}}>Host Member</Text>
    </View>
  </View>)

  }
  }
    />
    </View>

    </View>

    </View>
  )

}

CoHostScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(CoHostScreen);
