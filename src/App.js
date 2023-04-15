import './stylesheets/App.css';
import MyNavbar from './MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import MatrixBackground from './MatrixRain'
import Terminal from './components/Terminal';
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from 'react';
import { GlitchImage } from 'react-glitch-image';
import Title from './components/Title';
import Tabloid from './components/Tabloid';
//fonts
import './fonts/consola.ttf';
import './fonts/cyberway.ttf';
import './fonts/os_condensed.ttf';

//images
import robotMistress from './images/bicAI.png'
import pfp from './images/bitmap.png'
import js from './images/js.png'
import html from './images/html.png'
import css from './images/css.png'
import node from './images/NODE.png'
import react from './images/react.png'
import mongo from './images/mongo.png'
import bootstrap from './images/bs.png'
import cpp from './images/c++.png'
import gmail from './images/gmail.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import whatsapp from './images/whatsapp.png'
import resume from './images/resumeButton.png'
import hireme from './images/hiremeButton.png'
//Data
import {term1Text, term2text, term3text} from './Data'

function App() {

  //for page snap
  const scrollRef = useRef(null);
  useScrollSnap({ref: scrollRef, duration: 60, delay: 20});
  return (
    <div className="App" ref={scrollRef}>
        <MyNavbar></MyNavbar>
          <div className='first_container' >
            <div className='term1'>
              <Terminal
                text={term1Text}
                sizer = {{w: 2.3, h: 2.46, f: '1.7em'}}
              />
              <div className='title'>Digital Dexterity</div>
            </div>
            <img className='bannerImage' src={robotMistress} alt='There is supposed to be something here'></img>
          </div>
        <div className='second_container'>
          {/* <div className='image'> */}
          <GlitchImage image={pfp} width={"30%"} animationDuration={10} animationInterval={2000}
          activeFxOnHover={0}/>
          
          {/* </div> */}
          <div className='second_terminal'>
            <Terminal text = {term2text} sizer = {{w: 2.3, h: 2.46, f:"1.7em"}}/>
          </div>
        </div>
        <div className='fourth_container'>
          <Title text ='About'></Title>
          <Terminal text = {term3text} sizer = {{w: 1.4, h: 1.6, f: '1.2em'}}/>
        </div>
        <div className='third_container'>
          <Title text = "Skills"/>
          <div className='icon_set'>
          <Tabloid src = {html}></Tabloid>
          <Tabloid src = {css}></Tabloid>
          <Tabloid src = {js}></Tabloid>
          <Tabloid src = {bootstrap}></Tabloid>
          <Tabloid src = {node}></Tabloid>
          <Tabloid src = {react}></Tabloid>
          <Tabloid src = {mongo}></Tabloid>
          <Tabloid src = {cpp}></Tabloid>
          </div>
  
        </div>
        <div className='fifth_container'>
          <Title text ="Contacts"></Title>
          <div className='icon_set'>
            <Tabloid src = {gmail}/>
            <Tabloid src = {linkedin}/>
            <Tabloid src = {github}/>
            <Tabloid src = {whatsapp}/>
          </div>
          <div className='btns'>
          <a href=''>
            <Tabloid src = {resume} size = {'30vh'}/>
            </a>
            <Tabloid src = {hireme} size = {'30vh'}/>
          </div>
        </div>
        <div id='bg_2' style={{ width: '100' }}>
        <MatrixBackground></MatrixBackground>
      </div>

      
    </div>
  );
}

export default App;
