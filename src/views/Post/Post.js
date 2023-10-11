import React from 'react'
import blogdata from './../../util/blogdata.json'
import ReadPreview from '../../component/ReadPreview/ReadPreview'
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div>
      <h1>Post</h1>
      <Link to={'/post/read'}>read</Link>
        {
            blogdata.map((postdata, index) => {
                const { id, name, price, author, publishdata, content } = postdata;
                return (
                    <ReadPreview id={id} price={price} name={name} author={author} publishdate={publishdata} content={content}/>
                )
            })
        }
      
    </div>
  )
}

export default Post
