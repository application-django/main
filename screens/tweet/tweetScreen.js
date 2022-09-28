import React, { Component, useState,useEffect,useRef } from "react";
import { Pressable, Modal, SafeAreaView, View, StatusBar, Image, TouchableOpacity, ScrollView, StyleSheet, Text,BackHandler,TextInput,FlatList,Animated,Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import TrendingDJEventsList from "../trendingDJEvents/trendingsDJEventsList";
import { TransitionPresets } from "react-navigation-stack";
import NearByDJEventsList from "../nearByDJEvents/nearByDJEventsList";
import { TabView, TabBar } from 'react-native-tab-view';
import { Menu } from 'react-native-material-menu';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import { Camera, CameraType } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


const locationsList = [
    'Syracuse, Connecticut',
    'South, Dakota',
    'Manchester, Kentucky',
    'Inglewood, Maine',
    'Mesa, New Jersey',
    'Utica, Pennsylvania',
    'Allentown, New Mexico',
];


 function TweetScreen(props) {
const {height, width} = Dimensions.get('screen')
//const [permission, requestPermission] = Camera.useCameraPermissions();
const [cameraType,setCameraType] = useState(0);
const [recording, setRecording] = useState();
const [record,setRecord] = useState(undefined);
const [background,setBackground] = useState('white');
const [playState,setplayState] = useState(false);
const [currentRecord,setCurrentRecord] = useState(null);
const [image,setImage] = useState( null);
const [content,setContent] = useState('');


const [showModal,setShowModal] = useState(false);

const h = useRef(new Animated.Value(height)).current
const cameraRef = useRef();

//{ props.navigation.state.params.photo && <Image  resizeMode='cover' source={{uri:props.navigation.state.params.photo.uri}} style=//{{alignSelf:'center', width:'90%',height:200}} /> }

useEffect(()=>{

console.log(props.navigation.state.params)


},[])
const color = ['red','white','purple','green','black','yellow','blue']

/*
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.pop();
        return true;
    };

*/

const flipCamera = () => {
	if(cameraType == 0){
	setCameraType(1)
	return
	}

	if(cameraType == 1){
	setCameraType(0)
	return
	}
	
}


const  takePicture = async() => {
 const photo = await cameraRef.current.takePictureAsync()
 setImage(photo.uri)
 console.log(photo.uri)
 console.log('hello')
}

const x  =   Audio.Sound

const update = (color) => {
setBackground(color)
}
const handleCamera = async() => {
//console.log(permission)
const { status } =  await Permissions.askAsync(Permissions.CAMERA)
console.log(status)
if(status == 'granted'){
	props.navigation.navigate('Camera')
	console.log('hello')
	//console.log(props)
}

}

const Tweeter = () => {
	const tweet = {record,background,content,image}
	console.log(tweet)	
}

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

const showCamera = () => {
	Animated.timing(h,{
	toValue:0,
	duration:300,
	useNativeDriver:true,
	}).start()
}

const hideCamera = () => {
	Animated.timing(h,{
	toValue:height,
	duration:300,
	useNativeDriver:true,
	}).start()
}
const cancelCamera = () => {
setImage(null)
hideCamera()
}
const okCamera = () => {
hideCamera()
}

 const  startRecording = async() => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
 
const playRecord = async() => {
//if(playState == false){
      //await x.sound.unloadAsync()
	if(currentRecord != null )
		await currentRecord.unloadAsync()

      //console.log(x)
      const p = await x.createAsync({uri:record});
      await p.sound.playAsync();
      setplayState(true)
      setCurrentRecord(p.sound)
      return
//}
//await x.sound.pauseAsync();
//setplayState(true)
}

 const stopRecording = async() => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    setRecord(uri);
    console.log('Recording stopped and stored at', uri);
  }

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />



      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
	style={{alignItems:'center',justifyContent:'center',width,height}}	
>

        <View style={{width,height:height*0.5,alignItems:'center',borderWidth:0,justifyContent:'center'}}>
          <View style={{width:'40%',height:50,flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
            <Pressable onPress={()=>setBackground('red')} style={{width:'30%',height:30,backgroundColor:'red'}}>
            </Pressable>

            <Pressable onPress={()=>setBackground('blue')} style={{width:'30%',height:30,backgroundColor:'blue'}}>
            </Pressable>

            <Pressable onPress={()=>setBackground('yellow')} style={{width:'30%',height:30,backgroundColor:'yellow'}}>
            </Pressable>


          </View>

          <View style={{width:'40%',height:50,flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
            <Pressable onPress={()=>setBackground('purple')} style={{width:'30%',height:30,backgroundColor:'purple'}}>
            </Pressable>

            <Pressable onPress={()=>setBackground('white')} style={{width:'30%',height:30,backgroundColor:'white'}}>
            </Pressable>

            <Pressable onPress={()=>setBackground('green')} style={{width:'30%',height:30,backgroundColor:'green'}}>
            </Pressable>
          </View>

        </View>

	<View style={{width:40,height:40,alignSelf:'center',backgroundColor:background,borderWidth:1}}></View>
      </Modal>


                <View style={{ flex: 1 }}>
		<View style={styles.content}>
		<View style={styles.h}>
		<TouchableOpacity onPress={()=>props.navigation.goBack()} style={styles.opacity}><Text style={styles.text}>Annuler</Text></TouchableOpacity>
		<TouchableOpacity onPress={()=>Tweeter()} style={styles.tweetopacity}><Text style={styles.tweettext}>Publish</Text></TouchableOpacity>
		</View>
		<TextInput multiline style={[styles.tweet,{backgroundColor:background}]} onChangeText={(e)=>setContent(e)} />




		<View style={{width:'90%',alignSelf:'center',marginTop:20,marginBottom:20}}>
		<TouchableOpacity onPress={()=>setShowModal(true)} style={{width:170}}><Text style={{ color:Colors.primaryColor}}>Change Background color</Text></TouchableOpacity>
</View>

		<View style={styles.option}>
		<TouchableOpacity onPress={()=>pickImage()} style={styles.pick}><Text style={{ color:Colors.primaryColor}}>Pick from gallery</Text></TouchableOpacity>
		<TouchableOpacity onPress={()=>showCamera()} style={styles.voice}><FontAwesome name="camera" size={24} color="black" /></TouchableOpacity>
		<TouchableOpacity onPressOut={()=>stopRecording()} onLongPress={()=>startRecording()} style={styles.photo}><FontAwesome name="microphone" size={24} 			color="black" /></TouchableOpacity>
		{ record && <TouchableOpacity onPress={()=>playRecord()} style={styles.voice}><FontAwesome name='play' size={24} color="black" 				/></TouchableOpacity>}


		</View>
		{ image && <Image source={{uri:image}} style={{alignSelf:'center', width:width*0.9, height:height*0.3}}/> }
		</View>
		</View>

                <Animated.View style={{ flex:1,width, height, backgroundColor:'white', position:'absolute',transform:[{translateY:h}] }}>
			<Camera   ref={cameraRef} style={{ flex:0.6 }} type={cameraType}>
			</Camera>
			<View style={{ marginTop:'auto', flexDirection:'row', flex:0.2, justifyContent:'space-between', width:'90%', alignSelf:'center' }}>
			<TouchableOpacity onPress={()=>cancelCamera()}>
			<Text style={{ fontSize:20,color:'white',margin:'auto',fontWeight:'bold',color:Colors.primaryColor}}>Cancel</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>takePicture()}>
			<Text style={{ fontSize:20,color:'white',margin:'auto',fontWeight:'bold',color:Colors.primaryColor}}>Take Picture</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>okCamera()}>
			<Text style={{ fontSize:20,color:'white',margin:'auto',fontWeight:'bold',color:Colors.primaryColor}}>Ok</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>flipCamera()}>
			<MaterialIcons name="loop" size={24} color={Colors.primaryColor} />
			</TouchableOpacity>
			</View>
                </Animated.View>

	   </SafeAreaView>
)
}

