import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../components/input";
import useCar from "./useCar";
import Colors from "../../config/Colors";
import Strings from "../../config/Strings";
import Button from "../../components/button";
import { SCREEN_WIDTH } from "../../config/Constants";
import DropDown from "../../components/dropdown";

const AddEditCar = (props) => {
    const { 
        color, 
        setColor, 
        colorError, 
        make, 
        setMake, 
        makeError,
        model,
        setModel,
        modelError,
        registeration,
        setRegisteration,
        registerationError,
        year,
        setYear,
        yearError,
        handleUnhandledTouches,
        openDropDown,
        setOpenDropDown,
        dropDownValue,
        setDropDownValue,
        dropDownItems,
        setDropDownItems,
        addCar,
        cancel
    } = useCar(props?.route?.params?.cars)

    return (
        <View style={styles.container} onStartShouldSetResponder={handleUnhandledTouches}>
            <Text style={styles.heading}>{Strings.ADD_CAR}</Text>
            <View style={styles.actionContainer}>
                <DropDown 
                    open={openDropDown}
                    value={dropDownValue}
                    items={dropDownItems}
                    setOpen={setOpenDropDown}
                    setValue={setDropDownValue}
                    setItems={setDropDownItems}
                />
                <Input 
                    onChangeText={value => setColor(value)}
                    focus={true}
                    autoCapitalize='none'
                    label={Strings.COLOR}
                    placeholder={Strings.COLOR}
                    value={color}
                    error={colorError}
                    style={{ width: 300}}
                />
                <Input 
                    onChangeText={value => setMake(value)}
                    focus={true}
                    autoCapitalize='none'
                    placeholder={Strings.MAKE}
                    label={Strings.MAKE}
                    value={make}
                    error={makeError}
                    style={{ width: 300}}
                />
                <Input 
                    onChangeText={value => setModel(value)}
                    focus={true}
                    autoCapitalize='none'
                    placeholder={Strings.MODEL}
                    label={Strings.MODEL}
                    value={model}
                    error={modelError}
                    style={{ width: 300}}
                />
                <Input 
                    onChangeText={value => setRegisteration(value)}
                    focus={true}
                    autoCapitalize='none'
                    placeholder={Strings.REGISTERATION_NO}
                    label={Strings.REGISTERATION_NO}
                    value={registeration}
                    error={registerationError}
                    style={{ width: 300}}
                />
                <Input 
                    onChangeText={value => setYear(value)}
                    focus={true}
                    autoCapitalize='none'
                    placeholder={Strings.YEAR}
                    label={Strings.YEAR}
                    value={year}
                    error={yearError}
                    style={{ width: 300}}
                />
                <View style={styles.btnContainer}>
                    <Button title={Strings.CANCEL} onPress={cancel} style={[styles.btn, styles.margin]}/>
                    <Button title={Strings.ADD} onPress={addCar}  style={styles.btn}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'center'},
    heading: {
        color: Colors.GREEN,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 24
    },
    actionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { color: Colors.GRAY, fontSize: 14},
    actionText: { color: Colors.GREEN, fontSize: 14},
    btnContainer: { flexDirection: 'row', width: 0.65*SCREEN_WIDTH, justifyContent: 'space-between', alignItems: 'center'},
    btn: { flex: 1, },
    margin: { marginEnd: 8 }
})

export default AddEditCar