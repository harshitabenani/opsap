import React, { Component } from 'react';
import { View, Text,Image,StyleSheet, SafeAreaView,Modal} from 'react-native'
import { render } from 'react-dom';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {Ionicons,MaterialCommunityIcons,Feather,MaterialIcons} from "@expo/vector-icons"

export default class EventsScreen extends React.Component{

    state={

        showMe:false,
        showMe1:false,
        showMe2:false

    }

    render(){
        return(
            <SafeAreaView>
            <View style={styles.container1}>
            <Text style={{alignItems:'center',margin:20,fontWeight:"bold",fontSize:18,color:"#fff",}}>Events</Text>
            <Image source={require('../assets/logos/logosap.png')} style={{height:50,width:150,marginTop:5}}/>
          </View>

          <TouchableOpacity onPress={()=>this.setState({showMe:true})}>
            <View style={{height:100,width:320,alignSelf:'center',backgroundColor:'#e53935',marginTop:110,justifyContent:'space-around',flexDirection:'row',alignItems:'center',borderRadius:30}}>
               
                <Ionicons name="md-calendar" size={35} color={'#fff'} style={{marginLeft:15}}></Ionicons>
                <Text style={{color:"#fff",fontWeight:'bold',fontSize:25,marginRight:35}}>Upcoming Events</Text>
             
            </View>

         </TouchableOpacity>

         <TouchableOpacity onPress={()=>this.setState({showMe1:true})}>
            <View style={{height:100,width:320,alignSelf:'center',backgroundColor:'#e53935',marginTop:50,justifyContent:'space-around',flexDirection:'row',alignItems:'center',borderRadius:30}}>
               
                <Feather name="refresh-ccw" size={35} color={'#fff'} style={{marginLeft:15}}/>
                <Text style={{color:"#fff",fontWeight:'bold',fontSize:25,marginRight:35}}>OnGoing Events</Text>
             
            </View>

         </TouchableOpacity>

         <TouchableOpacity onPress={()=>this.setState({showMe2:true})}>
            <View style={{height:100,width:320,alignSelf:'center',backgroundColor:'#e53935',marginTop:50,justifyContent:'space-around',flexDirection:'row',alignItems:'center',borderRadius:30}}>
               
                <MaterialCommunityIcons name="clock-check-outline" size={35} color={'#fff'} style={{marginLeft:5}}/>
                <Text style={{color:"#fff",fontWeight:'bold',fontSize:25,marginRight:80}}>Past Events</Text>
             
            </View>

         </TouchableOpacity>

         <Modal                                //pop up to choose where to select image from
        visible={this.state.showMe}
        animationType={'slide'}
        transparent={true}
        >
            <View style={{height:'100%',width:'100%',backgroundColor:'#bdbdbd',flex:1}}>
                <SafeAreaView>
                
                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/upcoming_events/oxygen_os.jpg')} style={{height:180,width:'100%',alignSelf:'center',marginTop:50,resizeMode:'contain'}}/>
                </View>
                
                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/upcoming_events/warp_charge.png')} style={{height:180,width:'100%',alignSelf:'center',marginTop:50,resizeMode:'contain'}}/>
                </View>
            
            <TouchableOpacity onPress={()=>this.setState({showMe:false})}>
              <MaterialIcons name="cancel" size={70} color="#fff" style={{marginTop:20,alignSelf:'center'}}/>
              </TouchableOpacity>
              </SafeAreaView>
            </View>

        </Modal>

        <Modal                                //pop up to choose where to select image from
        visible={this.state.showMe1}
        animationType={'slide'}
        transparent={true}
        >
            <View style={{height:'100%',width:'100%',backgroundColor:'#bdbdbd',flex:1}}>
                <SafeAreaView>
                    <ScrollView>
                
                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/on_going_events/unbox_4.png')} style={{height:280,width:300,alignSelf:'center',resizeMode:'contain'}}/>
                </View>
                
                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/on_going_events/unbox_5.jpg')} style={{height:280,width:300,alignSelf:'center',resizeMode:'contain'}}/>
                </View>

                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/on_going_events/unbox_6.jpg')} style={{height:280,width:300,alignSelf:'center',resizeMode:'contain'}}/>
                </View>
            
            <TouchableOpacity onPress={()=>this.setState({showMe1:false})}>
              <MaterialIcons name="cancel" size={70} color="#fff" style={{marginTop:20,alignSelf:'center'}}/>
              </TouchableOpacity>

              </ScrollView>
              </SafeAreaView>
            </View>

        </Modal>

        <Modal                                //pop up to choose where to select image from
        visible={this.state.showMe2}
        animationType={'slide'}
        transparent={true}
        >
            <View style={{height:'100%',width:'100%',backgroundColor:'#bdbdbd',flex:1}}>
                <SafeAreaView>
                
                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/past_events/campus_soop_7.jpg')} style={{height:280,width:300,alignSelf:'center',resizeMode:'contain'}}/>
                </View>
                
                <View style={{height:280,width:350,marginTop:30,backgroundColor:'gray',borderRadius:30,alignSelf:'center'}}>
                <Image source={require('../assets/images/events/past_events/campus_soop_8.jpg')} style={{height:280,width:300,alignSelf:'center',resizeMode:'contain'}}/>
                </View>
            
            <TouchableOpacity onPress={()=>this.setState({showMe2:false})}>
              <MaterialIcons name="cancel" size={70} color="#fff" style={{marginTop:20,alignSelf:'center'}}/>
              </TouchableOpacity>
              </SafeAreaView>
            </View>

        </Modal>
      

          </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
  
    container1:{
      
    height:60,
    width:'100%',
    backgroundColor:'gray',
    borderBottomColor:"#bdbdbd",
    borderBottomWidth:1,
    justifyContent:'space-between',
    flexDirection:'row'
    
   },
  })