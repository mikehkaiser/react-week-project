import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { 
    chooseModel, 
    chooseManufacturer, 
    //chooseYear,
    chooseSize, 
    chooseCategory, 
    chooseFrameMaterial } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { serverCalls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface BikeFormProps {
    id?:string;
    data?:{}
};

interface BikeState {
    model: string;
    manufacturer: string;
    //year: Date;
    size: string;
    category: string;
    frameMaterial: string;
};

export const BikeForm = (props:BikeFormProps) =>{
    const dispatch = useDispatch();
    let { bikeData, getData } = useGetData();
    const store = useStore()
    const model = useSelector<BikeState>(state=> state.model)
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data:any, event:any) =>{
        console.log(props.id)

        if(props.id!){
            serverCalls.update(props.id!, data)
            console.log(`Updated:${data} for ${props.id}`)
            event.target.reset();
        } else {
            dispatch(chooseModel(data.model))
            dispatch(chooseManufacturer(data.model))
            //dispatch(chooseYear(data.year))
            dispatch(chooseSize(data.size))
            dispatch(chooseCategory(data.category))
            dispatch(chooseFrameMaterial(data.frameMaterial))
            serverCalls.create(data)
        }
        
        window.location.reload()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="model">Bike Model</label>
                    <Input {...register('model')} name="model" placeholder="Model" />
                </div>
                <div>
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <Input {...register('manufacturer')} name="manufacturer" placeholder="Manufacturer" />
                </div>
                {/* <div>
                    <label htmlFor="year">Year Built</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
                </div> */}
                <div>
                    <label htmlFor="size">Size</label>
                    <Input {...register('size')} name="size" placeholder="Size" />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <Input {...register('category')} name="category" placeholder="Category" />
                </div>
                <div>
                    <label htmlFor="frameMaterial">Frame Material</label>
                    <Input {...register('frameMaterial')} name="frameMaterial" placeholder="Frame Material" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};