import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanWalnut extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                540 g coklat chip putih
 1 kaleng susu kental manis
 55 g mentega
 5 ml sirup rasa maple 
 180 g kacang walnut yang sudah dipecah 
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanWalnut);