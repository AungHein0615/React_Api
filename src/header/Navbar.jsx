import React from 'react'
import "./navbar.css"
import {LuLayoutDashboard} from 'react-icons/lu'
import {BsFillCameraReelsFill} from 'react-icons/bs'
import {MdCameraRoll ,MdOutlineCamera} from 'react-icons/md'
import {TbCameraDollar} from 'react-icons/tb'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
        <div className='container-fluid'>
            <div className="row header">

                <div className='logoArea'>
                    <LuLayoutDashboard size={22} className='logoIcon' />
                    <h3 className='title'>TMDB</h3>
                </div>

                <div className='middleArea'>

                    <Link to="/" className='home'>
                        <BsFillCameraReelsFill className='homeIcon' />
                        <h5>Now</h5>
                    </Link> 

                    <Link to="/Dashboard"  className='dashboard'>
                        <MdCameraRoll className='boardIcon' />
                        <h5>Popular</h5>
                    </Link>

                    <Link to="Profile" className='profile'>
                        <MdOutlineCamera className='profileIcon' />
                        <h5>TopRated</h5>
                    </Link>

                    <Link to="Setting" className='setting'>
                        <TbCameraDollar  className='settingIcon'/>
                        <h5>UpComing</h5>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
