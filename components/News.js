// //news ko api key 
// // d2945d878e5d4d53a5296620dcf7c0db

import React,{useEffect} from 'react'
import { Button,ScrollView,StatusBar, View, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';
import { Chip } from 'react-native-paper';

function NewsScreen({ navigation }) {
  return (

      
    <ScrollView style={{flex:1,backgroundColor:"#f2f2f2"}}>
    <StatusBar barStyle="white-content" backgroundColor="blue" />
      <View style={{paddingHorizontal:25,marginTop:20 }}>
        <Chip icon="eye" style={{textAlign:"center"}} selectedColor="green" >  Visit any of the Websites below</Chip>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="OnlineKhabar"
        color="#ff5c33"
        
        onPress={() => navigation.navigate('WebView',{src:"https://www.onlinekhabar.com/"})}
      />
      <Button
        title="अन्नपूर्ण पोष्ट"
        color="green"
        onPress={() => navigation.navigate('WebView',{src:"http://annapurnapost.com/"})}
      />
      </View>
      
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="कान्तिपुर"
        color="navy"
        onPress={() => navigation.navigate('WebView',{src:"https://ekantipur.com/"})}
      />
      <Button
        title="The  Himalayan  Times"
        color="#86592d"
        onPress={() => navigation.navigate('WebView',{src:"https://thehimalayantimes.com/"})}
      />
      </View>

      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="
        Nagarik   News 
        "
        color="skyblue"
        onPress={() => navigation.navigate('WebView',{src:"https://nagariknews.nagariknetwork.com/"})}
      />
      <Button
        title="रातोपाटी"
        color="red"
        onPress={() => navigation.navigate('WebView',{src:"https://www.ratopati.com/"})}
      />
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button title="सेतो पाटि"
      color="black"
      
        onPress={() => navigation.navigate('WebView',{src:"https://www.setopati.com/"})}
    
    />
      <Button
        title="Gorkha Patra Online"
        color="gray"
        onPress={() => navigation.navigate('WebView',{src:"https://gorkhapatraonline.com/"})}
      />
     
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
      color="blue"
        title="Mero   Lagani"
        onPress={() => navigation.navigate('WebView',{src:"https://merolagani.com/"})}
      />
      <Button
        color="red"
        title="हाम्रो नेपाली पात्रो"
        onPress={() => navigation.navigate('WebView',{src:"https://www.hamropatro.com/"})}
      />
      </View>

      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="न्युज 24"
        color="#808000"
        onPress={() => navigation.navigate('WebView',{src:"https://nepalnew24.com/"})}
      />
      <Button
        title="Nepal Stock Exchange"
        color="#b800e6"
        onPress={() => navigation.navigate('WebView',{src:"http://www.nepalstock.com/"})}
      />
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="Kathmandu Today"
        color="#660000"
        onPress={() => navigation.navigate('WebView',{src:"https://www.kathmandutoday.com/"})}
      />
      <Button
        title="dcNepal"
        color="#003366"
        onPress={() => navigation.navigate('WebView',{src:"https://www.dcnepal.com/"})}
      />
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
          <Button
            title="nepalipaisa"
            color="#e6e600"
            onPress={() => navigation.navigate('WebView',{src:"https://nepalipaisa.com/"})}
          />
      <Button
        title="gadgetbytenepal"
        color="#00b300"
        onPress={() => navigation.navigate('WebView',{src:"https://www.gadgetbytenepal.com/"})}
      />
      </View>
 
    </View>
    </ScrollView>
  );
}

function WebSiteView({route}) {
    const {src}=route.params;
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "Please Wait!!! It takes time",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      };
      useEffect(() => {
         showToastWithGravity()
      }, [])
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
       <WebView
        style={{width:350,height:500}}
                originWhitelist={['*']}
                source={{ uri: src }}
        /> 
    </View>
  );
}

const Stack = createStackNavigator();

function News() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Top 16 News Portals from Nepal " options={{ headerTitleAlign:"center",headerTintColor:"white", headerStyle: {
              backgroundColor: 'black',
            },
    }} component={NewsScreen} />
        <Stack.Screen name="WebView" component={WebSiteView} />
      </Stack.Navigator>
     
  </>
  );
}

export default News;

