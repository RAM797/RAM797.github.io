import React, {useState} from 'react';
import 'react-tabs/style/react-tabs.css';
import IconTabs from './Tabs';
import './App.css';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
const getBackgroundImage = (tabIndex) => {
  // logic to determine the background image based on tabIndex
  // for example:
  const backgrounds = ['ram.jpg',
                       'aggiepark.jpg',
                       'aggiepark.jpg',
                        'aggiepark.jpg',
                        'aggiepark.jpg'];
  return backgrounds[tabIndex];
};

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState('ram.jpg');

  const handleTabChange = (tabIndex) => {
    console.log(tabIndex);
    console.log(getBackgroundImage(tabIndex));
    setBackgroundImage(getBackgroundImage(tabIndex));
  };

  return (
    <div className='App'>
      <header>
          <h1>Ram Sankar Koripalli</h1>
      </header>
      <IconTabs onTabChange={handleTabChange}/>
      <div style={{ backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh' }}>

      </div>
    </div>
  );
};

export default App;
