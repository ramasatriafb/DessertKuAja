import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiPecan extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktuu : 
                1 jam 30 menit

                Jumlah Sajian & Kalori :
                Jumlah Sajian : 24
                Kalori : 185 kcal
                Lemak : 10.4 g
                Karbohidrat : 22.1 g
                Protein : 1.7 g
                Kolesterol : 28 mg
                Sodium : 82 mg         
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiPecan);