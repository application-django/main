import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const CategoryScreen = (props) => {

  return(
    <View style={{ flex:1 }}>
    <View style={{ flexDirection:'row', height:40, justifyContent:'space-between', width:'95%', alignSelf:'center', alignItems:'center',  }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('MyEvents')} style={{ width:30, height:30, alignItems:'center', justifyContent:'center', }}>
        <Feather name='arrow-left' color='black' size={30} />
      </TouchableOpacity>
      <Text style={{ fontWeight:'bold', fontSize:17}}>Select Category</Text>
      <View style={{ width:20, height:20 }}></View>
    </View>

    <View style={{ height:height-50, borderWidth:0, marginTop:10}}>
    <ScrollView>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Art</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Music</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Causes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Comedy</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Corporates</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Crafts</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Drinks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Educatioonal</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Networking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>parties</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Religion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Sport</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Film</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Fitness</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Wellness</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Theatre</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Film</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Fitness</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Wellness</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Theatre</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Film</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Fitness</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Wellness</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Theatre</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Film</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Fitness</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width:'95%', alignSelf:'center', height:40, flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Wellness</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'45%', height:'100%', borderBottomWidth:1, borderColor:'silver',flexDirection:'row',alignItems:'center'}}>
      <Feather name='music' color='red' size={30} />
      <Text style={{ fontWeight:'bold', fontSize:17, marginLeft:20 }}>Theatre</Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
    </View>

    </View>
  )

}

CategoryScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(CategoryScreen);
