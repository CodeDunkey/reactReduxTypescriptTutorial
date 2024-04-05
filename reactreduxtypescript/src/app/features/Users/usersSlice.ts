import { createSlice } from "@reduxjs/toolkit";

export type User = {
    id: string,
    name: string,
}

const initialState: User[] = [
    { id: "0", name: "Dude Lebowski" },
    { id: "1", name: "Neil Young" },
    { id: "2", name: "Dave Grey" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer;