import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Header(props) {
    let date = new Date();
    let day = props.items;
    const ruday = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    return (
        <View style={styles.container}>
            <View style={{width:'80%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textDay}>{day}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textToDay}>Сегодня:  </Text>
                    <Text style={styles.textToDay}>{ruday[date.getDay()]}</Text>
                </View>
            </View>
            <Text style={{alignContent:'center',alignSelf:"center"}}>гр.8207</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop:30,
        marginLeft:20,
        width: '93%',
        backgroundColor: '#fff',
    },
    textDay:{
        fontSize: 30
    },
    textToDay:{
        fontSize: 10,
        color:'grey'
    }

});
