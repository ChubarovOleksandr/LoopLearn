// import Options from "./Options";
import React, { useEffect } from 'react';

import { SectionInterface } from '@pages/dashboard/interfaces';
import Section from '@pages/dashboard/Section';
import SelectMode from '@pages/dashboard/SelectMode';
import { ThemeToggleButton } from '@pages/dashboard/ThemeToggleButton';
import { useAppSelector } from '@utils/hooks';
import { setDataToLS } from '@utils/LS';

import '../../scss/pages/Dashboard.scss';

const Dashboard: React.FC = () => {
  const sections: SectionInterface[] = useAppSelector(state => state.section.doneSections);

  useEffect(() => {
    setDataToLS<SectionInterface[]>('sections', sections);
  }, [sections]);

  return (
    <main>
      <div className="wrapper">
        {/* <Options /> */}
        <SelectMode />
        {sections.length > 0 ? (
          <div className="sections">
            {sections.map(item => {
              return <Section key={item.id} item={item} />;
            })}
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
