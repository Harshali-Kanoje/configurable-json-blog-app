import React from 'react'
import './ReadPreview.css'
import { Link } from 'react-router-dom'
import './ReadPreview.css'


export default function ReadPreview({ name, oldPrice, img, id, currentPrice, offer }) {
  return (
    <div className='card'>
      <img src={img} />
      <h1>{name}</h1>
      <div className='d-flex'>
      <div>
        <span className='price '> {currentPrice}</span>
        <del className='price oldprice'>{oldPrice}</del>
      </div>
      <div>
        <span className='offer'>  {offer} </span>
      </div>
      </div>
     

      <Link to={`/post/read/${id}`} className='read'>Read More</Link>
    </div>
  )
}
