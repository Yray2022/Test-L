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
export const useSortedPostsQuery = (getSortedPost, sortedPosts) => {
  const sortedAndQueryPost = useMemo(() => { 
    return sortedPosts.filter(post => post.title.includes(getSortedPost))  
},[getSortedPost, sortedPosts])
    return sortedAndQueryPost
}
