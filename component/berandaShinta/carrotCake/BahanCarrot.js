import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanCarrot extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                4 butir telur
1 1/4 cangkir minyak sayur
2 cangkir gula putih
2 sendok teh ekstrak vanila
2 cangkir tepung
2 sendok teh baking soda
2 sendok teh baking powder
1/2 sendok teh garam
2 sendok teh bubuk kayu manis
3 cangkir wortel parut
1 cangkir pecan cincang
1/2 cangkir mentega, dilunakkan
8 ons krim keju, dilunakkan
4 cangkir gula halus
1 sendok teh ekstrak vanili
1 cangkir kemiri cincang                                        
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanCarrot);