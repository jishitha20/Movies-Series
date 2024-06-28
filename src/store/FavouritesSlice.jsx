import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: {},
  },
  reducers: {
    addFavourite:(state,action) =>{
      console.log(action.payload,"Hello")
      const data = action.payload;
        state.favourites[data.imdbID] =  data

      },
    deleteFavourite:(state,action) =>{
      const data = action.payload;
        delete state.favourites[data.imdbID]
    },

  },
})

export const { addFavourite, deleteFavourite} = cartSlice.actions

export default cartSlice.reducer