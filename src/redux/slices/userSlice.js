import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null
    },
    reducers: {

    }
});

export default userSlice.reducer;