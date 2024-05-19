import { configureStore } from "@reduxjs/toolkit";
import contact from "./contactsSlice";
import filter from './filtersSlice'


export const store = configureStore({
    reducer: {contacts: contact,
        filters: filter,
    },
   }
)
