import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../config/Colors";
import { SCREEN_WIDTH } from "../../config/Constants";

const DropDown = (props) => {
    const { open, setOpen, value, setValue, items, setItems } = props
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{  width: 0.73*SCREEN_WIDTH }}
            style={{
                borderRadius: 5,
                paddingLeft: 15,
                height: 0,
                width: 0.73*SCREEN_WIDTH,
                backgroundColor: Colors.WHITE,
                borderColor: Colors.GREEN,
                borderWidth: 1,
                marginBottom: 50
            }}
        />
    )
}

export default DropDown