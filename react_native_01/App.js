/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';


class App extends Component {

  state = { 
    appName : 'My First App',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()* 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })

    this.setState({random:newArray})
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Input />
        {/* <Header name={this.state.appName}/>

        <View>
          <Text
            style={styles.mainText}
            onPress={()=>alert('Text touch Event')}
          >Hello World</Text>
        </View>

        <Generator add={this.onAddRandomNum}/>

        <ScrollView style={{width:'100%'}}
          //onMomentumScrollBegin={()=>alert('begin')}
          //onMomentumScrollEnd={()=>alert('end')}
          //onScroll={()=>alert('ing')}
          //onContentSizeChange={(width, height) => alert(height)}
          bounces={false}
        >

        <NumList 
          num={this.state.random} 
          delete={this.onNumDelete} 
        />

        </ScrollView> */}

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex:1, 
    backgroundColor: 'white',
    paddingTop:50,
    alignItems: 'center',
    //justifyContent: 'center'
  }, 
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})

export default App;
