import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,ScrollView,SafeAreaView,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const devHeight = Dimensions.get('screen').height ;

class GalleryScreen extends Component
{
  constructor(props) {     
    super(props);     
    this.state = {       
    data: [   
    
      
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
     { key:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpC9dtWyz1EyYb0WPoFvKJeybAf4hHoEwd0Q&usqp=CAU'},
    
     
    ]     
    }   
    }
    
    renderItem= ({item,index}) => {
      return(
         <Image source={{uri:item.key}} style={{height:220,width:155,margin:5,}}/>
        
      )
  }

  

  render()
  {
    
  return(
    <SafeAreaView>


       <View style={styles.container1}>
           <Text style={{alignItems:'center',margin:18,fontWeight:"bold",fontSize:18,color:"#fff",}}>Gallery</Text>
           <Image source={require('../assets/logos/logosap.png')} style={{height:50,width:150,marginTop:5}}/>
         </View>

         <ScrollView>

         <Text style={{textAlign:'center',marginTop:20,color:'#e53935',fontWeight:'bold',textDecorationLine:'underline',fontSize:20}}>ACTIVITIES AND CAMPAIGNS</Text>


         <FlatList  style={{marginHorizontal:20,marginVertical:10,marginBottom:125,marginTop:10}}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item=>item.id}
                numColumns={2}
         />

     </ScrollView>

  
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

export default GalleryScreen