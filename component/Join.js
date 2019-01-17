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
import { StyleSheet } from 'react-native';
import Images from 'asset/Images';

export default class Join extends Component {
    static navigationOptions = {
      header:null
    }
    constructor(props) {
        super(props);
        this.state = {
          nama: "",
          username: "",
          password: "",
          jenis_kelamin: undefined,
          tanggal_lahir: "",
          diabet: undefined,
          asam_urat: "",
          gula_darah: "",
          ldl: "",
          hdl: "",
          trigliserida: ""

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
    onSignUpPressed(){
      console.log(this.state);
    }

    UserLoginFunction = () =>{
 
      const { UserName }  = this.state.username ;
      const { UserPassword }  = this.state.password ;
      const { Nama }  = this.state.nama ;
      const { jKelamin }  = this.state.jenis_kelamin ;
      const { tglLahir }  = this.state.tanggal_lahir ;
      const { Diabet }  = this.state.diabet ;
      const { AsamUrat }  = this.state.asam_urat ;
      const { GulaDarah }  = this.state.gula_darah ;
      const { HDL }  = this.state.hdl ;
      const { LDL }  = this.state.ldl ;
      const { Trigliserida }  = this.state.trigliserida ;
      
      
     fetch('https://ramasatriafb.000webhostapp.com/index.php/auth/signup', {
       method: 'POST',
       headers: {
        'Client-Service': 'frontend-client',
        'Auth-Key': 'dessertkuajaapi',
        'Content-Type': 'application/json',
         
         
       },
       body: JSON.stringify({

         username: UserName,
         password: UserPassword,
         nama: Nama,
         jenis_kelamin: jKelamin,
         tgl_lahir: tglLahir,
         diabet: Diabet,
         asam_urat: AsamUrat,
         gula_darah: GulaDarah,
         hdl: HDL,
         ldl: LDL,
         trigliserida: Trigliserida
      
       })
      //  console.log(body);
      
     }).then((response) => response.json())
           .then((responseJson) => {
            console.warn(xhr.responseJson)
             // If server response message same as Data Matched
            // if(responseJson === 'Data Matched')
            //  {
      
            //      //Then open Profile activity and send user email to profile activity.
            //      this.props.navigation.navigate('Second', { Email: UserEmail });
      
            //  }
            //  else{
      
            //    Alert.alert(responseJson);
            //  }
      
           }).catch((error) => {
             console.error(error);console.warn(xhr.response);
           });
      
       }


    render() {

    return (
      <Container>
       <Header style={styles.header}>
                <Left style={{flex:1}}>
                <Button onPress={() => this.props.navigation.goBack()} transparent textStyle={{color: '#87838B'}}>
                  <Icon name='arrow-back' />
                </Button>
                </Left>
                <Body style={{flex:2}}>
                    <Title>DessertKuAja</Title>
                </Body>
        </Header>
        
        <Content padder>
        <Thumbnail large style={{ alignSelf: "center", height: 120, width: 120, }} source={Images.userIcon}/>
    
        <Card style = {{marginBottom: 15}}>
          <CardItem header bordered>
            <Text> Data Pribadi Anda </Text>
          </CardItem>
          <CardItem bordered>
             <Body>
                <Item floatingLabel>
                  <Label>Nama Kamu </Label>
                  <Input onChangeText={(val) => this.setState({nama:val})}/>
                </Item>
                <Item floatingLabel>
                  <Label>Username Kamu</Label>
                  <Input onChangeText={(val) => this.setState({username:val})}/>
                </Item>
                {/* <Text>{this.state.nama}</Text> */}
                {/* <Item floatingLabel>
                  <Label>Email Kamu</Label>
                  <Input onChangeText={(val) => this.setState({email:val})}/>
                </Item> */}
                <Item floatingLabel>
                  <Label>Password Kamu</Label>
                  <Input secureTextEntry />
                  <Input onChangeText={(val) => this.setState({password:val})}/>
                </Item>
                <Item picker>
                <Label>Jenis Kelamin Anda </Label>
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
                    selectedValue={this.state.diabet}
                    onValueChange={this.onValueChange3.bind(this)}
                  >
                    <Picker.Item label="Ya" value="Ya" />
                    <Picker.Item label="Tidak" value="Tidak" />
                  </Picker>
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

          <Button onPress ={this.UserLoginFunction.bind(this)} style = {{marginTop: 20, marginLeft:20,marginRight:20}} full rounded info>
            <Text>Join</Text>
          </Button>
          <Button onPress={() => this.props.navigation.goBack()} style = {{marginTop: 20, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded danger>
            <Text>Batal</Text>
          </Button>

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