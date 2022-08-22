import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const auth=localStorage.getItem('data')
  const navigate=useNavigate()
  function logout(){
   
  localStorage.clear()
  navigate('/signup')
  }
  return (
     <> 
   
    <div className='header d-flex justify-content-center '>
         
        {auth ? <ul className='nav justify-content-center nav' >
       
         <li><Link  className='link' to="/profile">View User Detail</Link></li>
         <li><Link  className='link' to="/home">Weather Detail</Link></li>
         <li><Link onClick={()=>{logout()}} className='link' to="/">Logout</Link></li>
         </ul>   
          :
          <>
        
          <ul className="nav justify-content-center nav">
              <li className="nav-item">
              <li><Link className='link' to="/">Signup</Link></li>
              </li>
              <li className="nav-item">
              <li> <Link className='link' to="/login">login</Link></li>
              </li>
          </ul>
        
          </>
            }
          
 
    </div>
    </>
  )
}

export default Header;