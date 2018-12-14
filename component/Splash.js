import React, { Component } from 'react'
import { StyleSheet, Image,ImageBackground } from 'react-native'
import {Thumbnail} from 'native-base'
import Images from 'asset/Images';
export default class Splash extends Component {
    
    static navigationOptions = {
        header:null
    }

    componentWillMount()
    {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        },1000)
    }
    render() {
   
        return (
            <ImageBackground style={ style.imgBackground } 
            resizeMode='cover' 
            source={Images.backgroundIcon}>
            <Image style={ style.logo } 
                  resizeMode='cover' 
                  source={Images.logoIcon}
                  resizeMode = 'stretch'>
            </Image>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
 imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1  
  },
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 280,
    width: 280,
    marginTop: 160,
    marginBottom: 60
},
})