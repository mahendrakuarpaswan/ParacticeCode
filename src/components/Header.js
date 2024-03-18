import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
  
            console.log("=====Header Type==",props.type);
            

  return (
         
           <nav style={{display:'flex',justifyContent:'center',margin:'10px',padding:'10px',gap:'10px'}}>

                     <NavLink to="/about">{props.counter1}</NavLink>  

                     <NavLink to="/contact">Contact</NavLink> 

                     <NavLink to="/information">Information</NavLink>

           </nav>

             
     
  )
}

export default React.memo(Header)