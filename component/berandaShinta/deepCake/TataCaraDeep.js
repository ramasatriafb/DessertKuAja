import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraDeep extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : 40 menit
                Waktu masak : 30 menit
                Siap Saji dalam : 3 jam 40 menit
                1. Panaskan oven sampai 175 derajat C. Olesi dan beri tepung pada dua panci panggang 9 inci.
                2. Kocok 1/2 cangkir mentega dan 1 1/4 cangkir gula dengan mixer listrik dalam mangkuk besar sampai rata dan lembut. Campurkan hingga berwarna terang. Tambahkan telur, satu per satu, biarkan setiap telur berbaur dengan campuran mentega sebelum menambahkan berikutnya. Masukkan 1 sendok teh ekstrak vanila dan 1/4 sendok teh kulit lemon, aduk rata.
                3. Campurkan 2 cangkir tepung, baking powder, dan 1 sendok teh garam dalam mangkuk. Tuangkan campuran tepung ke dalam adonan secara bergantian dengan 1 cangkir eggnog, campur hingga menyatu. Bagi adonan merata di antara panci yang sudah disiapkan.
                4. Panggang dalam oven yang sudah dipanaskan sampai kue muncul kembali saat disentuh dengan ujung jari atau tusuk gigi yang terpasang di pusat keluar bersih, 30 sampai 35 menit (uji kedua lapisan kue). Dinginkan dalam panci selama 10 menit sebelum membalikkan pada rak kawat hingga dingin sepenuhnya.
                5. Untuk membuat frosting, campurkan 1/4 cup tepung dan 1/4 sendok teh garam dalam panci. Perlahan kocok dalam 1 1/2 cangkir eggnog, kocok sampai halus.
                6. Didihkan dengan api sedang, aduk sering sering. Bila campuran mendidih, masak selama 2 menit, teruskan kocok sampai kental. Angkat dari api dan biarkan dingin.
                7. Kocok 1 cangkir mentega dan 1 1/2 gelas gula dalam mangkuk sampai rata dan lembut. Campur campuran eggnog yang didinginkan, 1 1/2 sendok teh ekstrak vanila, dan 1/8 sendok teh kulit lemon parut. Kocok dengan kecepatan tinggi sampai campuran benar-benar tergabung dan frosting mengembang.   </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraDeep);