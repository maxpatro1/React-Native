import {Component} from "react";
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Icon} from "react-native-elements";
import {ActivityIndicator} from "react-native-paper";

import AsyncStorage from '@react-native-community/async-storage'

export default class Schedule extends Component<Props> {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            group: this.props.group
        }

    };
    componentDidMount(){
        this.load()
        return fetch('https://api.npoint.io/eff30a27daf6e1cf98c9')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){
                });
            })
            .catch((error) =>{
                console.error(error);
            });


    }
    load = async ()=> {
        try {
            const value = await AsyncStorage.getItem('Group');
            if (value !== null) {
                this.setState({
                    group: value
                })
            }
        } catch (error) {
            alert(error)
        }

    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20, justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator animating={true} size={'large'}/>
                </View>
            )}
        if(this.state.dataSource[this.state.group]===undefined){
            return (
                <View style={{flex: 1, padding: 20, }}>
                    <Image style={{width:"90%",height:200}} source={require('./assets/not_found.png')}/>
                </View>
            )
        }
        else {
            const jokeComponents = this.state.dataSource[this.state.group][this.props.items].map(item =>
                <View key={item.id} style={styles.container}>
                    {item.type === 'лекция' ?  <View style={styles.bgGreen}><Text>  </Text></View> : null }
                    {item.type === 'практика' ? <View style={styles.bgBlue}><Text>  </Text></View> : null }
                    {item.type === 'лабораторная работа' ? <View style={styles.bgRed}><Text>  </Text></View> : null }
                    {(item.type !== 'лабораторная работа' && item.type !== 'практика'&&item.type !== 'лекция') ? <View style={styles.bgFiol}><Text>  </Text></View> : null }
                    <View style={styles.bg}>
                        <Text>  </Text>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.subject}>
                            <Text style={styles.title}>{item.subject}</Text>
                        </View>
                        {item.type === 'лекция' ? <View style={styles.typeLec}><Text style={{color:'#fff'}}>{item.type}</Text></View> : null }
                        {item.type === 'практика' ? <View style={styles.typePr}><Text style={{color:'#fff'}}>{item.type}</Text></View> : null }
                        {item.type === 'лабораторная работа' ? <View style={styles.typeLab}><Text style={{color:'#fff'}}>{item.type}</Text></View> : null }
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='account-circle' color='grey'/>
                                <Text style={styles.teacher}>{item.teacher}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='place' color='grey'/>
                                <Text style={styles.teacher}>{item.Aud}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeStart}>{item.timeStart}</Text>
                        <Text>{item.timeStop}</Text>
                    </View>
                </View>

            )
            return(
                    jokeComponents
            );
        }

    }
}

const styles = StyleSheet.create({
    bgFiol:{
        width:'5%',
        height:'100%',
        backgroundColor:'#8E44AD'
    },
    bgBlue: {
        width:'5%',
        height:'100%',
        backgroundColor:'#3a87fb'
    },
    bgGreen: {
        width:'5%',
        height:'100%',
        backgroundColor:'#32965a'
    },
    bgRed: {
        color:'blue',
        width:'5%',
        height:'100%',
        backgroundColor:'#ea4435'
    },
    container: {
        flex: 1,
        minHeight:"13%",
        maxHeight:"20%",
        height:'20%',
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 20,
        marginRight: '5%',
        marginTop: 20,
        marginBottom:5,

    },
    subject:{

    },
    time:{
        alignSelf: 'center',
    },
    timeStart:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    title:{
        color: 'black',
        fontSize: 15,
        flexWrap: 'wrap',
        fontWeight: "bold",
    },
    typeLec:{
        width: 70,
        height: 24,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32965a',
    },
    typePr:{
        width: 100,
        height: 25,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a87fb',
    },
    typeLab:{
        width: 170,
        height: 25,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea4435',
    },
    teacher:{
        color:'#747275',
        alignSelf: 'center'
    },
    info:{
        width:'80%',
        flexDirection: 'column',
        justifyContent:'space-around',
        paddingLeft:10,
    },
    scroll:{
        height:"1000%"
    }

});
