import '../scss/components/Header.scss';
import blackCube from '../assets/img/black-cube.png';

const Header = () => {
   return (
      <header className="header">
         <div className="wrapper">
            <div><img src={blackCube} alt="logo" className="header-logo" /></div>
            <div>
               <button className="header-button">
                  Создать раздел
               </button>
            </div>
         </div >
      </header>
   );
}

export default Header;