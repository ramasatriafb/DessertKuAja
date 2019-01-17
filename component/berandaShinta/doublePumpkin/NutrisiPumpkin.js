import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiPumpkin extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu Pembuatan :
                4 jam 10 menit
                Jumlah Sajian & Kalori :
                Jumlah Sajian : 8
                Kalori : 426 kcal
                Lemak : 29 g
                Karbohidrat : 35.5 g
                Protein : 7.2 g
                Kolesterol : 108 mg
                Sodium : 354 mg                                           
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiPumpkin);