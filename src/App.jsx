
import './App.css';
import Aboutme from './component/profile/Aboutme.jsx';
import './index.css';
import Education from './component/education/Education';
import Experience from './component/experience/Experience.jsx';

function App() {
  return (
    <div className='w-full mt-8 px-40 py-20'>
        <p className="text-blue-600 dark:text-sky-400">
          Hello world!
        </p>

        <Aboutme />
        <Education />
        <Experience />
        
    </div>
  );
}

export default App;
