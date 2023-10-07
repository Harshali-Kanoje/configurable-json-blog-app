import React from 'react'
import { Link } from 'react-router-dom'

export default function ReadPreview({title , description , author , id , publishdate , content}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={`/post/read/${id}`}>read more</Link>
    </div>
  )
}
