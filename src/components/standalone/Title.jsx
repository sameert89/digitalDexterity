import "../../stylesheets/standalone/Title.css"

function Title(props) {
    return (
        <div>
            <div className="subHeading" style={{ fontSize: props.fontSize }}>{props.text}</div>
        </div>
    );
}

export default Title;
