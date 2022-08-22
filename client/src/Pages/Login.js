import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Login = () => {
    const navigate=useNavigate();
    const [password,setPassword]=useState('')
            const [email,setEmail]=useState('')
            const URL='http://localhost:5000';
useEffect(()=>{

    const auth=localStorage.getItem('data');
    if(auth){
      navigate('/home')
    }
    else{
            console.log("INput right detail")
    }


},[])


       async function collectData(){
        console.log(email,password)
            if(email && password){
              try {
                let data=await fetch(`${URL}/login`,
                {
                    method:'POST',
                    body: JSON.stringify({email,password}),
                   headers:{
                        'Content-Type': 'application/json'
                    } 
                });
               let result= await data.json();
               console.log(result,'result')
              
               if(result.data){
                console.log(result.data,'success')
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
                if(result.auth){
                    localStorage.setItem('data',JSON.stringify(result.data));
                    localStorage.setItem('token',JSON.stringify(result.auth));
                    navigate('/home')
      
      
                }
                else{
                    alert('please Enter the detail above')
      
                }
              }
      
                
              } 
              catch (error) {
                console.log(error)
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Invalid Email and Password!',
                  footer: 'Input Right User Detail'
                })
                
              }



            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Warning Enter Detail!',
                footer: 'Enter Email and Password'
              })

            }
    
         



            }
        return (
        <div className='signup main'>
                <h1  className='sinput'>Login</h1>
                <input required type='email' placeholder='Enter the Email ' onChange={(e)=>{setEmail(e.target.value)}}  className='sinput'/><br></br>
                <input required type='password' placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}  className='sinput'/><br></br>
                
                <input type='submit' onClick={()=>{collectData()}} className='sinput btn btn-warning'/><br></br>
      </div>
        )
}

export default Login