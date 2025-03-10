import {configureStore} from '@reduxjs/toolkit';
import ThemeSlice from '../features/themeSlice';

const store  = configureStore({
    reducer: {
        theme: ThemeSlice,
    }
});

export default store;