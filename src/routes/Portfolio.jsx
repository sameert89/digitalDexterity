/* IMPORTS */

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/Portfolio.css';

/* External Components */
import useScrollSnap from 'react-use-scroll-snap';
import { useRef} from 'react';
import { GlitchImage } from 'react-glitch-image';
import { motion } from 'framer-motion';

/* Internal Components */
import MainTitle from '../components/MainTitle';
import Terminal from '../components/Terminal';
import Title from '../components/Title';
import Tabloid from '../components/Tabloid';

/* Fonts */
import '../fonts/consola.ttf';
import '../fonts/os_condensed.ttf';

/* Images */
import robotMistress from '../images/bicAI.png'
import pfp from '../images/bitmap.png'
import js from '../images/js.png'
import html from '../images/html.png'
import css from '../images/css.png'
import node from '../images/NODE.png'
import react from '../images/react.png'
import mongo from '../images/mongo.png'
import bootstrap from '../images/bs.png'
import cpp from '../images/c++.png'
import gmail from '../images/gmail.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'
import resume from '../images/resumeButton.png'
import hireme from '../images/hiremeButton.png'

/* Data */
import { term1Text, term2text, term3text } from '../store/Data'


function Portfolio() {

    //for page snap
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 60, delay: 20 });
    // const [vWidth, updvWidth] = useState('1.6');
    return (
        <motion.div ref={scrollRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='section1' >
                <div className='term1'>
                    <Terminal
                        text={term1Text}
                        sizer={{ w: 2.3, h: 2.46, f: '1.6vw' }}
                    />
                    <MainTitle text='Digital Dexterity'/>
                </div>
                <img className='banner_image' src={robotMistress} alt='err'></img>
            </div>
            <div className='section2'>
                <GlitchImage image={pfp} width={"30%"} animationDuration={10} animationInterval={2000}
                    activeFxOnHover={0} />
                <div className='about_terminal'>
                    <Terminal text={term2text} sizer={{ w: 2.3, h: 2.46, f: "1.6vw" }} />
                </div>
            </div>
            <div className='section3'>
                <Title text='About'></Title>
                <Terminal text={term3text} sizer={{ w: 1.4, h: 1.6, f: '1.3vw' }} />
            </div>
            <div className='section4'>
                <Title text="Skills" />
                <div className='icon_set'>
                    <Tabloid src={html}></Tabloid>
                    <Tabloid src={css}></Tabloid>
                    <Tabloid src={js}></Tabloid>
                    <Tabloid src={bootstrap}></Tabloid>
                    <Tabloid src={node}></Tabloid>
                    <Tabloid src={react}></Tabloid>
                    <Tabloid src={mongo}></Tabloid>
                    <Tabloid src={cpp}></Tabloid>
                </div>

            </div>
            <div className='section5'>
                <Title text="Contacts"></Title>
                <div className='icon_set'>
                    <Tabloid src={gmail} />
                    <Tabloid src={linkedin} />
                    <Tabloid src={github} />
                    <Tabloid src={whatsapp} />
                </div>
                <div className='btns'>
                    <a href='#resumelink'>
                        <Tabloid src={resume} size={'30vh'} />
                    </a>
                    <a href="#hiremelink">
                        <Tabloid src={hireme} size={'30vh'} />
                    </a>
                </div>
            </div>

        </motion.div>
    );
}

export default Portfolio;
