import type { Post } from '../actions/api'

export function sortPostArrayByDate(arrayToSort: Post[]): Post[] {
  const sortedArray = arrayToSort
    .slice()
    .sort(
      (a, b) =>
        new Date(b.created_datetime).getTime() -
        new Date(a.created_datetime).getTime()
    )

  return sortedArray
}
