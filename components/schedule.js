import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from "../assets/Data";


export default function Schedule(props) {
    let day = props.items;
    let DataNw = Data[day];
    const jokeComponents = DataNw.map(item =>
        <View key={item.id} style={styles.container}>
            {item.type === 'лекция' ?  <View style={styles.bgGreen}><Text>  </Text></View> : null }
            {item.type === 'практика' ? <View style={styles.bgBlue}><Text>  </Text></View> : null }
            {item.type === 'лабораторная работа' ? <View style={styles.bgRed}><Text>  </Text></View> : null }
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
    return (

        jokeComponents
    );
}

const styles = StyleSheet.create({
    bgBlue: {
        color:'blue',
        width:'5%',
        height:'100%',
        backgroundColor:'#3a87fb'
    },
    bgGreen: {
        color:'blue',
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
        maxHeight:'20%',
        flexDirection: 'row',
        width: '95%',
        height: 500,
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 20,
        marginRight: '5%',
        marginTop: 20,

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
        height: 25,
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
        justifyContent:'center',
        paddingLeft:10,
    }

});
