import '../../scss/components/Header.scss';
import blackCube from '../../assets/img/black-cube.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const Header = () => {

   const sections = useSelector(state => state.section.doneSections);
   const isMounted = useRef(false);

   if(isMounted.current){
      const json = JSON.stringify(sections);
      localStorage.setItem('sections', json);
   }
   isMounted.current = true;

   return (
      <header className="header">
         <div className="wrapper">
            <NavLink to="/"><img src={blackCube} alt="logo" className="header-logo" /></NavLink>
            <div>
               <NavLink to="create" className="header-button">
                  Создать раздел
               </NavLink>
            </div>
         </div >
      </header>
   );
}

export default Header;