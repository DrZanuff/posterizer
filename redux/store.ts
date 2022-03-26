import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './usernameSlice'
import nexturlReducer from './nexturlSlice'
import postsReducer from './postsSlice'

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    nexturl: nexturlReducer,
    postlist: postsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
