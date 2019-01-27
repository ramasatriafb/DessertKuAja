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
 import { Alert, AsyncStorage } from 'react-native';

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
async saveItem(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
    console.log('Berhasil disimpan');
  } catch (error) {
    console.error(error.message);
  }
}

  

     UserLoginFunction = () =>{
 
      const { username }  = this.state ;
      const { password }  = this.state ;
      
      
     fetch('https://desserts.darajati.my.id/index.php/auth/login', {
       method: 'POST',
       headers :{ 
       'Client-Service'  : 'frontend-client',
       'Auth-Key'  : 'dessertkuajaapi',
       'Content-Type': 'applications/json',
     },
       body: JSON.stringify({
      
         username: username,
      
         password: password
      
       })
      
     }).then((response) => response.json())
           .then((responseJson) => {
          //  console.log(responseJson);
             // If server response message same as Data Matched
            if(responseJson.message === 'Successfully login.')
             {
               this.saveItem('token', responseJson.token)
               this.saveItem('user_id', responseJson.user_id)
              if(responseJson.gejala === 'Kolesterol' || responseJson.gejala === 'Hipertensi' )
              { 
              Alert.alert(
                        'Login Sukses',
                        'Selamat Datang ',
                        [
                          // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                          {text: 'OK', onPress: () => this.props.navigation.navigate('AwalShinta')},
                        ]
                      );
              }else  if(responseJson.gejala === 'Asam Urat' || responseJson.gejala === 'Hipertensi' )
              { 
              Alert.alert(
                        'Login Sukses',
                        'Selamat Datang ',
                        [
                          // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                          {text: 'OK', onPress: () => this.props.navigation.navigate('AwalGuruh')},
                        ]
                      );
              }
     
             }
             else{
     
              Alert.alert(
                        'Error',
                        'Username & Password Salah',
                        [
                          // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                          {text: 'OK', style: 'cancel'},
                        ]
                      );
             }
     
           }).catch((error) => {
             console.error(error);
           });
      
       }

    //  button() {
    //   if (this.state.username != 'shinta' && this.state.password = 'shinta'){
    //     setTimeout(() => {
    //       Alert.alert(
    //         'Login Sukses',
    //         'Selamat Datang ',
    //         [
    //           // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
    //           {text: 'OK', onPress: () => this.props.navigation.navigate('AwalShinta')},
    //         ]
    //       );
    //   },5000)
        
    //   }else if(this.state.username != 'guruh' && this.state.password != 'guruh'){
    //     setTimeout(() => {
    //       Alert.alert(
    //         'Login Sukses',
    //         'Selamat Datang ',
    //         [
    //           // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
    //           {text: 'OK', onPress: () => this.props.navigation.navigate('AwalGuruh')},
    //         ]
    //       );
    //   },5000)
    //   }else{
    //     etTimeout(() => {
    //       Alert.alert(
    //         'Error',
    //         'Username & Password Salah',
    //         [
    //           // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
    //           {text: 'OK', style: 'cancel'},
    //         ]
    //       );
    //     },5000)
    //   }
      
    //  }

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
             
                  <Button onPress ={this.UserLoginFunction}  style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info>
                
                  {/* <Button onPress ={() => this.button()}  style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info> */}
                {/* <Button onPress={() => this.props.navigation.navigate('AwalGuruh')}   style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info> */}
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