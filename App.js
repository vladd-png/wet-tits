/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

 function Separator() {
   return <View style={styles.separator} />;
 }

 export default function App() {
   return (
     <SafeAreaView style={styles.container}>
       <View>
         <TouchableOpacity style={{height:50,backgroundColor:"skyblue",alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:32,}}>Train Today</Text>
         </TouchableOpacity>
       </View>
       <Separator />
       <View>
         <TouchableOpacity style={{height:50,backgroundColor:"skyblue",alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:32,}}>Run Today</Text>
         </TouchableOpacity>
       </View>
     </SafeAreaView>
   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginHorizontal: 16
   },
   separator: {
     marginVertical: 8,
     borderBottomColor: '#737373',
     borderBottomWidth: StyleSheet.hairlineWidth,
   },
   button: {
     fontSize: 32,
     color: '#f194ff'
   }
 });