///      x  =  await Audio.Sound.createAsync(currentSong);
//      await x.sound.playAsync();

const styles = StyleSheet.create({
    headerWrapStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        borderBottomRightRadius: Sizes.fixPadding + 5.0,
        padding: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerLocationInfoWrapStyle: {
        flex: 1,
        marginRight: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
	flex:0.9,
	marginTop:'auto',
	marginBottom:'auto',
 	borderWidth:0,
	borderColor:'red',
},
tweet:{
	width:'90%',
	alignSelf:'center',
	height:'30%',
	borderWidth:1,
	borderColor:Colors.primaryColor,
	borderRadius:15,
	fontSize:20,
},
opacity:{
	width:'20%',
	
	height:'50%',
	marginTop:20,
	borderWidth:0,
	borderColor:'black',
	justifyContent:'space-between',
	alignItems:'center',
},
text:{
	color:Colors.primaryColor,
	fontWeight:'bold',
	fontSize:15,
	marginBottom:0,
	borderWidth:0,

},
tweettext:{
	color:'white',
	fontWeight:'bold',
	fontSize:15,
	marginBottom:0,
	borderWidth:0,
},
tweetopacity:{
	width:'25%',
	backgroundColor:Colors.primaryColor,
	height:'40%',
	marginTop:20,
	borderWidth:0,
	borderColor:'black',
	borderRadius:20,
	justifyContent:'space-between',
	alignItems:'center',
},
list:{
	width:'90%',
	alignSelf:'center',
	maxHeight:80,
	borderWidth:0,
	marginTop:20,
},
box:{
	width:80,
	height:80,
	marginRight:10,
	
},
h:{
	width:'90%',
	alignSelf:'center',
	height:'10%',
	flexDirection:'row',
	backgroundColor:'white',
	marginTop:-10,
	marginBottom:10,
	justifyContent:'space-between',
	alignItems:'center',
},
option:{
	width:'90%',
	alignSelf:'center',
	flexDirection:'row',
	alignItems:'center',
},
pick:{
	width:120,
},
voice:{
	width:40,
	height:40,
	borderWidth:0,
	marginRight:10,
	alignItems:'center',
	justifyContent:'center',
},
photo:{
	width:40,
	height:40,
	borderWidth:0,
	alignItems:'center',
	justifyContent:'center',
},

});

TweetScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}
export default withNavigation(TweetScreen);