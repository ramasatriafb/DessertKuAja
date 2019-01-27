import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraApple extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : - menit
Waktu masak : - menit
Siap Saji dalam : - jam - menit
1. Panaskan oven sampai 175 derajat C. Olesi dan tepung satu loyang kue berukuran 9x13 inci.
2. Dalam mangkuk pencampur; Kocok minyak dan telur dengan mixer listrik sampai lembut. Tambahkan gula dan vanili dan kocok dengan baik.
3. Campurkan garam, tepung, baking soda, dan bubuk kayu manis bersama dalam mangkuk. Perlahan tambahkan campuran ini ke dalam campuran telur dan aduk sampai rata. Adonan akan sangat kental. tumbuk apel dengan tangan menggunakan sendok kayu. Sebarkan adonan ke dalam panci yang disiapkan.
4. Panggang pada suhu 175 derajat C selama 45 menit. Biarkan kue dingin di rak kawat. Setelah kue dingin disajikan dengan gula halus atau dengan Cream Cheese Frosting.                    </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraApple);