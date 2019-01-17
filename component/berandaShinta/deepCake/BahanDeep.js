import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class BahanDeep extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                1 1/4 gelas gula putih
                3 butir telur
                1 sdt ekstrak vanilla
                1/4 sdt kulit lemon serut
                2 gelas tepung
                2 sdt baking powder
                1 sdt garam
                1 gelas eggnog

                Eggnog :
                2 btr telur
                2 sdm gula pasir
                1 1/2 gelas susu
                1 gelas whipping cream
                vanilla secukupnya

                Frosting :
                1/4 gelas tepung
                1/4 sdt garam
                1 1/2 gelas eggnog
                1 gelas mentega
                1 1/2 gelas gula pasir
                1 1/2 sdt ekstrak vanilla
                1/8 sdt kulit lemon yang diserut halus
                1/2 gelas kemiri tumbuk yang sudah ditumis 
 </Text>
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BahanDeep);