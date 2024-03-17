import '../scss/components/Header.scss';
import blackCube from '../assets/img/black-cube.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
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