import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { imgURL } from '../service/apiconfig'
import MovieCard from '../component/MovieCard'

let apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDU0MzEzN2I2YmZiOTgwOTViOTJjMGJkNDNiNTUyNyIsInN1YiI6IjY1MjM5ZDAxMDcyMTY2NDViOTE5NjhiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5tBVISBSsO5-l-8Y-JNH8JWUthZG3b3JuGT759ePM8'

let URL = 'https://image.tmdb.org/t/p/original'

function DashBoard() {

  const [popular,setPopular] = useState([])

  async function getData(){
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
    })

    const popular = await response.json()
    setPopular(popular.results)
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <div className="container-fluid background">
      <div className="container pt-5">
       <div className="row cardBody pt-5">
        <h1>Now Popular Movie</h1>
        {popular.map((movie) => (
           <MovieCard data={movie} key={movie.id} />
        ))}
       </div>
       </div>
    </div>
  )
}

export default DashBoard

