import 'animate.css/animate.compat.css'
import ScrollAnimation from "react-animate-on-scroll";
function Tabloid({src, size}){
    size = size || '14vh';
    return(
        <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={false}>
            <img src = {src} style={{width: size, display: 'inline'}} alt = "tabloid"></img> 
        </ScrollAnimation>
    );
}
export default Tabloid;