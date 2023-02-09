import React from 'react'
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
const Dashboard = ({navigation}) => {
  return (
    <>

   
    <View style={styles.dashboardmain}>
        <Text style={styles.text} onPress={()=>navigation.navigate("login")}>login</Text>
        {/* <Button >Login</Button> */}
        <Text style={styles.text} onPress={()=>navigation.navigate("signup")}>Signup</Text>
        
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    dashboardmain: {
      backgroundColor: 'green',
      height:5000,
      fontSize: 44,
      padding: 20,
      fontWeight: '20px',
    },
    text:{
        color:"pink",
        fontSize: 44,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 50,
        paddingLeft:20,
        marginTop:10
        
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  

export default Dashboard
