import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiApple extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu Pembuatan: 
                  ? Jam ? Menit
                  Jumlah Sajian & Kalori:
                  Jumlah Sajian : 24
                  Kalori : 201 kcal
                  Lemak : 9.7 g
                  Karbohidrat : 27.7 g
                  Protein : 1.7 g
                  Kolesterol : 16 mg
                  Sodium : 107 mg      
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiApple);