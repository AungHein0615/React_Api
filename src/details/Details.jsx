import React, { useEffect, useState } from "react";
import "./details.css"
import { useParams } from "react-router";
import { apiKey, imgURL, url } from "../service/apiconfig";
import SimilarMovie from "../component/SimilarMovie";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Details () {

    const [details,setDetails] = useState([])
    const [type,setType] = useState([])
    const [similar,setSimilar] = useState([])
    const [production_companies,setProduction_companies] = useState([])
    const [production_countries,setProduction_countries] = useState([])
    const [spoken_languages,setSpoken_languages] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    
    const {id:movieID} = useParams()
    
    async function getSimilar(){
        setIsLoading(true)
        const response = await fetch(`${url}/movie/${movieID}/similar?language=en-US&page=1`,{
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
  }
        })

        
        const similar = await response.json()
        setSimilar(similar.results)   
        setIsLoading(false)     
    }

    async function getDetails () {
        const response = await fetch(`${url}/movie/${movieID}?language=en-US`,{
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
  }
        })
        const details = await response.json()
        setDetails(details)
        console.log(details)
        const type = details.genres
        setType(type)
        const production_companies = details.production_companies
        setProduction_companies(production_companies)
        const production_countries = details.production_countries
        setProduction_countries(production_countries)
        const spoken_languages = details.spoken_languages
        setSpoken_languages(spoken_languages)
        console.log(similar)
    }

    useEffect(() => {
        getDetails()
        getSimilar()
        return () => {
            setDetails([])
            setSimilar([])
        }
    },[movieID])

    let isOk= isLoading || details.length <= 0 

    return (
       
        <> {
            isOk ? (
                <div><h1 className="h-25 bg-dark">Loading...</h1></div>
            ) :  (
                <>
                <div className="container pt-5">
                    <div className="row">

                       
                        <div className="col-lg-4 imgField">

                        <div className="mt-3 pc-container d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div className="pc_cover">
                                 <img src={`${imgURL}${details.poster_path}`} className="pcImg"  /> 
                            </div>
                        </div>

                       

                        <div className="mt-3 md-container d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                            <div className="md-cover">
                                <img src={`${imgURL}${details.backdrop_path}`} className="mdImg" />  
                                <div className="cover"></div>
                                  <img src={`${imgURL}${details.poster_path}`} className="detailImg" />
                                
                            </div>
                        </div>
                </div> 
                <div className="col-lg-8 ">
                    <div className="textField">
                    <h3 className="detailDate">
                    Release Date : {details.release_date}</h3>
                    <h3 className="detailTitle">Title : {details.original_title}</h3>

                    <h3 className="detailRating"> Rating : {details.vote_average} </h3>

                    <h3 className="detailOverView">OverView : {details.overview}</h3> <hr/>
                   
                    <div className="companyField">
                        <h3> Production Company</h3>
                        <div className="row cardRow ">
                        {
                            production_companies.map((company) => (
                              
                                 <div key={company.id} className="companyCard col-sm-12 col-md-12 col-lg-6">
                                     <img src={`${imgURL}${company.logo_path}`} className="logoImg" />
                                    <h3 className="company">{company.name}</h3>
                                   
                    
                                </div>
                               
                            ))
                        }
                        </div>
                    </div>

                    <div className="countryField">
                        Production Countries : 
                        {
                            production_countries.map((country) => (
                                <h3 key={country.id} className="country">{country.name}</h3>
                                
                            ))
                        }
                    </div> 

                    <div className="languageField">
                        Spoken Language :
                        {
                            spoken_languages.map((language) => (
                                <h3 className="language" key={language.id}>{language.english_name},</h3>
                            ))
                        }
                    </div>

                    <h3 className="tag"><span className="tagline">TagLine : </span>{details.tagline}</h3>
                    </div>
                    
                </div> 

               
            
            </div>
            
           </div>
           <div className='container mt-2 mb-2'>
           <h1 className="similarMovie">Similar Movie</h1>
                <div className='row'>
                

    
                <SimilarMovie movie={similar} />
            
             
            
             </div>
             </div>
            </>
          
            )
        }
       
       </>
    )
}

export default Details




