// import Options from "./Options";
import '../../scss/pages/Dashboard.scss'
import Section from './Section';
import { useEffect } from 'react';
import { setDataToLS } from '../../utils/LS';
import { useAppSelector } from '../../utils/hooks';
import SelectMode from './SelectMode';

export interface IQuestion {
   answer?: string,
   id: number,
   questionText: string
}

export interface ISection {
   id?: string,
   name: string,
   questions: IQuestion[],
   showAnswerByDefault: boolean,
}

const Dashboard: React.FC = () => {

   const sections: ISection[] = useAppSelector(state => state.section.doneSections);   

   useEffect(()=> {
      setDataToLS('sections', sections);
   }, [sections])

   return (
      <main className="main">
         <div className="wrapper">
            {/* <Options /> */}
            <SelectMode />
            {sections.length > 0 ?
               <div className="sections">
                  {sections.map(item => {
                     return <Section key={item.id} item={item} />
                  })}
               </div>
               :
               <h1>LoopLearn</h1>
            }
         </div>
      </main>
   );
}

export default Dashboard;