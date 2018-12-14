import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import Images from 'asset/Images';
import { withNavigation } from 'react-navigation';

const pancake = Images.pancakeImage;
const cheesecake = Images.cheesecakeImage;
const icecream = Images.icecreamImage;
const oreo = Images.oreoImage;
const puff = Images.puffImage;
const salad = Images.saladImage;
const waffle = Images.waffleImage;
const datas = [
  {
    route: "Resep",
    text: "Pancake",
    note: "Its time to build a difference . .",
    image: pancake
  },
  {
    route: "Resep1",
    text: "Cheese Cake",
    note: "Its time to build a difference . .",
    image: cheesecake
  },
  {
    route: "Resep",
    text: "Ice Cream",
    note: "Its time to build a difference . .",
    image: icecream
  },
  {
    route: "Resep1",
    text: "Oreo Dessert",
    note: "Its time to build a difference . .",
    image: oreo
  },
  {
    route: "Resep",
    text: "Puff Chocolate",
    note: "Its time to build a difference . .",
    image: puff
  },
  {
    route: "Resep1",
    text: "Salad",
    note: "Its time to build a difference . .",
    image: salad
  },
  {
    route: "Resep",
    text: "Waffle",
    note: "Its time to build a difference . .",
    image: waffle
  },
];

class Beranda extends Component {
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
export default withNavigation(Beranda);