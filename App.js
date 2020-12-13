import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from "react-native-swiper";
import Schedule from "./components/schedule";
import Header from"./components/Header"
export default function App() {

  return (
      <View style={styles.container}>
          <Swiper showsPagination={false} loop={true}>
              <View style={{flexDirection:'column',flex: 1}}>
                  <Header items='Понедельник'/>
                  <Schedule items='Monday'/>
              </View>
              <View style={{flexDirection:'column',flex: 1}}>
                  <Header items='Вторник'/>
                  <Schedule items='Tuesday'/>
              </View>
              <View style={{flexDirection:'column',flex: 1}}>
                  <Header items='Среда'/>
                  <Schedule items='Wednesday'/>
              </View>
              <View style={{flexDirection:'column',flex: 1}}>
                  <Header items='Четверг'/>
                  <Schedule items='Thursday'/>
              </View>
              <View style={{flexDirection:'column',flex: 1}}>
                  <Header items='Пятница'/>
                  <Schedule items='Friday'/>
              </View>
              <View style={{flexDirection:'column',flex: 1}}>
                  <Header items='Суббота'/>
                  <Schedule items='Saturday'/>
              </View>
          </Swiper>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
