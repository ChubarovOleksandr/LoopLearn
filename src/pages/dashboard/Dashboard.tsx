import React, { useEffect } from 'react';

import { LsKeysEnum } from '@enums/localStorageKeys';
import Section from '@pages/dashboard/components/Section';
import SelectMode from '@pages/dashboard/components/SelectMode';
import { ThemeToggleButton } from '@pages/dashboard/components/ThemeToggleButton';
import { SectionInterface } from '@pages/dashboard/interfaces';
import { useAppSelector } from '@utils/hooks';
import { isNotEmptyArray } from '@utils/isData';
import { setDataToLS } from '@utils/LS';

import '../../scss/pages/Dashboard.scss';

const Dashboard: React.FC = () => {
  const sections: SectionInterface[] = useAppSelector(state => state.section.doneSections);

  useEffect(() => {
    setDataToLS<SectionInterface[]>(LsKeysEnum.Sections, sections);
  }, [sections]);

  return (
    <main>
      <div className="wrapper">
        <SelectMode />
        {isNotEmptyArray(sections) ? (
          <div className="sections">
            {sections.map(item => (
              <Section key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <h1>LoopLearn</h1>
        )}
        <ThemeToggleButton />
      </div>
    </main>
  );
};

export default Dashboard;
