import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';

const walnut = Images.boardWalnut;
const pecan = Images.pecanPie;
const carrotcake = Images.carrotCake;
const doublepumpkin = Images.doublePumpkin;
const bananacake = Images.bananaCake;
const cinnamon = Images.cinnamonIce;
const deepcake = Images.deepCake;
const besbro = Images.bestBrownies;
const german = Images.germanApple;
const suf = Images.sufgiyanot;
const our = Images.OurCookies;
const datas = [
  {
    route: "BoardWalnut",
    text: "Boardwalk Quality Maple Walnut Fudge",
    note: "Waktu Pembuatan : 1 jam 15 menit Jumlah Sajian :  . .",
    image: walnut
  },
  {
    route: "BestBrownies",
    text: "Best Brownies",
    note: "Waktu Pembuatan : 1 jam Jumlah Kalori & Sajian . .",
    image: besbro
  },
  {
    route: "Sufgiyanot",
    text: "Sufgiyanot",
    note: "Waktu Pembuatan : 50 menit Jumlah Sajian & Kalori.. .",
    image: suf
  },
  {
    route: "OurBest",
    text: "Our Best Cheesecake",
    note: "Waktu Pembuatan : 6  jam 25 menit Jumlah Sajia.. .",
    image: our
  },
  {
    route: "GermanApple",
    text: "German Apple Cake",
    note: "Waktu Pembuatan : ?  jam ? menit Jumlah Sajia.. .",
    image: german
  },
  {
    route: "PecanPie",
    text: "Pecan Pie Cookies",
    note: "Waktu : 1 jam 30 menit Jumlah Sajian & Kalor... . .",
    image: pecan
  },
  {
    route: "CarrotCake",
    text: "Carrot Cake III",
    note: "Waktu Pembuatan : 2 jam Jumlah Sajian & Kalori ... . .",
    image: carrotcake
  },
  {
    route: "DoublePumpkin",
    text: "Double Layer Pumpkin Cheesecake",
    note: "Waktu Pembuatan : 4 jam 10 menit Jumlah Sajian & . .",
    image: doublepumpkin
  },
  {
    route: "BananaCake",
    text: "Banana Cake",
    note: "Waktu Pembuatan : 2 jam 30 menit Jumlah Sajian &... . .",
    image: bananacake
  },
  {
    route: "CinnamonIce",
    text: "Cinnamon Ice Cream",
    note: "Waktu Pembuatan : 1 jam 50 menit Jumlah Sajian & ... . .",
    image: cinnamon
  },
  {
    route: "DeepCake",
    text: "Deep South Eggnog Cake",
    note: "Waktu Pembuatan : 3 jam 40 menit Jumlah Sajia . .",
    image: deepcake
  },
];

class BerandaShinta extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <List
            dataArray={datas}
            renderRow={data => 
            <ListItem thumbnail 
            button
            onPress={() => this.props.navigation.navigate(data.route)} 
            >
            <Left>
                <Thumbnail square source={data.image}  />
              </Left>
              <Body>
                <Text>{data.text}</Text>
                <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
              </Body>
              <Right>
              <Icon name='eye' />

              </Right>
            </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
export default withNavigation(BerandaShinta);