import React from 'react'
import './ReadPreview.css'
import { Link } from 'react-router-dom'


export default function ReadPreview({name , price , img,id}) {
  return (
    <div className='card'>
      <img src={img}/>
      <h1>{name}</h1>
      <span>Rs {price}</span><br/>
      <Link to={`/post/read/${id}`} className='read'>Read More</Link>
    </div>
  )
}
