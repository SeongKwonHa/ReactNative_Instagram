import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from "native-base"
import CardComponent from "../CardComponent"

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />
  }

  render() {
    return (
      <Container style={style.container}>
        <Header>
          <Left>
            <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text style={{ fontWeight: "900" }}>Instagram</Text>
          </Body>
          <Right>
            <Icon name="ios-send" style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>스토리</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}> 모두 보기</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri:
                      "https://img8.yna.co.kr/photo/cms/2018/10/04/49/PCM20181004000249365_P2.jpg"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri: "http://www.thefirstmedia.net/news/photo/201804/41458_22901_3040.jpg"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri: "http://image.chosun.com/sitedata/image/201710/10/2017101002285_0.jpg"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri: "http://p3.ifengimg.com/a/2018_06/4715606611fff06_size70_w375_h421.jpg"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri:
                      "http://mblogthumb2.phinf.naver.net/MjAxODA0MjhfMjMz/MDAxNTI0OTIyNTkzNzQ4.VgG4nw9Oer4IuPKHnadn6l2RitayYuI7FWUEeHCNRlIg.IvOXlUPLMZMb3xGVElejt-39fENVBC79sNynugqXCE4g.JPEG.amazes2002/%EC%95%84%EC%9D%B4%EC%9C%A0%EB%88%84%EB%82%98105.jpg?type=w800"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/IU_MelOn_Music_Awards_2017_06.jpg/200px-IU_MelOn_Music_Awards_2017_06.jpg"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IU_at_Melon_Music_Awards%2C_13_November_2014_01.jpg/200px-IU_at_Melon_Music_Awards%2C_13_November_2014_01.jpg"
                  }}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: "red", borderWidth: 2 }}
                  source={{
                    uri: "https://t1.daumcdn.net/news/201903/22/newsen/20190322220000150hmyj.jpg"
                  }}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="2324" />
          <CardComponent imageSource="2" likes="46" />
          <CardComponent imageSource="3" likes="208" />
        </Content>
      </Container>
    )
  }
}

export default HomeTab

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})
