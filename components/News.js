// //news ko api key 
// // d2945d878e5d4d53a5296620dcf7c0db

import React,{useEffect} from 'react'
import { Button,ScrollView,StatusBar, View, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';
import { Chip } from 'react-native-paper';

function NewsScreen({ navigation }) {
  return (

      
    <ScrollView style={{flex:1,backgroundColor:"White"}}>
    <StatusBar barStyle="white-content" backgroundColor="blue" />
      <View style={{paddingHorizontal:25,marginTop:20 }}>
        <Chip icon="eye" style={{textAlign:"center"}} selectedColor="green" >  Visit any of these Website below</Chip>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="OnlineKhabar"
        style={{}}
        onPress={() => navigation.navigate('WebView',{src:"https://www.onlinekhabar.com/"})}
      />
      <Button
        title="अन्नपूर्ण पोष्ट"
        onPress={() => navigation.navigate('WebView',{src:"http://annapurnapost.com/"})}
      />
      </View>
      
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="कान्तिपुर"
        onPress={() => navigation.navigate('WebView',{src:"https://ekantipur.com/"})}
      />
      <Button
        title="The  Himalayan  Times"
        onPress={() => navigation.navigate('WebView',{src:"https://thehimalayantimes.com/"})}
      />
      </View>

      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="
        Nagarik   News 
        "
        onPress={() => navigation.navigate('WebView',{src:"https://nagariknews.nagariknetwork.com/"})}
      />
      <Button
        title="रातोपाटी"
        onPress={() => navigation.navigate('WebView',{src:"https://www.ratopati.com/"})}
      />
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button title="सेतो पाटि"
        onPress={() => navigation.navigate('WebView',{src:"https://www.setopati.com/"})}
    
    />
      <Button
        title="Gorkha Patra Online"
        onPress={() => navigation.navigate('WebView',{src:"https://gorkhapatraonline.com/"})}
      />
     
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="Mero   Lagani"
        onPress={() => navigation.navigate('WebView',{src:"https://merolagani.com/"})}
      />
      <Button
        title="हाम्रो नेपाली पात्रो"
        onPress={() => navigation.navigate('WebView',{src:"https://www.hamropatro.com/"})}
      />
      </View>

      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="न्युज 24"
        onPress={() => navigation.navigate('WebView',{src:"https://nepalnew24.com/"})}
      />
      <Button
        title="Nepal Stock Exchange"
        onPress={() => navigation.navigate('WebView',{src:"http://www.nepalstock.com/"})}
      />
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
      <Button
        title="Kathmandu Today"
        onPress={() => navigation.navigate('WebView',{src:"https://www.kathmandutoday.com/"})}
      />
      <Button
        title="dcNepal"
        onPress={() => navigation.navigate('WebView',{src:"https://www.dcnepal.com/"})}
      />
      </View>
      <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
          <Button
            title="nepalipaisa"
            onPress={() => navigation.navigate('WebView',{src:"https://nepalipaisa.com/"})}
          />
      <Button
        title="gadgetbytenepal"
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
          "Please Wait It takes few secend to load",
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
        <Stack.Screen name="Top 16 News Portal of Nepal " options={{ headerTitleAlign:"center",headerTintColor:"white", headerStyle: {
              backgroundColor: 'black',
            },
    }} component={NewsScreen} />
        <Stack.Screen name="WebView" component={WebSiteView} />
      </Stack.Navigator>
     
  </>
  );
}

export default News;

