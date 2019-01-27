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
import {StyleSheet} from 'react-native';
import Images from 'asset/Images';
export default class ProfilGuruh extends Component {
    
    render() {

    return (
      <Container>
       
       <Content padder>
       <Thumbnail large style={{ alignSelf: "center", height: 120, width: 120, }} source={Images.userIcon}/>
   
       <Card style = {{marginBottom: 15}}>
         <CardItem header bordered>
           <Text> Data Pribadi Anda </Text>
         </CardItem>
         <CardItem bordered>
            <Body>
               <Item >
               <Label>Nama </Label>
                 <Text>Guruh</Text>
               </Item>
               <Item >
               <Label>Username </Label>
                 <Text>guruh</Text>
               </Item>
               <Item >
               <Label>Jenis Kelamin</Label>
                 <Text>Pria</Text>
               </Item>
               <Item >
               <Label>Tanggal Lahir </Label>
                 <Text>01/01/1999</Text>
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
                <Text>Ya</Text>
               </Item>
               
               <Item >
               <Label>Asam Urat</Label>
                 <Text>9.5</Text>
               </Item>
               <Item >
               <Label>Gula Darah</Label>
                 <Text>241</Text>
               </Item>
               <Item >
               <Label>HDL</Label>
                 <Text>59</Text>
               </Item>
               <Item >
               <Label>LDL</Label>
                 <Text>135</Text>
               </Item>
               <Item >
               <Label>Trigliserida</Label>
                 <Text>223</Text>
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