import React from 'react'

export const Formulario = () => {
  return (
    <div>
      
  <form>
    <div className='inpu'>
    <input className='relle1'  placeholder='First name'/>
    <input className='relle2' placeholder='Last name'/>
    <input type='password' className='relle3' placeholder='Password'/>
    <input  className='relle4' placeholder='Email'/>
    </div>
    <button className='btn'>Create account</button>
    <button className='btn2'>Change method</button>
    
    
    </form>   
    



    </div>
  )
}

export default Formulario
