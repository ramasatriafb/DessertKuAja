import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanBrownies extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                1/2 gelas mentega
                1 gelas gula putih
                2 butir telur
                1 sendok the ekstrak vanilla
                1/3 gelas coklat bubuk
                1/2 gelas tepung
                1/4 sdt garam
                1/4 sendok the baking powder

                Frosting:
                3 sdm mentega halus
                3 sdm coklat bubuk
                1 sdm madu
                1 sdt ekstrak vanilla
                1 gelas gula bubuk 
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanBrownies);