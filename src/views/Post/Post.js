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
                const { id, title, description, author, publishdata, content } = postdata;
                return (
                    <ReadPreview id={id} description={description} title={title} author={author} publishdate={publishdata} content={content}/>
                )
            })
        }
      
    </div>
  )
}

export default Post
