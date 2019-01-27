import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanApple extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                2 telur
1 cangkir minyak sayur
2 cangkir gula putih
2 sendok teh bubuk kayu manis
1/2 sendok teh garam
1 sendok teh ekstrak vanili
2 cangkir all purpose tepung
1 sendok teh baking soda
4 cangkir apel - kupas, buang biji dan potong dadu    
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanApple);