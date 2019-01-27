import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanOur extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                1 3/4 gelas remah cracker
                1/3 gelas mentega cair
                1 1/4 gelas gula, dipisah
                3 bungkus cream cheese, dihaluskan
                1 gelas sour cream
                2 sdt vanilla
                3 butir telur
                1 kaleng cherry pie
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanOur);