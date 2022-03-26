import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NextUrlState {
  url: string | null
}

const initialState: NextUrlState = {
  url: null,
}

export const usernameSlice = createSlice({
  name: 'nexturl',
  initialState,
  reducers: {
    setNexturl: (state, action: PayloadAction<string>) => {
      state.url = action.payload
    },
  },
})

export const { setNexturl } = usernameSlice.actions

export default usernameSlice.reducer
