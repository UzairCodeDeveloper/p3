import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate=useNavigate();
  return (
    <>
        <header>
      <div>
            <h1 id="name">Nauman Ali</h1>
            <p id="introduction">A student with high ambitions</p>
        </div>
        <img id="profile-image" src="profile.png" alt="Your Profile Image" />
    </header>

    <nav>
        <a href="#educational-history" onClick={()=>navigate('/')}>Home</a>
        <a href="" onClick={()=>navigate('/projects')}>Skills</a>
        <a href="#professional-projects" onClick={()=>navigate('/Skills')}>Projects</a>
        <a href="#hobbies" onClick={()=>navigate('/MyLife')}>My Life</a>
        
    </nav>
    </>
  )
}
