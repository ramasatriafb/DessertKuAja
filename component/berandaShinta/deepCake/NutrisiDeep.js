import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class NutrisiDeep extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu Pembuatan :
                3 jam 40 menit
                Jumlah Sajian $ Kalori :
                Jumlah Sajian : 12
                Kalori : 594 kcal
                Lemak : 31.6 g
                Karbohidrat : 71.9 g
                Protein : 6.5 g
                Kolesterol : 133 mg
                Sodium : 532 mg   
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiDeep);