import React,{useState} from 'react'
import { ScrollView,StatusBar,StyleSheet,View,ImageBackground,Linking,Modal, Text } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Chip } from 'react-native-paper';
import Contact from './Contact'

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  
    return (
        <ScrollView style={{flex:1,backgroundColor:"White",paddingHorizontal:20}}>

<Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
<View style={styles.centeredView}>
        <View style={styles.modalView}>
              
          
                <Contact/>
            <Button
            icon="book"
            style={{marginTop:30}}
              mode="contained"
              color="gray"
              onPress={() => setModalVisible(!modalVisible)}
            >
          Close This
            </Button>
          
          </View>


        </View>
          </Modal>







            <StatusBar barStyle="white-content" backgroundColor="blue" />
            <View style={{backgroundColor:"gray",marginVertical:10,padding:20,borderRadius:20}}>
                    <Text style={{fontSize:13,textAlign:"center",textTransform:"uppercase"}}>
                    This is a simple mobile appilcation to show the data of Covid19.
                    News page is all about the webview of those websites.
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
                size={42}
                style={{
                  color: "cyan",
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

            <View style={{marginBottom:20}}>
<Chip icon="send" style={{textAlign:"center",marginTop:15}} 
        onPress={() => setModalVisible(true)}
selectedColor="green" >Wanna say someWords toDeveloper</Chip>
              
            </View>
        </ScrollView>
    )
}


export default About;


const styles = StyleSheet.create({

  centeredView: {
  
    marginTop:70 
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },


})