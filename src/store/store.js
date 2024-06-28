import { configureStore } from "@reduxjs/toolkit";
import FavouritesSlice from "./FavouritesSlice";

export default configureStore({
    reducer:{
        fav:FavouritesSlice
    }
})