import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Content, 
  Form,
  Item, 
  Input,  
  Thumbnail, 
  Text, 
  Label, 
  Button,
  Card,
  CardItem,
  Body,
  Icon
 } from 'native-base';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Images from 'asset/Images';
export default class Login extends Component {
  static navigationOptions = {
    header:null
}
  render() {

    return (
      <Container>
        <Content padder>
        <Thumbnail large style={{ alignSelf: "center", height: 150,
      width: 150, }} source={Images.userIcon}/>

      <Card style = {{marginBottom: 15}}>
        <CardItem header bordered>
        <Text> Login Ke Aplikasi Anda </Text>
        </CardItem>
        <CardItem bordered>
              <Body>
                  <Item>
                    <Icon active name="person" />
                    <Input placeholder="Email" />
                  </Item> 
                  <Item>
                    <Icon active name="key" />
                    <Input placeholder="Password" secureTextEntry />
                  </Item>
                
                <Button onPress={() => this.props.navigation.navigate('Awal')}   style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info>
                  <Text>Login</Text>
                </Button>
               
                    <Label>Belum Punya Akun ?</Label>
                    
                <Button onPress={() => this.props.navigation.navigate('Join')}  style = {{marginTop: 20, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded success>
                  <Text>Join</Text>
                </Button>
                
              </Body>
          </CardItem>
      </Card>
          
        </Content>
      </Container>
    );
  }
}