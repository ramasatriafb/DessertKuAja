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
// const USER_ID = 20;

// const USER_ID = async () => {
//   let userId = '';
  // try {
  //   userId = await AsyncStorage.getItem('user_id');
  // } catch (error) {
  //   // Error retrieving data
  //   console.log(error.message);
  // }
  // return userId;
// }

export default class ProfilShinta extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hit: [],
      user_id:'',
      token: ''
     
    };
  }

  
  
   async getItem(key) {
    try {
//         return await AsyncStorage.getItem(key);
         let ob =  await AsyncStorage.getItem(key);
        return ob;
    } catch (error) {
        console.log("Error saving data" + error);
        return null
    }
}



      


componentDidMount(){
  this.getItem('user_id').then((user_id) => {
    // this.setState({
    //     : user_id
    // });   
    this.getItem('token').then((token) => {      
      console.log(user_id);
      console.log(token);
      fetch(API+user_id, {
    method: 'GET',
    headers :{ 
    'Client-Service'  : 'frontend-client',
    'Auth-Key'  : 'dessertkuajaapi',
    'Content-Type': 'applications/json',
    'User-ID': user_id,
    'Authorization': token
  },
})
    .then((response) => response.json()).then(
      // data => this.setState({ hits: data.hits })
      (responseJson) => {
        this.setState({ hit: responseJson[0] })
        
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
      const { hit } = this.state;
      console.log(hit);
    return (
      <Container>
       
       <Content padder>
       <Thumbnail large style={{ alignSelf: "center", height: 120, width: 120, }} source={Images.userIcon}/>
       {/* {hits.map(hit => */}
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
          {/* )} */}
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
