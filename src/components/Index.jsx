// import Options from "./Options";
import { useSelector } from 'react-redux';
import '../scss/components/Index.scss'
import Section from './Section';

const Index = () => {

   const sections = useSelector(state => state.section.doneSections);

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

export default Index;