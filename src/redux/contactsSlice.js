import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";


const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
    error: null
    },
    extraReducers: (builder) => builder
        .addCase(fetchContacts.pending, (state) => { state.loading = true })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload
            state.loading = false
        })
        .addCase(fetchContacts.rejected, (state) => {
            state.error = true
            state.loading = false
        })
        .addCase(addContact.pending, (state) => { state.loading = true })
        .addCase(addContact.fulfilled, (state,action) => {
            state.items.push(action.payload)
            state.loading = false
        })
        .addCase(addContact.rejected, (state) => {
            state.error = true
            state.loading = false
        })
        .addCase(deleteContact.pending, (state) => { state.loading = true })
        .addCase(deleteContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
           
            state.items.splice(index, 1);
            state.loading = false
        })
        .addCase(deleteContact.rejected, (state) => {
            state.error = true
            state.loading = false
        })

});


export const item = (state) => state.contacts.items;
export const selectLoading=(state) => state.contacts.loading
export const selectError=(state) => state.contacts.error

export default slice.reducer;


export const selectFilterConsts = createSelector([item, selectNameFilter], (contacts, filter) => {
     return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
})