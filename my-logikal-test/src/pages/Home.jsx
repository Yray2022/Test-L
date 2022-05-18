import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../APi/PostServise';
import '../App.css';
import PostCreate from '../components/PostCreate';
import PostList from '../components/PostList';
import { useSortPosts } from '../hook/useFetfing';
import { useSortQuery } from '../hook/useSortPostsAndQuery';
import { getPageCount } from '../utils/pages';

function Home() {

  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [sortPosts, setSortPosts] = useState('')
  const [getSortedPost, setGetSortedPost] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  let pagesArray = useSortPosts(totalPages)
  let sortedPosts = useSortQuery(posts, sortPosts)


  useEffect(() => {
      fetchPosts() // загружаем посты 
  },[page])

  async function fetchPosts() { // запрос на сервер и дастам сотуда количество постов
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }

  const changePage = (page) => {
    setPage(page)
  }

  const sortedAndQueryPost = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(getSortedPost)) // 1 часть поиска ето хук в папке "hook"
  },[getSortedPost, sortedPosts])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  const addPost = () => {
    const newPost = {
      id: Date.now(),
      title: title,
      body: body,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <PostCreate addPost={addPost} title={title} body={body} setTitle={setTitle} setBody={setBody} getSortedPost={getSortedPost} setGetSortedPost={setGetSortedPost}/>
      {sortedAndQueryPost.length
      ? <PostList removePost={removePost} posts={sortedAndQueryPost}/>
      : <h1 className='h1'>Постов нет</h1>
      }
      <div className='page__wrapper'>
        {pagesArray.map(p => 
          <button  
          onClick={() => changePage(p)} 
          key={p} 
          className={page === p ?  'page page__current' : 'page'}>
            {p}
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;