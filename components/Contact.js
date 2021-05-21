import React, {  Component } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Linking,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, Alert } from "react-native";
import {
  Content,
  Icon,
  Card,
  CardItem,
  Item,
  Body,
  Right,
  Input,
  Form,
  Textarea,
  Left,
} from "native-base";

import {
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const scr = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};
const colors = {
  themeColor: "tomato",
  white: "#fff",
  greyish: "gray",
  black: "black",
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      mobile: null,
      email: null,
      msg: null,
    };
  }

  postMsg = (
    name,
    mobile,
    email,
    msg,
    nameClear,
    mobileClear,
    emailClear,
    msgClear
  ) => {
    if (this.state.msg != null) {
      fetch(
        // "https://contactform-13f6e-default-rtdb.europe-west1.firebasedatabase.app/contact.json",
        "https://reacttodo-73a2d-default-rtdb.firebaseio.com/fc_contact.json",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            mobile: mobile,
            email: email,
            msg: msg,
          }),
        }
      )
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.name != null) {
            this.refs[nameClear].setNativeProps({ text: "" });
            this.refs[mobileClear].setNativeProps({ text: "" });
            this.refs[emailClear].setNativeProps({ text: "" });
            this.refs[msgClear].setNativeProps({ text: "" });
            this.setState({
              name: null,
              mobile: null,
              email: null,
              msg: null,
              isSubmited: true,
            });
          } else {
            Alert.alert(
              "Oops !",
              "Something went wrong",
              [
                {
                  text: "OK",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
              ],
              { cancelable: false }
            );
          }
        })
        .done();
    } else {
      Alert.alert(
        "Oops !",
        "Press SUBMIT button only after entering your Message.",
        [
          {
            text: "OK",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  };

  _togglePostCard() {
    this.setState({
      isSubmited: false,
    });
  }

  render() {
    return (
      <ScrollView
      
      >
        

        <View
          style={{
            backgroundColor: colors.white,
            elevation: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              margin: 20,
              color: colors.black,
            }}
          >
            Say Some Words !!!
          </Text>

          <Content>
            <Card style={styles.postCard}>
              {this.state.isSubmited ? (
                <View>
                  <CardItem>
                    <Item>
                      <Icon
                        active
                        name="ios-checkmark-circle"
                        style={{
                          fontSize: 30,
                          color: "tomato",
                          marginLeft: 5,
                          marginRight: 10,
                        }}
                      />
                      <Text style={{ flex: 1 }}>
                        Thanks. We'll try to get in touch with you as soon as
                        possible
                      </Text>
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Left></Left>
                    <Body>
                      <TouchableOpacity
                        success
                        onPress={() => this._togglePostCard()}
                      >
                        <Icon
                          active
                          name="refresh"
                          style={{
                            fontSize: 40,
                            color: "#64DD17",
                            marginLeft: 10,
                          }}
                        />
                      </TouchableOpacity>
                    </Body>
                    <Right></Right>
                  </CardItem>
                </View>
              ) : (
                <View>
                  <CardItem>
                    <Item>
                      <Input
                        placeholder="Name"
                        onChangeText={(name) => this.setState({ name })}
                        ref={"nameClear"}
                      />
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Item>
                      <Input
                        placeholder="Mobile"
                        onChangeText={(mobile) => this.setState({ mobile })}
                        ref={"mobileClear"}
                        keyboardType={"phone-pad"}
                      />
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Item>
                      <Input
                        placeholder="Email"
                        onChangeText={(email) => this.setState({ email })}
                        ref={"emailClear"}
                        keyboardType={"email-address"}
                      />
                    </Item>
                  </CardItem>
                  <Form style={{ marginLeft: 10, marginRight: 10 }}>
                    <Textarea
                      rowSpan={3}
                      bordered
                      placeholder="Type your message"
                      onChangeText={(msg) => this.setState({ msg })}
                      ref={"msgClear"}
                    />
                  </Form>
               
                    <View style={{padding:10}}>
                    <Button
                    
                      color="tomato"
                      icon="send"
                      mode={"contained"}
                      onPress={() =>
                        this.postMsg(
                          this.state.name,
                          this.state.mobile,
                          this.state.email,
                          this.state.msg,
                          "nameClear",
                          "mobileClear",
                          "emailClear",
                          "msgClear"
                        )
                      }
                    >
                      SUBMIT
                    </Button>
                    </View>
                 
                    <Right></Right>
                 
                </View>
              )}
            </Card>
          </Content>
       
       
       
        </View>
      
      
      
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    backgroundColor: "#1C97F7",
  },
  alertText: {
    fontSize: 12,
    color: "#ffffff",
  },
  conCard: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  
  postCard: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    elevation: 4,
    marginBottom: 5,
  },
});
