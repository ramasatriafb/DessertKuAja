import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiCinnamon extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu Pembuatan : 1 jam 50 menit
                Jumlah Sajian & Kalori :
                Jumlah Sajian : 8
                Kalori : 279 kcal
                Lemak : 17.5 g
                Karbohidrat : 28.4 g
                Protein : 3.5 g
                Kolesterol : 104 mg
                Sodium : 48 mg                                          
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiCinnamon);