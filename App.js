
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Swiper from "react-native-swiper";
import Schedule from "./components/schedule";
import Header from"./components/Header";
import AsyncStorage from '@react-native-community/async-storage'
import {Button, IconButton, TextInput} from "react-native-paper";



export default class App extends Component {
    constructor(){
        super();
        this.state ={
            group: ' ',
            show: true,
            text: '8207',
            isModalVisible: true,
        }

    }
    render() {
        const save = async() => {
            try {
                await AsyncStorage.setItem('Group',this.state.text)
                this.setState({isisModalVisible: false})
                this.setState({group:await AsyncStorage.getItem('Group')})
            }catch (err){
                alert(err)
            }

        }
        const back = async() => {
            try {
                await AsyncStorage.setItem('Group',' ')
                this.setState({isisModalVisible: true})
                this.setState({group:await AsyncStorage.getItem('Group')})
            }catch (err){
                alert(err)
            }
        }
        if(this.state.isModalVisible && this.state.group ===' '){
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        {/*<Image style={styles.logo} source={'/home/maxim/WebstormProjects/React-Native1/assets/icon.png'}/>*/}
                        <Text>Расписание для Лэти</Text>
                    </View>
                    <View style={styles.form}>
                        <TextInput
                            label="Номер группы"
                            value={this.state.text}
                            onChangeText={text => this.setState({text:text})}
                            mode={"outlined"}
                            style={styles.btn}
                        />
                        <Button style={styles.btn} mode="contained" onPress={() => save()}>
                            Далее
                        </Button>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Swiper showsPagination={false} loop={true} visible={!this.state.isModalVisible}>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <View style={styles.header}>
                                <Header items='Понедельник' group = {this.state.text}/>
                                <IconButton style={styles.btnBack} size={15} icon="pencil" onPress={() => back()}/>
                            </View>
                                <Schedule items='Monday' group = {this.state.text}/>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <View style={styles.header}>
                                <Header items='Вторник' group = {this.state.text}/>
                                <IconButton style={styles.btnBack} size={15} icon="pencil" onPress={() => back()}/>
                            </View>
                            <Schedule items='Tuesday' group = {this.state.text}/>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <View style={styles.header}>
                                <Header items='Среда' group = {this.state.text}/>
                                <IconButton style={styles.btnBack} size={15} icon="pencil" onPress={() => back()}/>
                            </View>
                            <Schedule items='Wednesday' group = {this.state.text}/>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <View style={styles.header}>
                                <Header items='Четверг' group = {this.state.text}/>
                                <IconButton style={styles.btnBack} size={15} icon="pencil" onPress={() => back()}/>
                            </View>
                            <Schedule items='Thursday' group = {this.state.text}/>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <View style={styles.header}>
                                <Header items='Пятница' group = {this.state.text}/>
                                <IconButton style={styles.btnBack} size={15} icon="pencil" onPress={() => back()}/>
                            </View>
                            <Schedule items='Friday' group = {this.state.text}/>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <View style={styles.header}>
                                <Header items='Суббота' group = {this.state.text}/>
                                <IconButton style={styles.btnBack} size={15} icon="pencil" onPress={() => back()}/>
                            </View>
                            <Schedule items='Saturday' group = {this.state.text}/>
                        </View>
                    </Swiper>
                </View>
            );
        }

    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
    logoContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo:{
        width:100,
        height:100,
    },
    form: {
        margin: 20,
        padding: 10
    },
    btn:{
        margin: 5
    },
    header: {
        flexDirection: 'row',
        width: "100%"

    },
    btnBack:{
        position: 'absolute',
        left: "87%",
        top:"50%",
    }



});
