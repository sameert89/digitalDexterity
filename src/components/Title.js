import "../stylesheets/Title.css"
// import ScrollAnimation from "react-animate-on-scroll";
function Title(props){
    return(
        <div>
            {/* <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={1}> */}
            <div className="subHeading">{props.text}</div>
            {/* </ScrollAnimation> */}
            
        </div>
    );
}

export default Title;