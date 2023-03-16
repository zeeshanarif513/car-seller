import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cars from '../../data/Cars'
import { Cars_Details } from "../../redux/actions";

const useHome = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [cars, setCars] = useState(Object.values(Cars))

    const carsDetails = useSelector(state => state.CarsReducer.details)

    useEffect(() => {
        dispatch(Cars_Details(Cars))
    }, [])

    useEffect(() => {
        setCars(carsDetails)
    }, [carsDetails])

    const addCar = () => {
        navigation.navigate('AddEditCar', { cars: cars })
    }

    return {
        cars,
        addCar
    }
}

export default useHome