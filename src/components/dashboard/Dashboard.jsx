// import Options from "./Options";
import { useSelector } from 'react-redux';
import '../../scss/pages/Dashboard.scss'
import Section from './Section';
import { useEffect } from 'react';
import { setDataToLS } from '../../utils/LS';

const Dashboard = () => {

   const sections = useSelector(state => state.section.doneSections);

   useEffect(()=> {
      setDataToLS('sections', sections);
   }, [sections])

   return (
      <main className="main">
         <div className="wrapper">
            {/* <Options /> */}
            {sections.length != 0 ?
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