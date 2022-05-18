import { useMemo } from "react"


export const useSortQuery = (posts, sortPosts,) => {
    const sortedPosts = useMemo(() => {
        if (sortPosts) {
          return [...posts].sort((a,b) => a[sortPosts].localeCompare(b[sortPosts]))
        }
        return posts
      }, [sortPosts, posts])
      return sortedPosts
}