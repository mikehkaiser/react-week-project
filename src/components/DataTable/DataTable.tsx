import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { BikeForm } from '../../components/BikeForm';
import { string } from 'yargs';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'model', headerName: 'Model', width: 150, editable: true },
    { field: 'manufacturer', headerName: 'Manufacturer', width: 200, editable: true },
    { field: 'year', headerName: 'Year', type: 'date', width: 150, editable: true },
    { field: 'size', headerName: 'Size', width: 150, editable: true },
    { field: 'category', headerName: 'Category', width: 150, editable: true },
    { field: 'frameMaterial', headerName: 'Frame Material', width: 200, editable: true },
];



export const DataTable = () => {
    let {bikeData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState({ });

    let handleOpen = () =>{
        setOpen(true)
    };
    let handleClose = () =>{
        setOpen(false)
    };


    const rows = [
        { id: 1, model: 'Electric Queen', manufacturer: 'All City' , year: 2016, size: 'Medium', category: 'mountain', frameMaterial: 'steel'},
    ]
    return(
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8', borderRadius: '5px', height: 400, width: '100%'}}>
            <DataGrid
            rows={bikeData}
            columns={columns}
            pageSize={7}
            checkboxSelection
            onSelectionModelChange = {id => setData(id[0])} />
            {console.log(gridData)}
        </div>
    )}