import React, { Component } from "react"
import { View, Text, StyleSheet, Image, Dimensions } from "react-native"
import { Icon, Container, Content, Header, Left, Body, Right, Button } from "native-base"
import CardCompnent from "../CardComponent"

var images = [
  { uri: "https://img8.yna.co.kr/photo/cms/2018/10/04/49/PCM20181004000249365_P2.jpg" },
  { uri: "http://www.thefirstmedia.net/news/photo/201804/41458_22901_3040.jpg" },
  { uri: "http://image.chosun.com/sitedata/image/201710/10/2017101002285_0.jpg" },
  { uri: "http://p3.ifengimg.com/a/2018_06/4715606611fff06_size70_w375_h421.jpg" },
  {
    uri:
      "http://mblogthumb2.phinf.naver.net/MjAxODA0MjhfMjMz/MDAxNTI0OTIyNTkzNzQ4.VgG4nw9Oer4IuPKHnadn6l2RitayYuI7FWUEeHCNRlIg.IvOXlUPLMZMb3xGVElejt-39fENVBC79sNynugqXCE4g.JPEG.amazes2002/%EC%95%84%EC%9D%B4%EC%9C%A0%EB%88%84%EB%82%98105.jpg?type=w800"
  },
  {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/IU_MelOn_Music_Awards_2017_06.jpg/200px-IU_MelOn_Music_Awards_2017_06.jpg"
  },
  {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IU_at_Melon_Music_Awards%2C_13_November_2014_01.jpg/200px-IU_at_Melon_Music_Awards%2C_13_November_2014_01.jpg"
  },
  { uri: "https://t1.daumcdn.net/news/201903/22/newsen/20190322220000150hmyj.jpg" },
  { uri: "https://img.sbs.co.kr/newimg/news/20180503/201178297_1280.jpg" },
  { uri: "https://img.sbs.co.kr/newimg/news/20181029/201243760_1280.jpg" },
  {
    uri:
      "https://c-7npsfqifvt0x24jnh-t-nto-dpnx2eblbnbjafex2eofu.g01.msn.com/g00/3_c-7x78x78x78.nto.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fjnh-t-nto-dpn.blbnbjafe.ofux2fufoboux2fbnqx2ffoujuzjex2fCCSVbym.jnhx3fix3d027x26x78x3d2211x26nx3d7x26rx3d71x26px3dgx26mx3dgx26yx3d518x26zx3d367x26j21d.nbslx3djnbhf_$/$/$/$/$"
  }
]

var { width, height } = Dimensions.get("window")

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" style={{ color: tintColor }} />
  }
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
            { marginBottom: 2 }
          ]}
        >
          <Image style={{ flex: 1, width: undefined, height: undefined }} source={image} />
        </View>
      )
    })
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>{this.renderSectionOne()}</View>
      )
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardCompnent imageSource="1" likes="100" />
          <CardCompnent imageSource="2" likes="36" />
          <CardCompnent imageSource="3" likes="240" />
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Header>
          <Left style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 15 }}> IU_FAN</Text>
            <Icon name="caret-down" type="FontAwesome" style={{ paddingLeft: 10, fontSize: 14 }} />
          </Left>
          <Right style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="back-in-time" type="Entypo" style={{ paddingRight: 10, fontSize: 23 }} />
            <Icon name="user-plus" type="Feather" style={{ paddingRight: 10, fontSize: 23 }} />
            <Icon name="dots-vertical" type="MaterialCommunityIcons" style={{ fontSize: 23 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/9e/00/88/9e00889a71c8dbd8e1094b9148b9290c.jpg"
                  }}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>167</Text>
                    <Text style={{ fontSize: 12, color: "gray" }}>게시물</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>346</Text>
                    <Text style={{ fontSize: 12, color: "gray" }}>팔로워</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>192</Text>
                    <Text style={{ fontSize: 12, color: "gray" }}>팔로잉</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      height: 30,
                      marginHorizontal: 10,
                      marginTop: 10
                    }}
                  >
                    <Text>프로필 수정</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <Text style={{ fontWeight: "bold" }}>React-Native</Text>
              <Text> Instagram UI 따라하기!!!</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Icon
                  name="ios-apps"
                  style={[this.state.activeIndex == 0 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Icon
                  name="ios-list"
                  style={[this.state.activeIndex == 1 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}
              >
                <Icon
                  name="ios-people"
                  style={[this.state.activeIndex == 2 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}
              >
                <Icon
                  name="ios-bookmark"
                  style={[this.state.activeIndex == 3 ? {} : { color: "grey" }]}
                />
              </Button>
            </View>
            <View>{this.renderSection()}</View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default ProfileTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
