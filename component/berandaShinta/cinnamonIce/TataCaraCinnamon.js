import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraCinnamon extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : 5 menit
Waktu masak : 15 menit
Siap Saji dalam : 1 jam 50 menit

1. Dalam panci di atas api sedang, aduk gula dan krim half-and-half. Saat campuran mulai mendidih, angkat dari api, dan kocok setengah campuran ke dalam telur. Kocok cepat agar telur tidak mengacak. Tuangkan kembali campuran telur ke dalam panci, dan aduk dengan krim tebal. Lanjutkan memasak dengan api sedang, aduk terus, sampai adonan cukup tebal untuk melapisi bagian belakang sendok logam. Angkat dari api, dan kocok vanilla dan kayu manis. Sisihkan dan dinginkan.
2. Tuangkan campuran yang sudah dingin ke pembuat es krim, dan bekukan sesuai petunjuk pabriknya.      </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraCinnamon);