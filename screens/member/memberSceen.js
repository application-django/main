import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const MemberScreen = (props) => {

  const [item,setItem] = useState('Admin')
  const [isFocused,setIsFocused] = useState(false)
  const textInput = useRef().current

  useEffect(()=>{
    console.log(textInput)
  })
  return(
    <View style={{ flex:1 }}>
    <View style={{ flexDirection:'row', height:40, justifyContent:'space-between', width:'95%', alignSelf:'center', alignItems:'center' }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('MyEvents')} style={{ width:30, height:30, alignItems:'center', justifyContent:'center', }}>
        <Feather name='arrow-left' color='black' size={30} />
      </TouchableOpacity>
      <Text style={{ fontWeight:'bold', fontSize:17}}>Add members</Text>

      <View style={{ width:20, height:20 }}></View>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:height*0.9, marginTop:20, borderWidth:0}}>
      <View style={{ flexDirection:'row', backgroundColor:'white', height:50, alignItems:'center', borderRadius:40, paddingHorizontal:20,   }}>
      <Feather name='home' color='black' size={25} style={{ marginRight:10, }} />
      <TextInput onFocus={()=>{
        setIsFocused(prevState=>{
          if(prevState == false)
            return true
        })
      }} ref={textInput} style={{ flexGrow:1, borderWidth:0, height:'90%', fontSize:17,  }}></TextInput>
      <TouchableOpacity style={{ marginLeft:10, }}>
        <Feather name='settings' color='black' size={25} />
      </TouchableOpacity>
      </View>

      <View style={{ height:height*0.84, width:'100%', alignSelf:'center', borderWidth:0, alignItems:'center', justifyContent:'center'}}>
      {
        isFocused == true ?
        <>
        <View style={{ flexDirection:'row', height:40, marginTop:20, borderWidth:1,   borderRadius:15, width:'100%'}}>
          <TouchableOpacity onPress={()=>setItem('Admin')} style={{ flex:1, borderTopLeftRadius:15, borderBottomLeftRadius:15, backgroundColor: item =='Admin'?'orange':'white', alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontWeight:'bold', color: item =='Admin'?'white':'black', }}>Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setItem('Co-Host')} style={{ flex:1, backgroundColor: item =='Co-Host'?'orange':'white', alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontWeight:'bold', color: item =='Co-Host'?'white':'black', }}>Co-Host</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setItem('Staff')} style={{ flex:1, backgroundColor: item =='Staff'?'orange':'white', alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontWeight:'bold', color: item =='Staff'?'white':'black', }}>Staff</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setItem('Viewer')} style={{ flex:1, borderTopRightRadius:15, borderBottomRightRadius:15, backgroundColor: item =='Viewer'?'orange':'white', alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontWeight:'bold', color: item =='Viewer'?'white':'black'}}>Viewer</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width:'100%', height:height*0.7, borderWidth:0, marginTop:15, alignItems:'center', justifyContent:'center', }}>
        <FlatList
        style={{ width:'100%', }}
        data={[0]}
        keyExtractor={item=>item}
        renderItem={()=><View style={{ flexDirection:'row', alignItems:'center' }}>
          <Image style={{ width:60, height:60, borderRadius:10, marginRight:10, }} source={require('../../assets/images/djEvents/DJEvent1.png')} />
          <View style={{ flexGrow:1,  borderWidth:0 }}>
                <Text style={{ flex:1, fontWeight:'bold', margin:0, padding:0, borderWidth:1, fontSize:13, borderColor:'transparent',  }}>agbedevi martin</Text>
                <Text style={{ flex:1, margin:0, padding:0, fontSize:13, borderWidth:1, borderColor:'transparent', }}>martinnitch@gmail.com</Text>
                <Text style={{ flex:1, margin:0, padding:0, borderRadius:5, margin:0, fontSize:13,  color:'red', width:90, textAlign:'center', marginTop:3}}>Host Member</Text>
          </View>
          <Feather name='mail' size={30} color='black'/>
          </View>}
        />
        </View>
        </>
        :
        <View style={{ borderWidth:0, alignItems:'center', justifyContent:'center', width:'100%'}}>
            <Feather name='search' size={60} color='black'/>
          <Text style={{ fontSize:20, fontWeight:'bold', textAlign:'center', width:'70%' }}>Search for members and add them to your event</Text>
        </View>
      }




      </View>

    </View>


    </View>
  )

}

MemberScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(MemberScreen);
