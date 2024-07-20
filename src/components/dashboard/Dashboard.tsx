// import Options from "./Options";
import { useSelector } from 'react-redux';
import '../../scss/pages/Dashboard.scss'
import Section from './Section';
import { useEffect } from 'react';
import { setDataToLS } from '../../utils/LS';
import { RootState } from '../../redux';

export interface IQuestion {
   answer: string,
   id: number,
   questionText: string
}

export interface ISection {
   id?: string,
   name: string,
   questions: IQuestion[]
}

const Dashboard: React.FC = () => {

   const sections: ISection[] = useSelector((state: RootState) => state.section.doneSections);   

   useEffect(()=> {
      setDataToLS('sections', sections);
   }, [sections])

   return (
      <main className="main">
         <div className="wrapper">
            {/* <Options /> */}
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