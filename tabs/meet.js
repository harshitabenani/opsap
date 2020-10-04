import React, { Component } from 'react';
import { View, Text,SafeAreaView,StyleSheet,Image,ScrollView,Linking,TouchableOpacity} from 'react-native'
import { render } from 'react-dom';

export default class MeetScreen extends React.Component{
    render(){
        return(
            <SafeAreaView>
            
             <View style={styles.header}>
              <Text style={{alignItems:'center',margin:20,fontWeight:"bold",fontSize:18,color:"#fff",}}>Meet The Team</Text>
             <Image source={require('../assets/logos/logosap.png')} style={{height:50,width:150,marginTop:5}}/>
              </View>

                <ScrollView style={{marginBottom:80}}>
                 
                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>
                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/AdvaitKarmakar.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>ADVAIT KARMAKAR</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/AtishayJain.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>ATISHAY JAIN</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/DevSabharwal.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>DEV SABHARWAL</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/DhruvShetty.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>DHRUV SHETTY</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/KaashviSaxena.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>KAASHVI SAXENA</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/PratyushAgarwal.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>PRATYUSH AGARWAL</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/SarthakSoral.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>SARTHAK SORAL</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=> Linking.openURL('mailto:v-atishay.jain@oneplus.com') }>

                <View style={styles.container1}>
                    <Image source={require('../assets/images/team/SuparnaMukherji.png')} style={{alignSelf:'center',height:230,width:230,marginTop:25}}></Image>
                    <Text style={{fontSize:20,textAlign:'center',marginTop:10,color:'#fff',fontWeight:'bold'}}>SUPARNA MUKHERJI</Text>
                </View>
                </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container1:{
        marginTop:25,
        height:300,
        width:320,
        alignSelf:'center',
        backgroundColor:'#e53935',
        borderRadius:40,
       

    },
    header:{
    
        height:60,
        width:'100%',
        backgroundColor:'gray',
        borderBottomColor:"#bdbdbd",
        borderBottomWidth:1,
        justifyContent:'space-between',
        flexDirection:'row'
        
       },

})