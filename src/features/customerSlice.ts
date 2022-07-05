import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CustomerState {
    value: {
        name: string
        items: string[]
    }[]
}

const initialState: CustomerState = {
    value: [{name: "Greg Schoenberg", items: ["turkey", "rutebaga"]}]
}

export const customerSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<{ name: string; items: string[]; }>) => {
            state.value.push(action.payload)
        },
        addItem: (state, action: PayloadAction<string>) => {
            console.log(state.value[0])
            // state.value.items.push(action.payload)
        }
    }
})

export const { addCustomer, addItem } = customerSlice.actions

export default customerSlice.reducer