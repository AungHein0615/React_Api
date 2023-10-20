import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiKey, imgURL } from '../service/apiconfig'
import MovieCard from '../component/MovieCard'

let url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

function Profile() {

  const [rated,setRated] = useState([])

  async function getRated(){
    const response = await fetch(url,{
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
  } } )
    const rated = await response.json()
    setRated(rated.results)
  }

  
 
  useEffect(() => {
    getRated()
  },[])

  return (
    <div className="container-fluid background">
      <div className="container pt-5">
      <div className="row cardBody pt-5">
        <h1>Top Rated Movie</h1>
        {
          rated.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))
        }
      </div>
      </div>
    </div>
  )
}


export default Profile