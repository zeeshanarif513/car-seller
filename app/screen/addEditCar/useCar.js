import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { Categories } from "../../data/Categories";
import { Messages } from "../../config/Strings";
import { Cars_Details } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-simple-toast';

const useCar = (cars) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [color, setColor] = useState("")
    const [colorError, setColorError] = useState(undefined)
    const [make, setMake] = useState("")
    const [makeError, setMakeError] = useState(undefined)
    const [model, setModel] = useState("")
    const [modelError, setModelError] = useState(undefined)
    const [registeration, setRegisteration] = useState("")
    const [registerationError, setRegisterationError] = useState(undefined)
    const [year, setYear] = useState("")
    const [yearError, setYearError] = useState(undefined)
    const [openDropDown, setOpenDropDown] = useState(false)
    const [dropDownValue, setDropDownValue] = useState(null)
    const [dropDownItems, setDropDownItems] = useState([])

    useEffect(() => {
        const dropDownCategories = Categories.map(category => {
            return {
                label: category,
                value: category
            }
        })
        setDropDownItems(dropDownCategories)
    }, [])

    const handleUnhandledTouches = () => {
        Keyboard.dismiss()
        return false;
      }

    const addCar = () => {
        if(color.trim() == '')
            setColorError(Messages.FIELD_CANT_BE_EMPTY)
        else if(make.trim() == '')
            setMakeError(Messages.FIELD_CANT_BE_EMPTY)
        else if(model.trim() == '')
            setModelError(Messages.FIELD_CANT_BE_EMPTY)
        else if(registeration.trim() == '')
            setRegisterationError(Messages.FIELD_CANT_BE_EMPTY)
        else if(year.trim() == '')
            setYearError(Messages.FIELD_CANT_BE_EMPTY)
        else {
            const car = {
                category: dropDownValue,
                color: color,
                make: make,
                model: model,
                registration_number: registeration,
                year: year
            }
            const newCars = [car, ...cars]
            dispatch(Cars_Details(newCars))
            Toast.show("Car added ", Toast.LONG)
            navigation.goBack()

        }
    }

    const cancel = () => {
        setColor('')
        setColorError(undefined)
        setMake('')
        setMakeError(undefined)
        setModel('')
        setModelError(undefined)
        setRegisteration('')
        setRegisterationError(undefined)
        setYear('')
        setYearError(undefined)
        navigation.goBack()
    }
    return {
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
    }
}

export default useCar