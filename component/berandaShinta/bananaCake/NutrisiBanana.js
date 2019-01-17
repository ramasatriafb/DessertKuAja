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
                  1 jam 15 menit

                  Jumlah Sajian : 18
                  Kalori : 328 kcal
                  Lemak : 21.5 g
                  Karbohidrat : 30.2 g
                  Protein : 5.4 g
                  Kolesterol : 21 mg
                  Sodium : 78 mg    
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(NutrisiWalnut);