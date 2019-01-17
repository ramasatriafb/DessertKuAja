import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraCarrot extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : 30 menit
Waktu masak : 1 menit
Siap Saji dalam : 2 jam
1. Panaskan oven sampai 175 derajat C . Olesi dan beri tepung pada wajan berukuran 9x13 inci.
2. Dalam mangkuk besar, kocok bersama telur, minyak, gula putih dan 2 sendok teh vanila. Campur tepung terigu, baking soda, baking powder, garam dan kayu manis. Aduk wortel. Lipat kemiri. Tuangkan ke dalam panci yang sudah disiapkan.
3. Panggang dalam oven yang sudah dipanaskan selama 40 sampai 50 menit, Biarkan dingin di panci selama 10 menit, lalu putar ke rak kawat dan dinginkan. 
Frosting: 
Dalam mangkuk sedang, campurkan mentega, keju krim, gula confectioner dan 1 sendok teh vanilla. Kocok sampai adonan halus dan lembut. Aduk pecan cincang. Frost kue yang sudah didinginkan.                                        </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraCarrot);