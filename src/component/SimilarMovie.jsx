import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { imgURL } from '../service/apiconfig';
import { Link, useNavigate } from 'react-router-dom';



function SimilarMovie({movie}) {
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }
  return (
    <>
                    <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
             
              200: {
                slidesPerView: 2,
                spaceBetween: 5,
              },

              400: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
      
              810: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              
              1080: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {

                movie.map((movie) => (
                   
                        <SwiperSlide key={movie.id}>
                               
                                <img onClick={() => handleDetails(
                                    movie.id
                                )} src={`${imgURL}${movie.poster_path}`} className="slideImg" /> 
                            
                        </SwiperSlide>
                    
                ))     
            
               
            }
        
        </Swiper>
            
    </>
  )
}

export default SimilarMovie