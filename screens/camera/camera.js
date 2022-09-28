import React, { Component,useRef } from "react";
import { BackHandler, SafeAreaView, Image, View, ScrollView, StatusBar, StyleSheet, Text,TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { TransitionPresets } from "react-navigation-stack";
import Dash from 'react-native-dash';
import { Camera, CameraType } from 'expo-camera';

const CameraScreen = (props) => {

const cameraRef = useRef()
var photo = null

const  takePicture = async() => {
console.log('hello')
/*if(photo != null){
	props.navigation.push('Camera')
	return
	}
*/
 //console.log(photo)
 photo = await cameraRef.current.takePictureAsync()
 console.log(photo.uri)
 console.log('hello')
}

const handleBack = () => {
if(photo != null){
	console.log('4444')
	props.navigation.navigate('Tweet',{photo:photo})
}
else{
	props.navigation.navigate('Tweet')
}
}

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>
			<Camera   ref={cameraRef} style={{ flex:1 }} type={0}>
			<TouchableOpacity onPress={()=>takePicture()}>
			<Text style={{ fontSize:20,color:'white',margin:'auto',fontWeight:'bold',color:Colors.primaryColor}}>Take Picture</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>props.navigation.goBack()}>
			<Text style={{ fontSize:20,color:'white',margin:'auto',fontWeight:'bold',color:Colors.primaryColor}}>Cancel</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>handleBack()}>
			<Text style={{ fontSize:20,color:'white',margin:'auto',fontWeight:'bold',color:Colors.primaryColor}}>Ok</Text>
			</TouchableOpacity>
			</Camera>
                </View>
            </SafeAreaView>
        )
    }



const styles = StyleSheet.create({
 
});

CameraScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(CameraScreen);