import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogdata from './../../util/blogdata.json'

function ReadPost() {
  const {id} = useParams({})
  const [post , setPost] = useState({})

  useEffect(() => {
    blogdata.forEach((postobj) => {
      if(postobj.id == id){
        setPost(postobj)
      }
     
    })
  },[id])
  

  return (
    <div>
      <p>{post.title}</p>
    </div>
  )
}

export default ReadPost
