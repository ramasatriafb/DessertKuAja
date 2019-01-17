import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanCinnamon extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                1 gelas gula putih
1.5 gelas krim
2 butir telur, dikocok
1 gelas heavy cream
1 sdt ekstrak vanilla
2 sendok the kayumanis     
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanCinnamon);