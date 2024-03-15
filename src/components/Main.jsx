// import Options from "./Options";
import '../scss/components/Main.scss'
import Section from './Section';

const Main = () => {
   return (
      <main className="main">
         <div className="wrapper">
            {/* <Options /> */}
            <div className="sections">
               <Section />
               <Section />
               <Section />
               <Section />
            </div>
         </div>
      </main>
   );
}

export default Main;