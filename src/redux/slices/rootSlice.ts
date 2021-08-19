import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState:{
        model: 'Sam Hillborne',
        manufacturer: 'Rivendell',
        year: '2015',
        size: '54cm',
        category: 'sport touring',
        frameMaterial: 'steel'
    },
    reducers:{
        chooseModel: (state, action) =>  { state.model = action.payload },
        chooseManufacturer: (state, action) => { state.manufacturer = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseSize: (state, action) => { state.size = action.payload },
        chooseCategory: (state, action) => { state.category = action.payload },
        chooseFrameMaterial: (state, action) => { state.frameMaterial = action.payload }
    }
});

// Export reducer
export const reducer = rootSlice.reducer;
export const { chooseModel, chooseManufacturer, chooseYear, chooseSize, chooseCategory, chooseFrameMaterial } = rootSlice.actions