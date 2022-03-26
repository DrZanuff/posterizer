import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Post } from '../actions/api'

export interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'postsArray',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
  },
})

export const { setPosts } = postsSlice.actions

export default postsSlice.reducer
