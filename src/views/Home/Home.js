import React from 'react'
import { Link } from 'react-router-dom'
import jwellery from './../Home/jwellery.webp'
import './Home.css'
import blogdata from './../../util/blogdata.json'
import ReadPreview from '../../component/ReadPreview/ReadPreview'


function Home() {
    

    return (
        <div className='home-container'>
            <h1 className='home-header'>"A Dazzling Collection of Exquisite Jewelry"</h1>
            <p>Exquisite Jewelry, Gemstones, and Precious Adornments for the Discerning Connoisseur</p>
            <img src={jwellery}/>
            <h1>Recent Blogs</h1>
            <div className='card-container'>
            {
                blogdata.map((postdata) => {
                    const {name , oldPrice ,img , id , currentPrice ,offer} = postdata;
                    return(
                        <ReadPreview img={img} name={name} currentPrice={currentPrice} oldPrice={oldPrice} id={id} offer={offer}/>
                    )
                })
            }
            </div>
            
            {/* <Link to={'/post'}>post</Link> */}
        </div>
    )
}

export default Home
