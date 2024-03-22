import { NavLink } from 'react-router-dom';
import '../scss/components/Auth.scss'

const SignUp = () => {

   return <main className='auth'>
      <div className="container">
         <div className="title">LoopLearn</div>
         <form action="" onClick={(e) => e.preventDefault()} className="SignUpForm">
            <input type="email" className='email' placeholder='Enter your e-mail' />
            <input type="text" className='username' placeholder='Login' />
            <input type="password" className='password' placeholder='Password'/>
            <button className='main-button'>Sign Up</button>
         </form>
         <NavLink to='/log-in' className='second-button'>Log In</NavLink>
      </div>
   </main >
}

export default SignUp;