import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Content, 
  Picker, 
  Form , 
  Button, 
  DatePicker, 
  Item, 
  Thumbnail, 
  Label, 
  Input, 
  Icon, 
  Text, 
  Left,
  Right,
  Body,
  Title, 
  Card,
  CardItem} from 'native-base';
import { StyleSheet, Alert ,AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Images from 'asset/Images';

const API = 'https://desserts.darajati.my.id/index.php/user/update/';

export default class Edit extends Component {
    static navigationOptions = {
      header:null
    }
    constructor(props) {
        super(props);
        this.state = {
          
          jenis_kelamin: "",
          tanggal_lahir: "",
          diabet: "",
          asam_urat: "",
          gula_darah: "",
          ldl: "",
          hdl: "",
          trigliserida: "",

      user_id:'',
      token: ''

        };
      
    } 
    onValueChange2(value: string) {
        this.setState({
          jenis_kelamin: value
        });
    }
    onValueChange3(value: string) {
        this.setState({
          diabet: value
        });
    } 
    
    async getItem(key) {
        try {
             let ob =  await AsyncStorage.getItem(key);
            return ob;
        } catch (error) {
            console.log("Error saving data" + error);
            return null
        }
    }

    

    UserEditFunction = () =>{
 
      
      const { jenis_kelamin }  = this.state ;
      console.log(jenis_kelamin);
      const { tanggal_lahir }  = this.state
      const { diabet }  = this.state ;
      console.log(diabet);
      const { asam_urat }  = this.state ;
      const { gula_darah }  = this.state ;
      const { hdl }  = this.state;
      const { ldl }  = this.state;
      const { trigliserida }  = this.state;
      console.log(this.state);
      
      this.getItem('user_id').then((user_id) => {
        this.getItem('token').then((token) => {      
          console.log(user_id);
          console.log(token);
          fetch(API+user_id, {
        method: 'PUT',
        headers :{ 
        'Client-Service'  : 'frontend-client',
        'Auth-Key'  : 'dessertkuajaapi',
        'Content-Type': 'applications/json',
        'User-ID': user_id,
        'Authorization': token
      },
      body: JSON.stringify({
       
        
        jenis_kelamin	: jenis_kelamin,
        tgl_lahir	: tanggal_lahir,
        diabet	: diabet,
        asam_urat	: asam_urat,
        gula_darah : gula_darah,
        hdl	: hdl,
        ldl	: ldl,
        trigliserida	: trigliserida
     
      })
    })
        .then((response) => response.json()).then(
          (responseJson) => {
            if(responseJson.message === 'Data has been updated.')
            {
              console.log('good');
              console.log(responseJson;
              console.log(responseJson.message;)
              
    
            }
            
          })
        .catch((error) =>{
          console.error(error);
        });
    
        }) 
    }).catch(error => {
        console.log(error);
    });
      
 
  }

    render() {

    return (
      <Container>
       {/* <Header style={styles.header}>
                <Left style={{flex:1}}>
                <Button onPress={() => this.props.navigation.goBack()} transparent textStyle={{color: '#87838B'}}>
                  <Icon name='arrow-back' />
                </Button>
                </Left>
                <Body style={{flex:2}}>
                    <Title>DessertKuAja</Title>
                </Body>
        </Header> */}
        
        <Content padder>
        <Thumbnail large style={{ alignSelf: "center", height: 120, width: 120, }} source={Images.userIcon}/>
    
        <Card style = {{marginBottom: 15}}>
          <CardItem header bordered>
            <Text> Data Pribadi Anda </Text>
          </CardItem>
          <CardItem bordered>
             <Body>
                {/* <Item floatingLabel>
                  <Label>Nama Kamu </Label>
                  <Input onChangeText={(val) => this.setState({nama:val})}/>
                </Item>
                <Item floatingLabel>
                  <Label>Username Kamu</Label>
                  <Input onChangeText={(val) => this.setState({usernamee:val})}/>
                </Item> */}
                {/* <Text>{this.state.nama}</Text> */}
                {/* <Item floatingLabel>
                  <Label>Email Kamu</Label>
                  <Input onChangeText={(val) => this.setState({email:val})}/>
                </Item> */}
                {/* <Item floatingLabel>
                  <Label>Password Kamu</Label>
                  <Input secureTextEntry onChangeText={(val) => this.setState({passwordd:val})}/>
                </Item> */}
                <Item Picker>
                {/* <Item floatingLabel></Item> */}
                <Label>Jenis Kelamin Anda </Label>
                {/* <Input onChangeText={(val) => this.setState({jenis_kelamin:val})}/> */}
               
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.jenis_kelamin}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Pria" value="Pria" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                  </Picker>
                </Item>
                <Item floatingLabel>
                  <Label>Tanggal Lahir Kamu</Label>
                  <Input onChangeText={(val) => this.setState({tanggal_lahir:val})}/>
                </Item>
              </Body>
            </CardItem>

            <CardItem header bordered>
              <Text>Data Tentang Kesehatan Anda</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Item picker>
                  <Label>Apakah Anda Diabet ? </Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    //selectedValue={this.state.diabet}
                    onValueChange={this.onValueChange3.bind(this)}
                  >
                    <Picker.Item label="Ya" value="Ya" />
                    <Picker.Item label="Tidak" value="Tidak" />
                  </Picker>
                  
                   {/* <Input onChangeText={(val) => this.setState({diabet:val})}/> */}
                </Item>
                <Item floatingLabel>
                  <Label>Asam Urat Kamu (mg/dL)</Label>
                  <Input onChangeText={(val) => this.setState({asam_urat:val})}/>
                </Item>
                <Item floatingLabel>
                  <Label>Gula Darah Kamu (mg/dL)</Label>
                  <Input onChangeText={(val) => this.setState({gula_darah:val})}/>
                </Item>
                <Item floatingLabel>
                  <Label>HDL Kamu (mg/dL)</Label>
                  <Input onChangeText={(val) => this.setState({hdl:val})}/>
                </Item>
                <Item floatingLabel>
                  <Label>LDL Kamu (mg/dL)</Label>
                  <Input onChangeText={(val) => this.setState({ldl:val})}/>
                </Item>
                <Item floatingLabel>
                  <Label>Trigliserida Kamu (mg/dL)</Label>
                  <Input onChangeText={(val) => this.setState({trigliserida:val})}/>
                </Item>
              </Body>
          </CardItem>

          {/* <Button onPress ={() => this.button()} style = {{marginTop: 20, marginLeft:20,marginRight:20}} full rounded info> */}
          <Button onPress ={this.UserEditFunction}  style = {{marginTop: 40, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded info>
                
            <Text>Edit</Text>
          </Button>
           {/* <Button style = {{marginTop: 20, marginLeft:20,marginRight:20}} full rounded info>
            <Text>Join</Text>
          </Button> */}
         

          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingRight: 15,
        paddingLeft: 15
    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    }
});