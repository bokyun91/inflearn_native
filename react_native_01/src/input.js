/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { View, StyleSheet, TextInput } from 'react-native';
 
 class Input extends Component {

    state = {
        myTextInput: 'asdasdf'
    }

    onChangeInput = (event) => {
        this.setState({myTextInput : event })
    }
 
   render() {
     return (
         <View style={styles.mainView}>
            <TextInput
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={false}
            />
        </View>
     )
   }
 }

 const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop:20,
        fontSize:25,
        padding:10
    },
    mainView: {
        width: '100%'
    }
 });

 export default Input;
 