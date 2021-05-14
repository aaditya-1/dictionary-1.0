import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import {Header} from 'react-native-elements'

export default class HomeScreen extends Component {

  constructor(){
    super();
    this.state={
      word:"",
      displayWord:"",
      upperWord:"",
      description:"",
      category:""
    }
  }

  render(){

    return (
      <ScrollView style={{margin:50,height:"100%",}}>


        <TextInput style = {styles.Input} returnKeyType="go" enablesReturnKeyAutomatically={true} multiline={false}
        // onPress function
         onSubmitEditing={()=>{
          this.setState({displayWord:this.state.upperWord})

          var word = this.state.word.toLowerCase()
          console.log(word)
          var url = "https://rupinwhitehatjr.github.io/dictionary/"+word+".json"
          return fetch(url).then((data)=>{
            if(data.status === 200){
             return data.json()
            }else{
              return null         
            }
          }).then((response)=>{
            var responseObject = response

            if(responseObject){

              var wordObject = responseObject.definitions[0]
              var category = wordObject.wordtype
              var description = wordObject.description
  
              this.setState({
                category:category,
                description:description
              })
            }else{
              this.setState({
                category:"Not Found",
                description:"Not Found"
              })
            }


          })
          
        }}
         placeholder="Enter The Word" onChangeText = {(i)=>{
          this.setState({word:i})
          var o = i.toUpperCase()
          this.setState({upperWord:o})

        }} />

        <TouchableOpacity style = {styles.button} onPress={async()=>{
          this.setState({displayWord:this.state.upperWord})
          // console.log(this.state.word)

          var word = this.state.word.toLowerCase()
          var url = "https://rupinwhitehatjr.github.io/dictionary/"+word+".json"
          console.log(url)

           return fetch(url).then((data)=>{
            if(data.status === 200){
              return data.json()
            }else{
              return null         
            }
          }).then((response)=>{
            var responseObject = response

            if(responseObject){

              var wordObject = responseObject.definitions[0]
              var category = wordObject.wordtype
              var description = wordObject.description
  
              this.setState({
                category:category,
                description:description
              })
            }else{
              this.setState({
                category:"Not Found",
                description:"Not Found"
              })
            }


          })


        }} > 

          <Text style={styles.text}>FIND</Text>

        </TouchableOpacity>

        <Text style={{borderRadius:5,padding:20,marginTop:60,textAlign:'center',backgroundColor:"#4171c1",color:"yellow"}}> THE WORD IS <Text style={{color:"#ff9500"}}> {this.state.displayWord} </Text></Text>
        
        <Text style={{borderRadius:5,padding:20,marginTop:30,textAlign:'center',backgroundColor:"#4171c1",color:"yellow"}}> DESCRIPTION : <Text style={{color:"#ff9500"}}> {this.state.description.toUpperCase()} </Text></Text>

        <Text style={{borderRadius:5,padding:20,marginTop:30,textAlign:'center',backgroundColor:"#4171c1",color:"yellow"}}> CATEGORY : <Text style={{color:"#ff9500"}}> {this.state.category.toUpperCase()} </Text></Text>

        
      </ScrollView>
    );


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Input :{
    backgroundColor:"#aaa9e7",
    height:60,
    color:"red",
    width:"100%",
    padding:10,
    borderRadius:5,

  },
  button : {
    height:60,
    backgroundColor:"#66e182",
    padding:20,
    width:"100%",
    borderRadius:5,
    marginTop:15
  },
  text:{
    textAlign:'center'

  }
});
