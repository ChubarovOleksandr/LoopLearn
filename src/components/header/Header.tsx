import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ImportButton from '@components/header/ImportButton';
import Image from '@components/Image';
import { ImageNameEnum } from '@enums/imageNameEnum';
import { useAppSelector } from '@utils/hooks';

import '../../scss/pages/Header.scss';

const Header = () => {
  const isMounted = useRef(false);
  const location = useLocation();
  const sections = useAppSelector(state => state.section.doneSections);

  const isSpecialPage = location.pathname === '/create';

  if (isMounted.current) {
    const json = JSON.stringify(sections);
    localStorage.setItem('sections', json);
  }
  isMounted.current = true;

  return (
    <header className="header">
      <div className="wrapper">
        <NavLink to="/">
          <Image name={ImageNameEnum.Cube} alt={'logo'} className={'header-logo'} />
        </NavLink>
        {!isSpecialPage ? (
          <div className="headers__buttons">
            <NavLink to="create" className="header-button">
              Создать
            </NavLink>
            <ImportButton />
          </div>
        ) : (
          <div className="headers__buttons">
            <NavLink to="/" className="header-button">
              Назад
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
