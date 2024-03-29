import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, TouchableOpacityBase } from 'react-native';

import Note from './note';



export default class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            noteArray: [],
            noteText:''
        }

    }


    render(){

        let notes = this.state.noteArray.map((val, key) =>{
             return <Note key={key} keyval={key} val={val}
             deleteMethod={() => this.deleteNote(key)}  
             />
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Todo</Text>
                </View>
             <ScrollView style={styles.scrollContainer}>
                 {notes}
             </ScrollView>

             <view>
                 <TextInput style={styles.textInput}
                 onChangeText={(noteText) => this.setState({noteText})}
                 value={this.state.noteText}
                 placeholder="new note"
                 placeholderTextColor="white"
                 underlineColorAndroid="transparent">

                 </TextInput>
             </view>

             <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.addButton}>
                 <Text style={styles.addButtonText}> add</Text>
             </TouchableOpacity>
           
            </View>
          );
    }

    addTask() {
        // alert("hello")
        if(this.state.noteText){
            var date = new Date();

            this.state.noteArray.push({
                'date': date.getDate() + 
                '/'+ (date.getMonth() +1) + 
                '/'+date.getFullYear(),

                'note': this.state.noteText
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText: this.state.noteText});
        }
    }
 
    deleteNote(key){
        this.state.noteArray.splice(key ,1);
        this.setState({noteArray: this.state.noteArray});
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
    },
    scrollContainer: {
      flex: 1,
      marginBottom: 100,
    },
    footer: {
      position: 'absolute',
      bottom: '0',
    //   left: 0,
    //   right: 0,
    //   zIndex: 10,
      backgroundColor: '#252525',
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
    addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 24,
    },
  });