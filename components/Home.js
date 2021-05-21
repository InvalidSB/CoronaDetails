import React,{useState} from 'react'
import { View,ScrollView,Animated,ImageBackground,Share,RefreshControl,Modal,Image, Text,StatusBar,StyleSheet,ToastAndroid } from 'react-native'
import { Chip,Button } from 'react-native-paper';
import { Card, Title } from 'react-native-paper';





const Home = () => {
    const [country,setCountry]=useState()
    const [continent,setContinent]=useState()
    const [population,setPopulation]=useState()
    const [oneCasePerPeople,setoneCasePerPeople]=useState()
    const [testperp,setTestperp]=useState()
    const [flaguri,setFlaguri]=useState()
    const [active,setActive]=useState()
    const [cases,setCases]=useState()
    const [death,setDeath]=useState()
    const [recovered,setRecovered]=useState()
    const [test,setTest]=useState()
    const [todayCases,setTodayCases]=useState()
    const [todayDeaths,setTodayDeaths]=useState()
    const [todayRecovered,settodayRecovered]=useState()


   



    const GetData=()=>{

    fetch('https://disease.sh/v3/covid-19/countries/nepal')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        const flaguri=responseJson.countryInfo.flag
        const cases= responseJson.cases
        const active= responseJson.active
        const death= responseJson.deaths
        const test= responseJson.tests
        const recovered= responseJson.recovered
        // aajako
        const todayCases= responseJson.todayCases
        const todayDeaths= responseJson.todayDeaths
        const todayRecovered= responseJson.todayRecovered
        //about country
        const country=responseJson.country
        const continent=responseJson.continent
        const population= responseJson.population
        const testperp= responseJson.oneTestPerPeople
        const oneCasePerPeople= responseJson.oneCasePerPeople

        setFlaguri(flaguri)
        setCases(cases)
        setDeath(death)
        setTest(test)
        setActive(active)
        setRecovered(recovered)
        //about country
        setCountry(country)
        setContinent(continent)
        setPopulation(population)
        setTestperp(testperp)
        setoneCasePerPeople(oneCasePerPeople)
        //aajako
        setTodayCases(todayCases)
        setTodayDeaths(todayDeaths)
        settodayRecovered(todayRecovered)
    }).catch((error) => {
        console.log("Data fetching failed");
    });
  }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      GetData()
      showToastWithGravity()
      setCount(count+1)
      wait(2000).then(() => setRefreshing(false));
    }, []);
   
    GetData()

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "Data get refreshed, everyday before 7PM NST ",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      };
      const [count,setCount]=useState(0)
    const showToastWithGravityT = () => {
        ToastAndroid.showWithGravity(
          " डाटा आउन समय लाग्यो,कृपया केहि बेर् कुर्नुहोस् | ",
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      };
      if (count == 3){
        showToastWithGravityT()
      }
      const [modalVisible, setModalVisible] = useState(false);

      const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              todayCases+" New Cases ...."+todayDeaths+" New Death ... & "+todayRecovered+" peoples get recovered Toady. "+" Stay safe, Stay Healthy, Keep maintaining Social Distance."+" -From CoronaDetailsApp (InvalidSB)" ,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };




    return (
        <ScrollView style={styles.container}
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}

            />
          }
        >
            <StatusBar barStyle="white-content" backgroundColor="blue" />

            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
