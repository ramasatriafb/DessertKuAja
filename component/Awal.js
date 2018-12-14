import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Body, Title,Button, Thumbnail } from 'native-base';
import Beranda from './beranda/Beranda'
import Profil from './beranda/Profil'

import Images from 'asset/Images';
import {StyleSheet} from 'react-native';
export default class Awal extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <Container>
         <Header hasTabs>
          <Left style={{ flex: 1 }}>
            <Thumbnail square style={{ alignSelf: "center", height: 45,
      width: 45, }} source={Images.headerIcon1}/>
          </Left>
          <Body style={{ flex: 2 }}>
          <Thumbnail square style={{ alignSelf: "center", height: 35,
      width: 125, }} source={Images.headerIcon}/>
          </Body>
          <Button
              hasText
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Logout</Text>
          </Button>
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="home" />
              </TabHeading>
            }
          >
            <Beranda />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="person" />
              </TabHeading>
            }
          >
            <Profil />
          </Tab>
         
        </Tabs>
          
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