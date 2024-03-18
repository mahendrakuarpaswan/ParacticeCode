import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
  return (
         
           <nav style={{display:'flex',justifyContent:'center',margin:'10px',padding:'10px',gap:'10px'}}>

                     <NavLink to="/about">About</NavLink>  

                     <NavLink to="/contact">Contact</NavLink> 

                     <NavLink to="/information">Information</NavLink>

           </nav>

             
     
  )
}

export default React.memo(Header)