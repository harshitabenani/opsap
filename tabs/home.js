import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image ,Dimensions,ScrollView,SafeAreaView,Linking} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';
import {Ionicons,MaterialCommunityIcons,Feather,MaterialIcons,FontAwesome5} from "@expo/vector-icons"



const devHeight = Dimensions.get('screen').height ;






class HomeScreen extends React.Component{

  constructor(props) {     
    super(props);     
    this.state = {       
    images: [   
    
      
  
      require('../assets/IMG_1861.png'),
      require('../assets/IMG_1862.png'),
      require('../assets/IMG_1863.png'),
      require('../assets/IMG_1864.png'),
    
    ]     
    }   
    }  


 render() {
 
 return (
      <SafeAreaView>
       
        <View style={styles.container1}>
           <Text style={{alignItems:'center',margin:20,fontWeight:"bold",fontSize:18,color:"#fff",}}>Home</Text>
           <Image source={require('../assets/logos/logosap.png')} style={{height:50,width:150,marginTop:5}}/>
         </View>

         

         <SliderBox
  
  images={this.state.images}
  sliderBoxHeight={400}
  dotColor="#000"
  marginTop={10}
  parentWidth={320}
  marginLeft={20}
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  resizeMode={'contain'}

 ></SliderBox>
  
  <View style={{height:150,width:320,borderRadius:20,backgroundColor:'#e53935',alignSelf:'center',marginTop:25}} >

    <View  style={{ justifyContent:'space-around',flexDirection:'row',marginTop:20}}>
    <FontAwesome5 name="spotify" size={24} color={'#fff'} />
    <Text style={{color:"#fff",fontWeight:'bold',fontSize:15}} onPress={ ()=> Linking.openURL('https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ') }>Spotify Playlist</Text>
    </View>

    <View  style={{ justifyContent:'space-around',flexDirection:'row',marginTop:20}}>
    <MaterialIcons name="forum" size={24} color={'#fff'} />
    <Text style={{color:"#fff",fontWeight:'bold',fontSize:15}} onPress={ ()=> Linking.openURL('https://forums.oneplus.com/forums/student-community/') }>One Plus Forum</Text>
    </View>

    <View  style={{ justifyContent:'space-around',flexDirection:'row',marginTop:20}}>
    <FontAwesome5 name="instagram" size={24} color={'#fff'} style={{marginLeft:7}} />
    <Text style={{color:"#fff",fontWeight:'bold',fontSize:15}} onPress={ ()=> Linking.openURL('https://www.instagram.com/oneplus_sap/?igshid=yeipvjydv0l7') }>Instagram Handle</Text>
    </View>
        
      </View>
    
      </SafeAreaView>
     
     );
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
export default HomeScreen