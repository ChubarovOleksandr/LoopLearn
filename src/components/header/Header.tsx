import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ImportButton from '@components/header/ImportButton';
import Image from '@components/Image';
import { ImageNameEnum } from '@enums/imageNameEnum';
import { LsKeysEnum } from '@enums/localStorageKeys';
import { RoutesEnum } from '@enums/routesEnum';
import { useAppSelector } from '@utils/hooks';
import { setDataToLS } from '@utils/LS';

import '../../scss/pages/Header.scss';

const Header = () => {
  const isMounted = useRef(false);
  const location = useLocation();
  const sections = useAppSelector(state => state.section.doneSections);

  const isOnHomePage = location.pathname === RoutesEnum.Home;

  useEffect(() => {
    const json = JSON.stringify(sections);
    setDataToLS(LsKeysEnum.Sections, json);
  });

  isMounted.current = true;

  return (
    <header className="header">
      <div className="wrapper">
        <NavLink to={RoutesEnum.Home}>
          <Image name={ImageNameEnum.Cube} alt={'logo'} className={'header-logo'} />
        </NavLink>
        {isOnHomePage ? (
          <div className="headers__buttons">
            <NavLink to={RoutesEnum.Create} className="header-button">
              Создать
            </NavLink>
            <ImportButton />
          </div>
        ) : (
          <div className="headers__buttons">
            <NavLink to={RoutesEnum.Home} className="header-button">
              Назад
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
