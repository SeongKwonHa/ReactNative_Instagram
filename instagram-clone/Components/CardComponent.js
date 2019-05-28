import React, { Component } from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from "native-base"

export default class CardCompnent extends Component {
  render() {
    const images = {
      "1": { uri: "https://img.sbs.co.kr/newimg/news/20180503/201178297_1280.jpg" },
      "2": { uri: "https://img.sbs.co.kr/newimg/news/20181029/201243760_1280.jpg" },
      "3": {
        uri:
          "https://c-7npsfqifvt0x24jnh-t-nto-dpnx2eblbnbjafex2eofu.g01.msn.com/g00/3_c-7x78x78x78.nto.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fjnh-t-nto-dpn.blbnbjafe.ofux2fufoboux2fbnqx2ffoujuzjex2fCCSVbym.jnhx3fix3d027x26x78x3d2211x26nx3d7x26rx3d71x26px3dgx26mx3dgx26yx3d518x26zx3d367x26j21d.nbslx3djnbhf_$/$/$/$/$"
      }
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: "https://i.pinimg.com/originals/9e/00/88/9e00889a71c8dbd8e1094b9148b9290c.jpg"
              }}
            />
            <Body>
              <Text>IU_Fan</Text>
              <Text note>Jan 21, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 40 }}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{ fontWeight: "900" }}>cirale </Text>
            #아이유 #인스타 #그램 #만들기
          </Text>
        </CardItem>
      </Card>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
