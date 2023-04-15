import "../stylesheets/Title.css"
function Title(props){
    return(
        <div>
            <div className="subHeading">{props.text}</div>
        </div>
    );
}

export default Title;