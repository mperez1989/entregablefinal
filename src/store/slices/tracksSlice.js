import { createSlice } from '@reduxjs/toolkit';

export const tracksslice = createSlice({
    name: 'tracks',
    initialState: [],
    reducers: {
    setTracksSlice: (state, action) => action.payload,
    addTrack: (state, action)=> {
        if(state.findIndex(track => track.id === action.payload.id) === -1){
            return [...state, action.payload]
        } else {
            return state
        }
    },
    deleteTrack: (state, action) => state.filter( track => track.id !== action.payload.id )
    }
})

export const { setTracksSlice, addTrack, deleteTrack } = tracksslice.actions;

export default tracksslice.reducer;
