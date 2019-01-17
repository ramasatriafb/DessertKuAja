import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,  ScrollableTab, Left, Button, Body, Thumbnail, Right} from 'native-base';
import NutrisiCarrot from './carrotCake/NutrisiCarrot'
import BahanCarrot from './carrotCake/BahanCarrot'
import TataCaraCarrot from './carrotCake/TataCaraCarrot'

import Images from 'asset/Images';
import { Grid, Row } from "react-native-easy-grid";
export default class CarrotCake extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left style={{flex:1}}>
                <Button onPress={() => this.props.navigation.goBack()} transparent textStyle={{color: '#87838B'}}>
                  <Icon name='arrow-back' />
                </Button>
          </Left>
          <Body style={{ flex: 2 }}>
          <Thumbnail square style={{ alignSelf: "center", height: 35,
      width: 125, }} source={Images.headerIcon}/>
          </Body>
          <Right/>
        </Header>
        <Grid>
        <Row size={35} >
        <Thumbnail square style={{ flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover' }} source={Images.carrotCake} />
        </Row>
        <Row size={10} style={{ backgroundColor: "#F8FAFF" }} >
        <Text style={{ color: '#0F2667', fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
        marginTop:10,
        paddingLeft: 20}} >Carrot Cake III</Text>
        </Row>
        <Row size={55}> 
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="NUTRISI">
            <NutrisiCarrot />
          </Tab>
          <Tab heading="BAHAN">
            <BahanCarrot/>
          </Tab>
          <Tab heading="TATA CARA">
            <TataCaraCarrot />
          </Tab>
        </Tabs>
        </Row>
        </Grid>  
      </Container>
    );
  }
}