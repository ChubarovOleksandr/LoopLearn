import { useState } from 'react';
import eyeMoving from '../assets/gif/eye.gif'
import eye from '../assets/img/eye.png'
import '../scss/components/Auth.scss'
import { NavLink } from 'react-router-dom';

const LogIn = () => {

   const [isIcon, setIsIcon] = useState(true);
   const [showPassword, setShowPassword] = useState(false);

   return <main className='auth'>
      <div className="container">
         <div className="title">LoopLearn</div>
         <form action="" onClick={(e) => e.preventDefault()} className="LogInForm">
            <input type="text" className='username' placeholder='Enter your login' />
            <label>
               <button 
                  onClick={()=>setShowPassword(!showPassword)}
                  onMouseEnter={() => setIsIcon(false)}
                  onMouseLeave={() => setIsIcon(true)}
               >
                  {isIcon ? (
                     <img src={eye} alt="Eye" />
                  ) : (
                     <img src={eyeMoving} alt="Eye gif" />
                  )}
               </button>
               <input type={showPassword ? 'text' : 'password'} className='password' placeholder='Password' />
            </label>
            <button className='main-button'>Log In</button>
         </form>
         <NavLink to='/sign-up' className='second-button'>Sign Up</NavLink>
         <button className='recovery-button'>Forgot your password?</button>
      </div>
   </main>
}

export default LogIn;