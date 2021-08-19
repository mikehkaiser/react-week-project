import React, { useState, useEffect } from "react";
import { serverCalls } from '../api';

export const useGetData = () => {
    const [bikeData, setData] = useState<any>([]);

    const handleFetchData = async() => {
        const result = await serverCalls.get();
        setData(result)
    };
    
    // introducing useEffect hook to add data to react State
    useEffect( () =>{
        handleFetchData()
    }, [])
    return {bikeData, getData:handleFetchData}
}