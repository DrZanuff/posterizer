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
