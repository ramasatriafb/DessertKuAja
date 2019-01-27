import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiBrownies extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu Pembuatan :
                  1 jam
                  Jumlah Kalori & Sajian :
                  Jumlah Sajian : 16
                  Kalori : 183 kcal
                  Lemak : 9 g
                  Karbohidrat : 25.7 g
                  Protein : 1.8 g
                  Kolesterol : 44 mg
                  Sodium : 110 mg     
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiBrownies);