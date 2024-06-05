import { NavLink } from 'react-router-dom';
import '../../scss/pages/Auth.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registData } from '../../redux/slice/auth';

const SignUp = () => {

   const userData = useSelector(state => state.auth.userData);
   const dispatch = useDispatch();

   const [emailValue, setEmailValue] = useState(userData.email);
   const [usernameValue, setUserNameValue] = useState(userData.username);
   const [passwordValue, setPasswordValue] = useState(userData.password);

   const submitData = () => {
      dispatch(registData({email: emailValue, username: usernameValue, password: passwordValue}));
   }

   return <main className='auth'>
      <div className="container">
         <div className="title">LoopLearn</div>
         <form action="" onClick={(e) => e.preventDefault()} className="SignUpForm">
            <input type="email" className='email' onChange={(e) => setEmailValue(e.target.value)} value={emailValue != '' ? emailValue : ''} placeholder='Введите е-мейл' />
            <input type="text" className='username' onChange={(e) => setUserNameValue(e.target.value)} value={usernameValue != '' ? usernameValue : ''} placeholder='Логин' />
            <input type="password" className='password' onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} placeholder='Пароль'/>
            <button className='main-button' onClick={() => submitData()} >Зарегестрироваться</button>
         </form>
         <NavLink to='/log-in' className='second-button'>Уже есть аккаунт?</NavLink>
      </div>
   </main >
}

export default SignUp;