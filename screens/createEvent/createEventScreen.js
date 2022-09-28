import React, { Component, useState, useRef, useEffect } from "react";
import { BackHandler, SafeAreaView, View, Animated, Image, TouchableOpacity, TouchableHighlight, StatusBar, StyleSheet, Text, Dimensions, FlatList, TextInput, ScrollView, Switch, } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes, } from '../../constants/styles';
import { MaterialIcons, Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { TransitionPresets } from "react-navigation-stack";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';


const {width,height} = Dimensions.get('window')
const CreateEventScreen = (props) => {
  const [eventTitle,setEventTitle] = useState('')
  const [startTime,setStartTime] = useState('')
  const [endTime,setEndTime] = useState('')
  const [timeFuse,setTimeFuse] = useState('')
  const [location,setLocation] = useState('')
  const [correctOne,setCorrectOne] = useState(false)
  const [correctTwo,setCorrectTwo] = useState(false)
  const [correctThree,setCorrectThree] = useState(false)
  const [correctFour,setCorrectFour] = useState(false)
  const [coverImage,setCoverImage] = useState(null)

  const listRef = useRef()

  useEffect(()=>{
    //console.log(eventTitle,startTime,endTime,timeFuse,location)
    if( eventTitle != '' && startTime != '' && endTime != '' && timeFuse != '' && location != '' ){
      setCorrectOne(true)
      //setIndex(prevIndex => prevIndex + 1)
    }
    else
      setCorrectOne(false)
  },[eventTitle,startTime,endTime,timeFuse,location])

  useEffect(()=>{

    //console.log(index)
    if(coverImage != null)
      setCorrectTwo(true)

  },[coverImage])

  const handleScroll = (ev) => {
    /*if(eventTitle == ''){
      listRef.current.scrollToOffset({
        offset:0,

      })
    }*/
    //console.log(ev.nativeEvent.contentOffset)
  }
  const handlePress = () => {
    if(correctOne == true){
    listRef.current.scrollToIndex({
      index:1,
      animated:true,
    })
  }
  }
  return (
    <View style={{ flex:1, }}>

    <View style={{ height:0.07*height,width:'100%',flexDirection:'row',paddingHorizontal:10,alignItems:'center',justifyContent:'space-between' }}>
    <TouchableOpacity style={{ width:20,height:20 }} onPress={()=>props.navigation.goBack()} >
    <FontAwesome name='arrow-left' color='black' size={20}/>
    </TouchableOpacity>
    <Text style={{ fontWeight:'bold',fontSize:17 }}>Event Details</Text>
    <View style={{ width:20,height:20 }}></View>
    </View>

    <View style={{ flexDirection:'row',width:'100%',height:5,justifyContent:'space-between' }}>
    <View style={{ width:'23.5%',height:'100%',backgroundColor: correctOne == true ? Colors.primaryColor : 'grey' }}></View>
    <View style={{ width:'23.5%',height:'100%',backgroundColor: correctTwo == true ? Colors.primaryColor : 'grey' }}></View>
    <View style={{ width:'23.5%',height:'100%',backgroundColor: correctThree == true ? Colors.primaryColor : 'grey' }}></View>
    <View style={{ width:'23.5%',height:'100%',backgroundColor: correctFour == true ? Colors.primaryColor : 'grey' }}></View>
    </View>

    <View style={{height:0.9*height,width:'100%',paddingTop:5}}>
    <FlatList
    ref={listRef}
    onScroll={ev=>handleScroll(ev)}
    style={{marginTop:10}}
    keyExtractor={item=>item}
    data={[1,2,3,4]}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    renderItem={({item,index})=>{

      //console.log(props)
      switch(item){
        case 1:{
          return(
            <View style={{ width, height:0.9*height}}>
            <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
            <FontAwesome name='folder' color='silver' size={24} />
            <TextInput placeholder='Event title' onChangeText={(text)=>setEventTitle(text)} style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
            <MaterialIcons name='check' color={ eventTitle != '' ? Colors.primaryColor : 'silver'} size={24} />
            </View>

            <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
            <FontAwesome name='calendar' color='silver' size={24} />
            <TextInput placeholder='Start time' onChangeText={(text)=>setStartTime(text)} style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
            <MaterialIcons name='check' color={ startTime != '' ? Colors.primaryColor : 'silver'} size={24} />
            </View>

            <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
            <FontAwesome name='calendar' color='silver' size={24} />
            <TextInput placeholder='End time' onChangeText={(text)=>setEndTime(text)} style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
            <MaterialIcons name='check' color={ endTime != '' ? Colors.primaryColor : 'silver'} size={24} />
            </View>

            <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
            <Feather name='clock' color='silver' size={24} />
            <TextInput placeholder='Time Fuse'   onChangeText={(text)=>setTimeFuse(text)} style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
            <MaterialIcons name='check' color={ timeFuse != '' ? Colors.primaryColor : 'silver'} size={24} />
            </View>

            <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
            <Ionicons name='location' color='silver' size={24} />
            <TextInput placeholder='Location' onChangeText={(text)=>setLocation(text)} style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
            <MaterialIcons name='check' color={ location != '' ? Colors.primaryColor : 'silver'} size={24} />
            </View>

            <TouchableOpacity onPress={()=>handlePress()} style={{ borderRadius:5,alignSelf:'center', width:'90%', height:50, backgroundColor: correctOne == true ? Colors.primaryColor : 'grey',alignItems:'center',justifyContent:'center',marginTop:20}}>
              <Text style={{color:'white'}}> SELECT DESIGN > </Text>
            </TouchableOpacity>

            </View>
          )
        }
        case 2:{
          return (
            <View style={{width,height:0.9*height}}>
            <View style={{ flex:1,width:'95%',alignSelf:'center'}}>
            <Text style={{ fontWeight:'bold', fontSize:17,borderWidth:0,marginTop:0}}>Event cover design</Text>
            <Text style={{ color:'rgb(100,100,100)', marginBottom:10}}>Select a design from below or gallery/camera</Text>

            <View style={{ borderWidth:0, height:height*0.69}}>
            <ScrollView >
            <View style={{width:'100%',height:height*0.27,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontSize:20, fontWeight:'bold', color:'red', width:'30%', textAlign:'center'}}>CREATE YOUR OWN FLYER DESIGN</Text>
            </View>

            <View style={{ marginTop:5, width:'100%', height:height*.3, flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity onPress={()=>setCoverImage('../../assets/images/djEvents/DJEvent1.png')} style={{width:'32%',height:'100%',}}><Image style={{width:'100%',height:'100%',opacity: coverImage == '../../assets/images/djEvents/DJEvent1.png' ? 0.5 : 1}} source={require('../../assets/images/djEvents/DJEvent1.png')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>setCoverImage('../../assets/images/djEvents/DJEvent2.png')} style={{width:'32%',height:'100%',}}><Image style={{width:'100%',height:'100%',opacity: coverImage == '../../assets/images/djEvents/DJEvent2.png' ? 0.5 : 1}} source={require('../../assets/images/djEvents/DJEvent2.png')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>setCoverImage('../../assets/images/djEvents/DJEvent3.png')} style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%',opacity: coverImage == '../../assets/images/djEvents/DJEvent3.png' ? 0.5 : 1}} source={require('../../assets/images/djEvents/DJEvent3.png')}/></TouchableOpacity>
            </View>

            <View style={{ marginTop:5, width:'100%', height:height*.3, flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity onPress={()=>setCoverImage('../../assets/images/djs/dj1.png')} style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%',opacity: coverImage == '../../assets/images/djs/dj1.png' ? 0.5 : 1}} source={require('../../assets/images/djs/dj1.png')}/></TouchableOpacity>
              <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djs/dj2.png')}/></TouchableOpacity>
              <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djs/dj3.png')}/></TouchableOpacity>
            </View>

            <View style={{ marginTop:5, width:'100%', height:height*.3, flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djs/dj4.png')}/></TouchableOpacity>
              <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djs/dj5.png')}/></TouchableOpacity>
              <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djs/dj6.png')}/></TouchableOpacity>
            </View>

            </ScrollView>
            </View>

            <TouchableOpacity onPress={()=>{
              if(correctTwo == true)
              listRef.current.scrollToIndex({ index:2,animated:true })
            }}
            style={{ borderRadius:5,alignSelf:'center', width:'90%', height:50, backgroundColor: correctTwo == true ? Colors.primaryColor : 'grey' ,alignItems:'center',justifyContent:'center',marginTop:20}}>
              <Text style={{color:'white'}}> SELECT DESIGN </Text>
            </TouchableOpacity>
            </View>
            </View>
          );
          break
        }
        case 3:{
          return(
            <View style={{width, height:0.9*height}}>
                  <View style={{ paddingHorizontal:10,borderBottomWidth:2, borderColor:'orange', width:'100%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
                    <Feather name='chain' color='silver' size={24} />
                    <TextInput  defaultValue='Django' style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
                    <Feather name='chains' color='silver' size={24} />
                  </View>

                  <View style={{ width:'90%', backgroundColor:'rgba(255,0,0,0.2)', height:30, alignSelf:'center', borderRadius:5, justifyContent:'center', paddingLeft:10, marginBottom:20}}>
                    <Text>Link: http://tempolive.com/django</Text>
                  </View>

                  <View style={{ flexDirection:'row', width:'90%', alignSelf:'center', justifyContent:'space-between',  alignItems:'center', marginBottom:20}}>
                    <Text style={{ fontWeight:'bold', }}>Add Description</Text>
                    <Text style={{color:'red',marginLeft:'auto'}}>None</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Description')} style={{ alignItems:'center', justifyContent:'center', width:40,height:40}}>
                    <Feather name='arrow-right' color='silver' size={30} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection:'row', width:'90%', alignSelf:'center', justifyContent:'space-between',  alignItems:'center', marginBottom:20}}>
                    <Text style={{ fontWeight:'bold', }}>Select Category</Text>
                    <Text style={{color:'red',marginLeft:'auto'}}>None</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Category')} style={{ alignItems:'center', justifyContent:'center', width:40,height:40}}>
                    <Feather name='arrow-right' color='silver' size={30} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection:'row', width:'90%', alignSelf:'center', justifyContent:'space-between',  alignItems:'center', marginBottom:20}}>
                    <Text style={{ fontWeight:'bold', }}>Add Co-Hosts</Text>
                    <View style={{ width:30, height:30 }}></View>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('CoHost')} style={{ alignItems:'center', justifyContent:'center', width:40,height:40}}>
                    <Feather name='arrow-right' color='silver' size={30} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection:'row', width:'90%', alignSelf:'center', justifyContent:'space-between',  alignItems:'center', marginBottom:20}}>
                    <Text style={{ fontWeight:'bold', }}>Make Event Private</Text>
                    <View style={{width:'50%'}}></View>
                    <Switch onChange={()=>console.log('hello')} style={{ alignItems:'center', justifyContent:'center', width:30,height:30}}>

                    </Switch>
                  </View>

                  <TouchableOpacity style={{ borderRadius:5,alignSelf:'center', width:'90%', height:50, backgroundColor:Colors.primaryColor,alignItems:'center',justifyContent:'center',marginTop:30}}>
                    <Text style={{color:'white'}}> SET UP TICKETS > </Text>
                  </TouchableOpacity>


            </View>
          )
        }
        case 4:{
          return(
            <View style={{width, height:0.9*height }}>
            <View style={{ flexDirection:'row', flex:0.03, width:'95%', alignSelf:'center', }}>
            <Text style={{ fontSize:15, flexGrow:1 }}> Add Ticket Details </Text>
            <TouchableOpacity style={{ flexDirection:'row' }}>
            <Feather name='plus' color='red' size={20} />
            <Text style={{ color:'red', fontSize:15, }}>Add</Text>
            </TouchableOpacity>
            </View>


            <View style={{ flex:0.9, width:'95%', alignSelf:'center', marginTop:20}}>
              <Text style={{ fontWeight:'bold', }}> Ticket #1 </Text>
              <TextInput style={{ height:30, marginTop:10 }} placeholder="Ticket Name">
              </TextInput>
              <TextInput style={{ height:30, marginTop:10 }} placeholder="Ticket Price">
              </TextInput>
              <TextInput style={{ height:30, marginTop:10 }} placeholder="Ticket Details">
              </TextInput>
              <Text style={{ paddingVertical:3, fontWeight:'bold', borderColor:'red', borderWidth:1, width:'60%', borderRadius:5, marginTop:10 }} >
              Sale starts on 25 Aug, 2022 at 10:37 AM
              </Text>
              <Text style={{ paddingVertical:3, fontWeight:'bold', borderWidth:1, borderColor:'red', marginTop:10, width:'60%', borderRadius:5 }} >
              Sale ends on 25 Aug, 2022 at 10:37 AM
              </Text>
              {/*<CheckBox />*/}

              <View style={{ flexDirection:'row', marginTop:50, justifyContent:'space-between'}}>
                <TouchableOpacity style={{ borderRadius:10, width:'45%', height:45, backgroundColor:'silver', alignItems:'center', justifyContent:'center', }}>
                  <Text>SAVE AS DRAFT > </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius:10, width:'45%', height:45, backgroundColor:Colors.primaryColor, alignItems:'center', justifyContent:'center', }}>
                  <Text>CREATE EVENT > </Text>
                </TouchableOpacity>
              </View>

            </View>
            </View>
          )

        }


        default:
        return

      }
    }}
    decelerationRate={'fast'}
    snapToInterval={width}
    />
    </View>

    </View>
  );
}

