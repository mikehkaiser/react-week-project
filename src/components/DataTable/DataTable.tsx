import React, {useState} from 'react';
import { DataGrid, GridColDef, GridRowModel, GridValueGetterParams } from '@material-ui/data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { BikeForm } from '../../components/BikeForm';
import { string } from 'yargs';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import DirectionsBikeRoundedIcon from '@material-ui/icons/DirectionsBikeRounded';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'model', headerName: 'Model', width: 180, editable: true },
    { field: 'manufacturer', headerName: 'Manufacturer', width: 180, editable: true },
    //{ field: 'year', headerName: 'Year', type: 'date', width: 120, editable: true },
    { field: 'size', headerName: 'Size', width: 120, editable: true },
    { field: 'category', headerName: 'Category', width: 150, editable: true },
    { field: 'frameMaterial', headerName: 'Frame Material', width: 200, editable: true },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
        margin: theme.spacing(1),
        },
    }),
);

interface gridData {
    id?:string;
}

export const DataTable = () => {
    const classes = useStyles();
    
    let {bikeData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});
    const [dialogOpen, setDialogOpen] = useState(false);

    let handleOpen = () =>{
        setOpen(true)
    };
    let handleClose = () =>{
        setOpen(false)
    };

    let handleCheckBox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        } else{
            setData({id:id[0].toString()})
        }
    };

    const handleDialogClickOpen = () =>{
        setDialogOpen(true);
    };
    const handleDialogClickClose = () =>{
        setDialogOpen(false);
    };

    let deleteData = () => {
        serverCalls.delete(gridData.id!)
        getData()
    };

    return(
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8', borderRadius: '5px', height: 400, width: '100%'}}>
            <DataGrid
            rows={bikeData}
            columns={columns}
            pageSize={7}
            checkboxSelection
            onSelectionModelChange = {handleCheckBox} />
            {console.log(gridData)}
            <Button className={classes.button} variant="contained" color="primary" startIcon={<DirectionsBikeRoundedIcon />} onClick={handleDialogClickOpen}>Add a Bike</Button>
                <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a New Bike</DialogTitle>
                    <DialogContent>
                        <BikeForm />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                        <Button onClick={handleDialogClickClose} color="primary">Done</Button>
                    </DialogActions>
                </Dialog>
            <Button onClick={handleOpen} variant="contained" color="secondary" startIcon={<AutorenewRoundedIcon />}>Update</Button>
            <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteRoundedIcon />} onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle>Update Bike</DialogTitle>
                <DialogContent>
                    <BikeForm id={gridData.id!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    )}