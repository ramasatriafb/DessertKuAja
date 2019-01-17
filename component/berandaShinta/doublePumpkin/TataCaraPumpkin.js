import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraPumpkin extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : 30 menit
                Waktu masak : 40 menit
                Siap Saji dalam : 4 jam 10 menit
                1.Panaskan oven sampai 165 derajat C.
                2. Dalam mangkuk besar, campurkan krim keju, gula dan vanila. Kocok sampai halus. Campurkan satu butir telur satu per satu. Ambil 1 cangkir adonan dan oleskan ke dasar kulit; sisihkan.
                3. Tambahkan labu, kayu manis, cengkeh dan pala ke adonan yang tersisa dan aduk perlahan sampai tercampur rata. Ratakan adonan di dalam kulit.
                4. Panggang di oven yang sudah dipanaskan selama 35 sampai 40 menit, atau sampai bagian tengah matang. Biarkan dingin, lalu dinginkan selama 3 jam atau semalam. Tutup dengan whipped topping sebelum disajikan.                                        </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraPumpkin);