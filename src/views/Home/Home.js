import React from 'react'
import { Link } from 'react-router-dom'
import jwellery from './../Home/jwellery.webp'
import './Home.css'
import blogdata from './../../util/blogdata.json'
import ReadPreview from '../../component/ReadPreview/ReadPreview'


function Home() {
    

    return (
        <div className='home-container'>
            <h1>"A Dazzling Collection of Exquisite Jewelry, Gemstones, and Precious Adornments for the Discerning Connoisseur"</h1>
            <img src={jwellery}/>
            <div className='card-container'>
            {
                blogdata.map((postdata) => {
                    const {name , price ,img , id} = postdata;
                    return(
                        <ReadPreview img={img} name={name} price={price} id={id}/>
                    )
                })
            }
            </div>
            
            {/* <Link to={'/post'}>post</Link> */}
        </div>
    )
}

export default Home
