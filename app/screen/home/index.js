import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useHome from "./useHome";
import Colors from "../../config/Colors";
import { SCREEN_WIDTH } from "../../config/Constants";
import Button from "../../components/button";
import Strings from "../../config/Strings";

const Home = () => {
    const { cars, addCar } = useHome()


    const Item = ({ label, value }) => (
        <View style={styles.label}>
            <Text style={styles.labelText}>{label}: </Text>
            <Text style={styles.labelValue}>{value}</Text>
        </View>
    )

    const renderListItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.make} {item.model}</Text>
                <Item label={Strings.CATEGORY} value={item.category}/>
                <Item label={Strings.COLOR} value={item.color}/>
                <Item label={Strings.MAKE} value={item.make}/>
                <Item label={Strings.MODEL} value={item.model}/>
                <Item label={Strings.REGISTERATION_NO} value={item.registration_number}/>
                <Item label={Strings.YEAR} value={item.year}/>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Button title="Add Car" style={styles.add} onPress={addCar}/>
            <FlatList
                data={cars}
                renderItem={renderListItem} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 12,
    },
    title: {
        backgroundColor: Colors.GREEN,
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        marginBottom: 8
    },
    item: {
        borderWidth: 1.5,
        borderColor: Colors.GREEN,
        borderRadius: 6,
        margin: 4,
        padding: 6
    },
    label: { flexDirection: 'row', justifyContent: 'flex-start', width: 0.6*SCREEN_WIDTH },
    labelText: { color: Colors.GREEN, fontWeight: 'bold', fontSize: 16 },
    labelValue: { color: Colors.BLACK, fontWeight: '400', fontSize: 16, textAlign: 'center' },
    add: { width: 100,  alignSelf: 'flex-end', marginBottom: 8 }
})

export default Home