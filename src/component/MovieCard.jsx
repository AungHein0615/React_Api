import React from 'react'
import { Link } from 'react-router-dom'
import { imgURL } from '../service/apiconfig'

function MovieCard({data}) {

  return (
    <Link  key={data.id} to={`/details/${data.id}`} className="col-lg-2 col-md-3 col-6  position-relative  p-2" >
            <div className='card' >
              <div className='sign'></div>
              <img src={`${imgURL}${data.poster_path}`} className="img" />
              <div className='imgCover'></div>
              
              <div className="circle">
                <div className="innerCircle">
                  <p>{data.vote_average}</p>
                </div>
              </div>
              <div className="cardTitle">{data.original_title}</div>
              <div className="date">{data.release_date}</div>
              
            </div>
    </Link>
  )
}

export default MovieCard