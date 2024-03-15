import React from 'react'

function Login() {
  return (
    <form className='login'>
        <label >Email o teléfono
        <input type="text" />
        </label>
        

        <label >Contraseña
        <input type="password" name="" id="" />
        </label>
        
        <a href="" className='olvido-contraseña'>¿Has olvidado tu contraseña?</a>
    </form>
  )
}

export default Login