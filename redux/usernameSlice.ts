import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UsernameState {
  name: string | null
}

const initialState: UsernameState = {
  name: null,
}

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { setName } = usernameSlice.actions

export default usernameSlice.reducer
