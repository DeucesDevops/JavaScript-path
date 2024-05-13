import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface CounterState  {
    value: number
}

const initialState: CounterState ={
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, ()=>{
                console.log('incrementAsync.pending')
            })
            
            .addCase(incrementAsync.fulfilled, ()=>{
                console.log('incrementAsync.fufilled')
            })

    }
})


export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setInterval(resolve, 1000))
        return amount
    
    }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer 