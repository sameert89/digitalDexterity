import './stylesheets/App.css';
import MyNavbar from './MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MatrixBackground from './MatrixRain'
import Terminal from './components/Terminal';
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from 'react';
//fonts
import './fonts/consola.ttf';
import './fonts/cyberway.ttf';
import './fonts/os_condensed.ttf';

//images
import robotMistress from './images/bicAI.png'

//Data
import { term1Text } from './Data'

function App() {

  //for page snap
  const scrollRef = useRef(null);
  useScrollSnap({ref: scrollRef, duration: 50, delay: 20});
  return (
    <div className="App" ref={scrollRef}>
        <MyNavbar></MyNavbar>
          <div className='first_container' >
            <div className='term1'>
              <Terminal
                text={term1Text}
              />
              <div className='title'>Digital Dexterity</div>
            </div>
            <img className='bannerImage' src={robotMistress} alt='There is supposed to be something here'></img>
          </div>
        <div className='second_container'>
          
        </div>
        <div id='bg_2' style={{ width: '100', height: '102em' }}>
        <MatrixBackground></MatrixBackground>
      </div>

      
    </div>
  );
}

export default App;
