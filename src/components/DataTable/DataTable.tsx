import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'model',
        headerName: 'Model',
        width: 150,
        editable: true,
    },
    {
        field: 'manufacturer',
        headerName: 'Manufacturer',
        width: 200,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'Year',
        type: 'date',
        width: 150,
        editable: true,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
        editable: true,
    },
    {
        field: 'frameMaterial',
        headerName: 'Frame Material',
        width: 200,
        editable: true,
    },
];

const rows = [
    { id: 1, model: 'MCD', manufacturer: 'Black Mountain Cycles', year: 2018, category: 'cyclocross', frameMaterial: 'steel'},
    { id: 2, model: 'Romanceur', manufacturer: 'Crust' , year: 2016, category: 'rando', frameMaterial: 'steel'},
    { id: 3, model: 'Roadeo', manufacturer: 'Rivendell' , year: 2020, category: 'road', frameMaterial: 'steel'},
    { id: 4, model: 'Tarmac', manufacturer: 'Specialized', year: 2019, category: 'road', frameMaterial: 'carbon'},
    { id: 5, model: 'Electric Queen', manufacturer: 'All City' , year: 2016, category: 'mountain', frameMaterial: 'steel'},
]

export const DataTable = () => {
    return(
        <div style={{ backgroundColor: 'white', borderRadius: '5px', height: 400, width: '100%'}}>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length}
        checkboxSelection
        disableSelectionOnClick />
    </div>
    )
}