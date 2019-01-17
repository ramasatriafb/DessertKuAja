import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';



class TataCaraWalnut extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          
              <Body>
                <Text>     
                Persiapan : 10 menitWaktu masak : 5 menitSiap Saji dalam : 1 jam 15 menit1. Olesi loyang kaca 8x8 inci, dan sejajar dengan selembar kertas perkamen berukuran 8x12 inci.Biarkan ujungnya menggantung di sisi loyang.2. Lelehkan coklat putih, susu kental manis, dan mentega didalam mangkok yang aman untuk microwave dalam 30 detik, aduk selama 1 sampai 3 menit tiap selesai dilelehkan. Jangan terlalu panas atau coklat akan hangus. Masukkan ekstrak rasa maple sampai tercampur rata, lalu tambahkan walnut. Tuangkan campuran coklat ke dalam loyang yang sudah disiapkan;  dinginkan sampai selesai. Hapus fudge dengan mengangkat kertas perkamen, lalu potong kotak.                                                               
                </Text>
               
              </Body>
              
        </Content>
      </Container>
    );
  }
}
export default withNavigation(TataCaraWalnut);