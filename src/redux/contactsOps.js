import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://664786202bb946cf2f9e0c6d.mockapi.io"


export const fetchContacts = createAsyncThunk("fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    

})
export const addContact = createAsyncThunk("addContact", async (value, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", value)
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    

})
export const deleteContact = createAsyncThunk("deleteContact", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}` )
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    

})