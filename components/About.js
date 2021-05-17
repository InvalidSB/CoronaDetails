import React from 'react'
import { ScrollView,StatusBar,View,ImageBackground, Text } from 'react-native'

const About = () => {
    return (
        <ScrollView style={{flex:1,backgroundColor:"White",paddingHorizontal:20}}>
            <StatusBar barStyle="white-content" backgroundColor="blue" />
            <View style={{backgroundColor:"gray",marginVertical:20,padding:20,borderRadius:20}}>
                    <Text>This application is developed on the purpose of providing the data of Corona in Your Country !.</Text>
                    <Text>You can see the total no of corona cases till now ,total no of death And also the today's Data.</Text>
            </View>

            <View style={{marginVertical:20,backgroundColor:"gray",padding:20,borderRadius:20}}>
            <Text style={{textAlign:"center",textTransform:"uppercase",padding:5,color:"white",borderBottomColor:2,borderBottomColor:"white",borderBottomWidth:2}}> Developer's Identity</Text>
            <View>
                
                <View  style={{
          backgroundColor: "white",
          padding: 8,
          elevation: 8,
          marginVertical:10
        }}>
<ImageBackground
            style={{ width: "100%", height: 280, borderRadius: 15,justifyContent:"center",position:"relative" }}
            source={require("../assets/2.jpg")}
          >
              <View style={{position:"absolute",backgroundColor:"black",paddingHorizontal:5,top:110,left:32}}>

              <Text style={{color:"cyan"}}>S</Text>
              <Text style={{color:"cyan"}}>U</Text>
              <Text style={{color:"cyan"}}>J</Text>
              <Text style={{color:"cyan"}}>A</Text>
              <Text style={{color:"cyan"}}>N</Text>
            
              </View>
              <View style={{position:"absolute",backgroundColor:"black",paddingHorizontal:5,bottom:30,left:32}}>
                <Text style={{color:"cyan",letterSpacing:8}}>BHATTARAI</Text>
              </View>
          </ImageBackground>
</View>

            </View>
            </View>
        </ScrollView>
    )
}

export default About