const renderItem = (props) => {
  const { item, index } = props
  console.log(props)
  switch(item){
    case 1:{
      return(
        <View style={{ width, height:0.9*height}}>
        <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
        <FontAwesome name='folder' color='silver' size={24} />
        <TextInput placeholder='Event title' onChangeText={(text)=>props.stateManager.setEventTitle(text)} style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
        <MaterialIcons name='check' color='silver' size={24} />
        </View>

        <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
        <FontAwesome name='calendar' color='silver' size={24} />
        <TextInput placeholder='Start time' style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
        <MaterialIcons name='check' color='silver' size={24} />
        </View>

        <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
        <FontAwesome name='calendar' color='silver' size={24} />
        <TextInput placeholder='End time' style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
        <MaterialIcons name='check' color='silver' size={24} />
        </View>

        <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
        <Feather name='clock' color='silver' size={24} />
        <TextInput placeholder='Time Fuse' style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
        <MaterialIcons name='check' color='silver' size={24} />
        </View>

        <View style={{ borderBottomWidth:1, borderColor:'silver', width:'90%', alignSelf:'center', height:50, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginBottom:10}}>
        <Ionicons name='location' color='silver' size={24} />
        <TextInput placeholder='Location' style={{ width:'80%', height:'100%', borderWidth:0, fontSize:17,  fontWeight:'bold'}}></TextInput>
        <MaterialIcons name='check' color='silver' size={24} />
        </View>

        <TouchableOpacity style={{ borderRadius:5,alignSelf:'center', width:'90%', height:50, backgroundColor:Colors.primaryColor,alignItems:'center',justifyContent:'center',marginTop:20}}>
          <Text style={{color:'white'}}> SELECT DESIGN > </Text>
        </TouchableOpacity>

        </View>
      )
    }
    case 2:{
      return (
        <View style={{width,height:0.9*height}}>
        <View style={{ flex:1,width:'95%',alignSelf:'center'}}>
        <Text style={{ fontWeight:'bold', fontSize:17,borderWidth:0,marginTop:0}}>Event cover design</Text>
        <Text style={{ color:'rgb(100,100,100)', marginBottom:10}}>Select a design from below or gallery/camera</Text>

        <View style={{ borderWidth:0, height:height*0.69}}>
        <ScrollView >
        <View style={{width:'100%',height:height*0.27,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
          <Text style={{ fontSize:20, fontWeight:'bold', color:'red', width:'30%', textAlign:'center'}}>CREATE YOUR OWN FLYER DESIGN</Text>
        </View>

        <View style={{ marginTop:5, width:'100%', height:height*.3, flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent1.png')}/></TouchableOpacity>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent2.png')}/></TouchableOpacity>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent3.png')}/></TouchableOpacity>
        </View>

        <View style={{ marginTop:5, width:'100%', height:height*.3, flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent1.png')}/></TouchableOpacity>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent2.png')}/></TouchableOpacity>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent3.png')}/></TouchableOpacity>
        </View>

        <View style={{ marginTop:5, width:'100%', height:height*.3, flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent1.png')}/></TouchableOpacity>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent2.png')}/></TouchableOpacity>
          <TouchableOpacity style={{width:'32%',height:'100%'}}><Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/djEvents/DJEvent3.png')}/></TouchableOpacity>
        </View>

        </ScrollView>
        </View>

        <TouchableOpacity style={{ borderRadius:5,alignSelf:'center', width:'90%', height:50, backgroundColor:Colors.primaryColor,alignItems:'center',justifyContent:'center',marginTop:20}}>
          <Text style={{color:'white'}}> SELECT DESIGN > </Text>
        </TouchableOpacity>
        </View>
        </View>
      );
    }
    case 3:{
      return(
        <View style={{backgroundColor:'purple',width,height:0.9*height}}>



        </View>
      )
    }
    case 4:{
      return(
        <View style={{backgroundColor:'yellow',width,height:0.9*height}}></View>
      )

    }


    default:
    return

  }
}
CreateEventScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
    }
}

export default withNavigation(CreateEventScreen);
