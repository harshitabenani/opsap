import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,SafeAreaView,ScrollView, Dimensions} from 'react-native'


const devHeight = Dimensions.get('screen').height ;
const devWidth = Dimensions.get('screen').width; 

class CollabScreen extends React.Component {

    state = {
      name:'',
      email: '',
      contact:'',
      idea: '',
      

   }
   
   handlename = (text) => {
      this.setState({ name: text })
   }
   handleemail = (text) => {
      this.setState({ email: text })
   }
   handlecontact = (text) => {
      this.setState({ contact: text })
   }
   handleidea = (text) => {
      this.setState({ idea: text })
   }
  

 
 





check=()=>
{

  if(this.state.idea != ''  && this.state.name != '' && this.state.email != '' && this.state.contact != '' )
  {
     alert("Thank You, Your Response was recorded! ")
     this.props.navigation.replace('MainHome')
    
  }
  else
  {
    alert("PLEASE ENTER THE EMPTY FIELD(S)")
  }
}




   render()
   {
     return(

        

        <SafeAreaView style={{width: '100%', height: devHeight + devHeight*25/100 }}>
    

       <View style={styles.container1}>
           <Text style={{alignItems:'center',margin:20,fontWeight:"bold",fontSize:18,color:"#fff",}}>Collaborate with Us</Text>
           <Image source={require('../assets/logos/logosap.png')} style={{height:50,width:150,marginTop:5}}/>
         </View>
         <ScrollView>

         <Text style={{color:"#9e9e9e",marginTop:70,marginHorizontal:38}}>Name</Text>

<TextInput style={styles.inputfirst}
 underlineColorAndroid = "transparent"
 autoCapitalize = "none"
 onChangeText = {this.handlename}
 const names={this.state.name}/>

 <Text style={{color:"#9e9e9e",marginTop:30,marginHorizontal:38}}>Email</Text>

 <TextInput style={styles.inputfirst}
 underlineColorAndroid = "transparent"
 autoCapitalize = "none"
 onChangeText = {this.handleemail}/>

 <Text style={{color:"#9e9e9e",marginTop:30,marginHorizontal:38}}>Contact</Text>


<TextInput style={styles.inputfirst}
 underlineColorAndroid = "transparent"
 autoCapitalize = "none"
 onChangeText = {this.handlecontact}
 keyboardType={'numeric'} 
 maxLength={10}/>

 <Text style={{color:"#9e9e9e",marginTop:30,marginHorizontal:38}}>Collaboration Idea</Text>


   <TextInput style={styles.input}
 underlineColorAndroid = "transparent"
 autoCapitalize = "none"
 onChangeText = {this.handleidea}
 multiline={true}
 
 />


    <TouchableOpacity onPress={()=>this.check()} >
       

      <View style={styles.submitButton}>
      <Text style={{color: '#FFF',textAlign:'center',paddingTop:11,fontSize:20,fontWeight:'bold'}}>Submit</Text>
      </View>
       
     
      </TouchableOpacity>

      </ScrollView>
            

</SafeAreaView>



     )
   }
  
}

const styles = StyleSheet.create({

    container1:{
    
        height:60,
        width:'100%',
        backgroundColor:'gray',
        borderBottomColor:"#bdbdbd",
        borderBottomWidth:1,
        justifyContent:'space-between',
        flexDirection:'row'
        
       },

       inputfirst: {
    
        height:30,
        width:300,
        padding:5,
        alignSelf:'center',
        borderBottomColor:"#9e9e9e",
        borderBottomWidth:1
     },

     input:{

        padding:5,
        height: 150,
        width:300,
        alignSelf:'center',
        borderColor: '#9e9e9e',
        borderWidth: 1,
        marginTop:10

     },

   

       submitButton:{
  height:50,
  width:150,
  marginTop:40,
  marginLeft:110,
  
  borderRadius:100,
  backgroundColor:'#e53935',
  borderColor:'#FFF'},
    
})

  export default CollabScreen