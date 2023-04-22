import '../fonts/cyberway.ttf';
import '../stylesheets/MainTitle.css'
function MainTitle(props){
    return(
        <div className='title'>{props.text}</div>
    )
}
export default MainTitle;