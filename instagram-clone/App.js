import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import MainScreen from "./Components/MainScreen"

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

export default createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
