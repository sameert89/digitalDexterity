import 'animate.css/animate.compat.css'
import { motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Tabloid({src, size}){
    const {ref, inView} = useInView();
    const animation = useAnimation();
    useEffect(()=>{
        if(inView){
            animation.start({
                opacity: 1,
                y: 0,
                transition:{type: 'spring', duration: 2}
            })
        }
        if(!inView){
            animation.start({
                opacity: 0,
                y : '2vh'
            })
        }
    }, [inView]);
    size = size || '14vh';
    return(
        <motion.div ref={ref} animate={animation}>
            <img src = {src} style={{width: size, display: 'inline'}} alt = "tabloid"></img> 
        </motion.div>
            
    );
}
export default Tabloid;