<View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={{display:"flex",flexDirection:"row"}}>
            <Text style={{textTransform:"uppercase",fontSize:30,color:"blue"}}>{country}</Text>
            <Text style={{fontSize:8}}>{continent}</Text>
              </View>
            <Text style={{marginTop:20,marginBottom:10}}>Total Population</Text>
            <Chip icon="" style={{textAlign:"center"}} selectedColor="green" >{population}</Chip>
            <Text style={{marginTop:20,marginBottom:20,textAlign:"center"}}>One Test have been done per {testperp} people</Text>
            <Text style={{marginBottom:20,textAlign:"center"}}>One new case per {oneCasePerPeople} people</Text>
            <Text
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close This</Text>
            </Text>
          </View>
        </View>
          </Modal>
                <View 
                style={styles.heading}
                >
                <ImageBackground 
            source={require("../assets/corona.png")}

                 style = {{justifyContent: "center",resizeMode: "center",}}>
                    <View style={styles.headingInner} >
                    <Text style={{fontSize:22,textAlign:"center",textTransform:"uppercase",color:"white",marginRight:10}}>Corona cases <Text  onPress={() => setModalVisible(true)}>in Nepal</Text>
                    <Image source={{uri:flaguri}} style={{width:15,height:20}}/>
              </Text>
              </View></ImageBackground>
                </View>
                <View style={styles.todaydata}>
                <Button
       mode ="contained"
        color="black"
        onPress={() => showToastWithGravity()}
      >Today's DATA</Button>
                <View style={styles.firstdetail}>
                <Card style={{marginVertical:10}}>
                    <Card.Content>
                    <Title style={{textAlign:"center",textTransform:"uppercase"}}>New Cases</Title>
                    <Text style={{textAlign:"center",fontSize:25,textTransform:"uppercase"}}>{todayCases}</Text>
                    </Card.Content>
                </Card>
                <Card style={{marginVertical:10}}>

                    <Card.Content>
                    <Title style={{textAlign:"center",textTransform:"uppercase"}}>New Death</Title>
                    <Text style={{textAlign:"center",fontSize:25,textTransform:"uppercase"}}>{todayDeaths}</Text>
                    </Card.Content>
                </Card>
                <Card style={{marginVertical:10}}>

                    <Card.Content>
                    <Title style={{textAlign:"center",textTransform:"uppercase"}}>New Recovered </Title>
                    <Text style={{textAlign:"center",fontSize:25,textTransform:"uppercase"}}>{todayRecovered}</Text>
                    
                    </Card.Content>
                </Card>
                </View>
                </View>

            <View>
          <Button icon="share" onPress={onShare} mode ="contained" style={{marginBottom:20}}>Share</Button>
          <View style={{marginVertical:10,marginBottom:40,padding:20,backgroundColor:"#808080",borderRadius:30}}>
            <Text style={{textAlign:"center",color:"white",fontSize:18}}>There are still {active} Active corona cases in {country}</Text>
          </View>

                <View style={styles.secdetail}>
                <Chip icon="pen" style={{textAlign:"center"}} selectedColor="blue" >Total no of Corona cases</Chip>
                    <View style={{marginVertical:15}}>
                        <Text style={{textAlign:"center",padding:10,fontSize:22,borderRadius:50,backgroundColor:"white",elevation:1}}>{cases}</Text>
                    </View>
                <Chip icon="pen"  style={{textAlign:"center",elevation:3}} selectedColor="red"onPress={()=>console.log("ahh")} >Total no of Deaths yet</Chip>
                <View style={{marginVertical:15}}>
                        <Text style={{textAlign:"center",padding:10,fontSize:25,elevation:1,borderRadius:50,backgroundColor:"white"}}>{death}</Text>
                    </View>
            
                <Chip icon="pen" style={{textAlign:"center"}} selectedColor="green" >Total no of Tests done </Chip>
                <View style={{marginVertical:15}}>
                        <Text style={{textAlign:"center",padding:10,fontSize:22,borderRadius:50,backgroundColor:"white",elevation:1}}>{test}</Text>
                    </View>
                <Chip icon="pen" style={{textAlign:"center"}} selectedColor="green" >Total no of Recovered  </Chip>
                <View style={{marginVertical:15}}>
                        <Text style={{textAlign:"center",padding:10,fontSize:22,borderRadius:50,backgroundColor:"white"}}>{recovered}</Text>
                    </View>
                </View>
           
        </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {  backgroundColor:"#f2f2f2" ,padding:15,paddingBottom:20},
    headingInner:{
        backgroundColor: "#000000a0",
            marginVertical:20,
            marginHorizontal:20,
            padding:10,
            alignContent:"center",
            justifyContent:"center",
            textAlign:"center",
            borderRadius:30,
            
    },
    tdheading:{
        backgroundColor:"#333333",
        padding:8,  
    },
    firstdetail:{
        backgroundColor:'#d3d3d3',
        paddingVertical:25,
        paddingHorizontal:35,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        
    },
    todaydata:{
        marginVertical:30,
        marginHorizontal:5,

    },
    secdetail:{
        backgroundColor:'#d3d3d3',
        paddingVertical:35,
        paddingHorizontal:30,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        borderRadius:20,
        marginBottom:30

    },
   

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    


  });