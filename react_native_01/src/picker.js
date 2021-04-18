/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { View, Text, StyleSheet, TextInput } from 'react-native';
 import { Picker } from '@react-native-community/picker';
 
 class PickerComponent extends Component {

    state = {
        country:'korea'
    }

   render() {
     return (
         <View style={styles.container}>
            <Picker 
                style={{height:50, width:250}}
                selectedValue={this.state.country}
                onValueChange={(val, idx) => 
                    this.setState({country:val})
                }
            >
                <Picker.Item label="Korea" value="korea"/>
                <Picker.Item label="Canada" value="canada"/>
            </Picker>
        </View>
     )
   }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         paddingTop: 20,
         marginBottom: 200, 
         alignItems: 'center'
     }
 }) 

 export default PickerComponent;
 