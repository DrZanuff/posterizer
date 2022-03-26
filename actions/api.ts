import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/',
})

export interface Post {
  id: number
  title: string
  content: string
  username: string
  created_datetime: string
}

interface getPostsData {
  count: number
  next: string | null
  previous: string | null
  results: Post[]
}

interface createPostData {
  username: string
  title: string
  content: string
}

interface editPostData {
  title: string
  content: string
}

export const getPosts = async (endPoint: string) => {
  let response
  try {
    const { data } = await api.get<getPostsData>(endPoint)
    // console.log('API RESPONSE', data)
    response = data
  } catch (e) {
    console.log(e)
  }

  return response
}

export const createPost = async (payload: createPostData) => {
  let response

  try {
    const { data } = await api.post<Post>('', payload)
    response = data
  } catch (e) {
    console.log(e)
  }

  return response
}

export const editPost = async (id: number, payload: editPostData) => {
  let response

  try {
    const { data } = await api.patch(`${id}/`, payload)
    response = data
  } catch (e) {
    console.log(e)
  }

  return response
}

export const deletePost = async (id: number) => {
  try {
    await api.delete(`${id}/`)
  } catch (e) {
    console.log(e)
  }
}
