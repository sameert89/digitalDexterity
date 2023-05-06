import "../fonts/cyberway.ttf";
import "../stylesheets/MainTitle.css";
function MainTitle(props) {
  return (
    <div className="title" style={{ fontSize: props.size || "8vw" }}>
      {props.text}
    </div>
  );
}
export default MainTitle;
