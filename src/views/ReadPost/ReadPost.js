import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogdata from './../../util/blogdata.json'
import Button from '../../component/Button/Button'
import './ReadPost.css'

function ReadPost() {
  const { id } = useParams({})
  const [post, setPost] = useState({})

  useEffect(() => {
    blogdata.forEach((postobj) => {
      if (postobj.id == id) {
        setPost(postobj)
      }

    })
  }, [id])


  return (
    <div className='read-post-container'>
      <div className='read-post-image'>
        <img src={post.img} alt='errrt' />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.smallDescription}</p>
        <span>{post.currentPrice}</span>
        <del>{post.oldPrice}</del>{post.offer}
        <p>Delivery Date : {post.publishDate}</p>
         <Button/>
        <p>{post.content}</p>
      </div>

    </div>
  )
}

export default ReadPost
