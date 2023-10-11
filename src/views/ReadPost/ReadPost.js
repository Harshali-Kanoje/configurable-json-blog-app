import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    <div>
<div className='read-post-container'>
      <div className='read-post-image'>
        <img src={post.img} alt='errrt' />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p className='description'>{post.smallDescription}</p>
        <span className='price'>{post.currentPrice}</span>
        <del className='price oldprice'>{post.oldPrice}</del><span className='offer'>{post.offer}</span>
        <p className='date'>Delivery Date : {post.publishDate}</p>
         <Button/>
        <p className='content'>{post.content}</p>
      </div>
      
    </div>
    <Link to={'/'} className='back'> Back To Home</Link>
    </div>
    
  )
}

export default ReadPost
