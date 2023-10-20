import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiKey, imgURL } from '../service/apiconfig'
import MovieCard from '../component/MovieCard'

const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'


function Setting() {

  const [upcoming, setUpcoming] = useState([])

  async function getUpcoming(){
    const response = await fetch(url,{
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
  } 
    })

   const upcoming = await response.json()
   setUpcoming(upcoming.results)
   console.log(upcoming.results)
  }

  useEffect(() => {
    getUpcoming()
  },[])
  return (
    <div className="container-fluid background">
      <div className="container pt-5">
      <div className="row cardBody pt-5">
        <h1>Upcoming Movie</h1>
        {
          upcoming.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Setting