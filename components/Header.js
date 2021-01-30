
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';




export default function Header(props) {
    let date = new Date();
    let day = props.items;
    let group = props.group;
    const ruday = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return (
        <View style={styles.container}>

            <View style={{width: '80%'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textDay}>{day}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textToDay}>Сегодня: </Text>
                    <Text style={styles.textToDay}>{ruday[date.getDay()]}</Text>
                </View>
            </View>
            <View style={styles.group}>
                <Text>гр.{group}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop:30,
        marginLeft:20,
        width: '80%',
        backgroundColor: '#fff',
        flexWrap:"nowrap"
    },
    textDay:{
        fontSize: 30
    },
    textToDay:{
        fontSize: 10,
        color:'grey'
    },
    modal:{
        backgroundColor: "#fff",
        height:200,
        display:"flex",
        justifyContent: "space-around",
        width: "90%"
    },
    group:{
        justifyContent: "center",
        alignItems:"center",
        flexWrap:"nowrap"
    }

});