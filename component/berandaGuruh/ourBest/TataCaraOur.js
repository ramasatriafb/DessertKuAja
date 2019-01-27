import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraOur extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : 15 menit
Waktu masak : - menit
Siap Saji dalam : 6 jam 25 menit
1. Panaskan oven hingga 195 derajat celcius.
2. Campurkan remah cracker, mentega dan 1/4 cangkir gula; tekan ke bawah cetakan kue bolu berukuran 9 inci.
3. Kocok krim keju dan sisa gula dalam mangkuk besar dengan mixer sampai rata. Tambahkan sour cream dan vanili; campur dengan baik. Tambahkan telur, satu persatu, kocok dengan kecepatan rendah setelah penambahan masing-masing sampai rata. Tuangkan kulit.
4. Panggang 1 jam sampai 1 jam 10 menit. atau sampai bagian tengah mulai matang. Cungkil dengan pisau di sekitar tepi wajan untuk melonggarkan kue; dinginkan sebelum mengambil pinggiran roti. Dinginkan cheesecake selama  4 jam.
5. Beri topping filling sebelum disajikan.                                        </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraOur);