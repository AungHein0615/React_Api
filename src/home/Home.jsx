import React, { useEffect, useState } from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import { apiKey, imgURL } from '../service/apiconfig'

// let apikey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDU0MzEzN2I2YmZiOTgwOTViOTJjMGJkNDNiNTUyNyIsInN1YiI6IjY1MjM5ZDAxMDcyMTY2NDViOTE5NjhiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5tBVISBSsO5-l-8Y-JNH8JWUthZG3b3JuGT759ePM8'

const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`


function Home() {
  
  const [movie,setMovie] = useState([])

  async function getData (){
    
    const response = await fetch(url,{
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
      }
    })
    const movie = await response.json()
    setMovie(movie.results)
    
  }

  

  useEffect(() => {
    getData()
  },[])

  return (
    
     
        <div className="container-fluid background">
          <div className="container pt-5">
        <div className="row cardBody pt-5">
         
          <h1>Now Showing Movie</h1>
          {movie.map((movie) => (
            <Link  key={movie.id} to={`/details/${movie.id}`} className="col-lg-2 col-md-3 col-6  position-relative  p-2" >
            <div className='card' >
              <div className='sign'></div>
              <img src={`${imgURL}${movie.poster_path}`} className="img" />
              <div className='imgCover'></div>
              
              <div className="circle">
                <div className="innerCircle">
                  <p>{movie.vote_average}</p>
                </div>
              </div>
              <div className="cardTitle">{movie.original_title}</div>
              <div className="date">{movie.release_date}</div>
              
            </div>
            </Link>
          ))}
        
        </div>
        </div>
        </div>
     
    
  );
}

export default Home;