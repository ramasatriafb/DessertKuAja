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
import {StyleSheet, AsyncStorage} from 'react-native';
import Images from 'asset/Images';

const API = 'https://desserts.darajati.my.id/index.php/user/detail/';

export default class ProfilShinta extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

   async getItem(key) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.log("Error saving data" + error);
        return null
    }
}
  componentDidMount() {
    this.getItem('user_id').then((user_id)=> {
      const USER_ID = user_id;
    }).catch((error)=> {
      console.log(error);
    });
    this.getItem('token').then((token)=> {
      const TOKEN = token;
    }).catch((error)=> {
      console.log(error);
    });
    console.log(USER_ID);
    console.log(TOKEN);
    fetch(API + USER_ID, {
      method: 'POST',
       headers :{ 
       'Client-Service'  : 'frontend-client',
       'Auth-Key'  : 'dessertkuajaapi',
       'Content-Type': 'applications/json',
       'User-ID' : USER_ID,
       'Authorization': TOKEN, 
     }
    })
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }


    render() {
      const { hits } = this.state;
    return (
      <Container>
       
       <Content padder>
       <Thumbnail large style={{ alignSelf: "center", height: 120, width: 120, }} source={Images.userIcon}/>
       {hits.map(hit =>
       <Card style = {{marginBottom: 15}}>
         <CardItem header bordered>
           <Text> Data Pribadi Anda </Text>
         </CardItem>
         <CardItem bordered>
            <Body>
               <Item >
               <Label>Nama </Label>
                 <Text>{hit.nama}</Text>
               </Item>
               <Item >
               <Label>Username </Label>
                 <Text>{hit.username}</Text>
               </Item>
               <Item >
               <Label>Jenis Kelamin</Label>
                 <Text>{hit.jenis_kelamin}</Text>
               </Item>
               <Item >
               <Label>Tanggal Lahir </Label>
                 <Text>{hit.tgl_lahir}</Text>
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
                <Text>{hit.diabet}</Text>
               </Item>
               
               <Item >
               <Label>Asam Urat</Label>
                 <Text>{hit.asam_urat}</Text>
               </Item>
               <Item >
               <Label>Gula Darah</Label>
                 <Text>{hit.gula_darah}</Text>
               </Item>
               <Item >
               <Label>HDL</Label>
                 <Text>{hit.hdl}</Text>
               </Item>
               <Item >
               <Label>LDL</Label>
                 <Text>{hit.ldl}</Text>
               </Item>
               <Item >
               <Label>Trigliserida</Label>
                 <Text>{hit.trigliserida}</Text>
               </Item>
             </Body>
         </CardItem>

         {/* <Button style = {{marginTop: 20, marginLeft:20,marginRight:20}} full rounded warning>
           <Text>Simpan</Text>
         </Button>
         <Button onPress={() => this.props.navigation.goBack()} style = {{marginTop: 20, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded danger>
           <Text>Batal</Text>
         </Button> */}
         
         </Card>
          )}
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
