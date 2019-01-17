import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanPumpkin extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                2 bungkus krim keju, dilunakkan
1/2 cangkir gula putih
1/2 sendok teh ekstrak vanili
2 telur
1 bungkus remah graham cracker
1/2 cangkir labu haluskan
1/2 sendok teh bubuk kayu manis
1 jumput cengkeh
1 jumput pala
1/2 cangkir topping kocok beku, dicairkan   
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanPumpkin);