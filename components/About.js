import React from 'react'
import { ScrollView,StatusBar,View,ImageBackground,Linking, Text } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip } from 'react-native-paper';

const About = () => {
    return (
        <ScrollView style={{flex:1,backgroundColor:"White",paddingHorizontal:20}}>
            <StatusBar barStyle="white-content" backgroundColor="blue" />
            <View style={{backgroundColor:"gray",marginVertical:10,padding:20,borderRadius:20}}>
                    <Text>
                    This is a simple mobile appilcation to show the data of Covid.
                    News page is all about webview of those websites.
                    </Text>
            </View>

            <View style={{marginVertical:15,backgroundColor:"gray",padding:20,borderRadius:20}}>
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
              <View style={{position:"absolute",top:10,right:0}}>
              <MaterialCommunityIcons
                name="instagram"
                size={52}
                style={{
                  color: "yellow",
                  marginRight: 12,
                }}
                onPress={() =>
                  Linking.openURL("https://www.instagram.com/invalid_sb/")
                }
              />
              </View>
          </ImageBackground>
</View>
            </View>
            </View>
            <View style={{paddingHorizontal:40}}>

<View style={{paddingHorizontal:40}}>
<Chip icon="phone" style={{textAlign:"center"}} selectedColor="green" >9865005564</Chip>
            </View>
<Chip icon="email" style={{textAlign:"center",marginTop:15}} selectedColor="green" >InvalidSB45@gmail.com</Chip>
            </View>
        </ScrollView>
    )
}

export default About
