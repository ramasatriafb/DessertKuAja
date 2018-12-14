import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Content, 
  Picker, 
  Form , 
  Button, 
  DatePicker, 
  Item, 
  Thumbnail, 
  Label, 
  Input, 
  Icon, 
  Text, 
  Left,
  Right,
  Body,
  Title, 
  Card,
  CardItem} from 'native-base';
import { StyleSheet } from 'react-native';
import Images from 'asset/Images';

export default class Join extends Component {
    static navigationOptions = {
      header:null
    }
    constructor(props) {
        super(props);
        this.state = {
        selected2: undefined,

        selected3: undefined
        };
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    } 
    onValueChange2(value: string) {
        this.setState({
        selected2: value
        });
    }
    onValueChange3(value: string) {
        this.setState({
        selected3: value
        });
    } 
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
    render() {

    return (
      <Container>
       <Header style={styles.header}>
                <Left style={{flex:1}}>
                <Button onPress={() => this.props.navigation.goBack()} transparent textStyle={{color: '#87838B'}}>
                  <Icon name='arrow-back' />
                </Button>
                </Left>
                <Body style={{flex:2}}>
                    <Title>DessertKuAja</Title>
                </Body>
        </Header>
        
        <Content padder>
        <Thumbnail large style={{ alignSelf: "center", height: 120, width: 120, }} source={Images.userIcon}/>
    
        <Card style = {{marginBottom: 15}}>
          <CardItem header bordered>
            <Text> Data Pribadi Anda </Text>
          </CardItem>
          <CardItem bordered>
             <Body>
                <Item floatingLabel>
                  <Label>Nama Kamu </Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Email Kamu</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Password Kamu</Label>
                  <Input secureTextEntry />
                </Item>
                <Item picker>
                <Label>Jenis Kelamin Anda </Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Laki - Laki" value="key0" />
                    <Picker.Item label="Perempuan" value="key1" />
                  </Picker>
                </Item>
                <Item>
                    <Label>Tanggal Lahir Kamu</Label>
                    <DatePicker
                    defaultDate={new Date(2018, 31, 31)}
                    minimumDate={new Date(1950, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Pilih Tanggal Lahir"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    />
                </Item>
              </Body>
            </CardItem>

            <CardItem header bordered>
              <Text>Data Tentang Kesehatan Anda</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item picker>
                  <Label>Apakah Anda Diabet ? </Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected3}
                    onValueChange={this.onValueChange3.bind(this)}
                  >
                    <Picker.Item label="Ya" value="key0" />
                    <Picker.Item label="Tidak" value="key1" />
                  </Picker>
                </Item>
                
                <Item floatingLabel>
                  <Label>Gula Darah Kamu (mg/dL)</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>HDL Kamu (mg/dL)</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>LDL Kamu (mg/dL)</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Trigliserida Kamu (mg/dL)</Label>
                  <Input />
                </Item>
              </Body>
          </CardItem>

          <Button style = {{marginTop: 20, marginLeft:20,marginRight:20}} full rounded info>
            <Text>Join</Text>
          </Button>
          <Button onPress={() => this.props.navigation.goBack()} style = {{marginTop: 20, marginBottom: 20, marginLeft:20,marginRight:20}}full rounded danger>
            <Text>Batal</Text>
          </Button>

          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingRight: 15,
        paddingLeft: 15
    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    }
});
