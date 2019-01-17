import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiWalnut extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu Pembuatan : 
2 jam
Jumlah Sajian & Kalori :
Jumlah Sajian : 18
Kalori : 575 kcal
Lemak : 34.8 g
Karbohidrat : 63.7 g
Protein : 5.1 g
Kolesterol : 69 mg
Sodium : 347 mg                                           
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiWalnut);