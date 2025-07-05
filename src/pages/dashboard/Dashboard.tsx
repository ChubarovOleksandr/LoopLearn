// import Options from "./Options";
import '../../scss/pages/Dashboard.scss';
import Section from './Section';
import React, { useEffect } from 'react';
import { setDataToLS } from '../../utils/LS';
import { useAppSelector } from '../../utils/hooks';
import SelectMode from './SelectMode';
import { ThemeToggleButton } from './ThemeToggleButton';
import { SectionInterface } from './interfaces';

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
