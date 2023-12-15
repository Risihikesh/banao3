import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import SlideCarousal from './components/SlideCarousal';

function App() {
  const totalPages = 7; // Total number of pages
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && activePage < totalPages) {
        setActivePage(activePage + 1);
      } else if (event.deltaY < 0 && activePage > 1) {
        setActivePage(activePage - 1);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activePage]);


  return (
    <div className="App">
      <div className='md:hidden '>
        {activePage === 1 && <Page1 />}
        {activePage === 2 && <Page2 />}
        {activePage === 3 && <Page3 />}
        {activePage === 4 && <Page4 />}
        {activePage === 5 && <Page5 />}
        {activePage === 6 && <Page6 />}
        {activePage === 7 && <Page7 />}
      </div>

      <div>
        <SlideCarousal  />
      </div>
    </div>
  );
}

export default App
