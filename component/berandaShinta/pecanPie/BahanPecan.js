import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanPecan extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                55 g mentega
65 g gula halus
45 ml sirup jagung ringan
80 g kemiri cincang halus
250 g tepung
5 g baking powder
220 g gula merah
170 g mentega halus
1 butir telur
5 ml ekstrak vanilla                                                            
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanPecan);