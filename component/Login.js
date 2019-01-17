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
 import { Alert } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Images from 'asset/Images';
export default class Login extends Component {
  static navigationOptions = {
    header:null
}
  constructor(props) {
  
    super(props)

    this.state = {

      username: '',
      password: ''

    }

  }

  UserLoginFunction = () =>{
 
    const { username }  = this.state ;
    const { password }  = this.state ;
    
    
    
    
     }

     button() {
      if (this.state.username != 'shinta' && this.state.password != 'shinta'){
        setTimeout(() => {
        Alert.alert(
          'Error',
          'Username & Password Salah',
          [
            // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'OK', style: 'cancel'},
          ]
        );
      },5000)
      }else{
        setTimeout(() => {
          Alert.alert(
            'Login Sukses',
            'Selamat Datang ',
            [
              // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.props.navigation.navigate('AwalShinta')},
            ]
          );
      },5000)
      }
      
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
                    <Input placeholder="Username" onChangeText={(val) => this.setState({username:val})}/>
                  </Item> 
                  <Item>
                    <Icon active name="key" />
                    <Input placeholder="Password" secureTextEntry onChangeText={(val) => this.setState({password:val})}/>
                  </Item>
                
                  <Button onPress ={() => this.button()}  style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info>
                {/* <Button onPress={() => this.props.navigation.navigate('AwalShinta')}   style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info> */}
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