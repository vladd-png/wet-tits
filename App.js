/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const image = { url: '/Users/virginialadd/projects/wet-tits/wetTits/assets/abs-bg.jpg' };

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <ImageBackground source={ image }  style={ styles.image } >
      <View>
        <TouchableOpacity style={ styles.buttonTop } >
          <Text style={{ fontSize: 32, color: 'lightgray' }}>Train Today</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View>
        <TouchableOpacity style={ styles.buttonBottom } >
          <Text style={{ fontSize: 32, color: 'lightgray' }}>Run Today</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 16,
    color: '#000',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginTop: '-30%',
  },
  buttonTop: {
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent:'center',
  },
  buttonBottom: {
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent:'center',
  },
});
