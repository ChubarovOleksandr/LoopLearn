import '../../scss/pages/Header.scss';
import blackCube from '../../assets/img/black-cube.png';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useAppSelector } from '../../utils/hooks';

const Header = () => {

   const sections = useAppSelector(state => state.section.doneSections);
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