import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraPecan extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Waktu masak : 10 menit
Siap Saji dalam : 1 jam 30 menit

1. Cairkan mentega ke dalam panci, dan aduk gula pasir dan sirup jagung sampai gula larut. Didihkan dengan api sedang, aduk rata, dan aduk kemiri sampai tercampur rata. Dinginkan campuran selama 30 menit sampai dingin.
2. Panaskan oven sampai 175 C. Saring tepung dan baking powder ke dalam mangkuk, lalu sisihkan.
3. Kocok gula merah, 3/4 cup mentega, telur, dan ekstrak vanili dalam mangkuk besar dengan mixer listrik dengan kecepatan sedang sampai campurannya kental, sekitar 2 menit. Kocok perlahan dalam campuran tepung sampai tercampur rata. Cubit sekitar 1 sdm adonan, dan menggulungnya menjadi bola. Tekan adonan ke bagian bawah cangkir panci cupcake yang tidak dipanaskan, dan gunakan jempol Anda untuk menekan adonan ke dalam bentuk kecil kecil, dengan dinding 1/4 inci menghadap ke sisi cup cupcake. Ulangi dengan sisa adonan. Isi setiap kerak kecil dengan sekitar 1 sdt isi kemiri yang sudah disiapkan.
4. Panggang dalam oven yang sudah dipanaskan sampai kulit kue agak kecoklatan, 10 sampai 13 menit. cek sebentar setelah 10 menit. Biarkan kue dingin di panci cupcake selama 5 menit sebelum melepaskan rak kawat untuk menyelesaikan pendinginan.  </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraPecan);