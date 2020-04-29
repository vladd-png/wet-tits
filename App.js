/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

 function Separator() {
   return <View style={styles.separator} />;
 }

 export default function App() {
   return (
     <SafeAreaView style={styles.container}>
       <View>
         <Button
         title="Train Today"
         color="#f194ff"
         onPress={() => Alert.alert('Button with adjusted color pressed')}
         />
         <Text style={styles.title}>
          Focused Muscle Group Workouts
         </Text>
       </View>
       <Separator />
       <View>
         <Button style={styles.button}
           title="Run Today"
           color="rebeccapurple"
           onPress={() => Alert.alert('Button with adjusted color pressed')}
         />
         <Text style={styles.title}>
          Track Your Mile Time
         </Text>
       </View>
     </SafeAreaView>
   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginHorizontal: 16
   },
   title: {
     textAlign: 'center',
     marginVertical: 8,
     fontSize: 18
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
