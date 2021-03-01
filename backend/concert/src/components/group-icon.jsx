import "./../styles/taskbar.css";
import "./../styles/root.css";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Icon from "./../images/emoji.jpg";


function GroupIcon () {
  return (
    <>
    <Link to="">
    <Image src={ Icon } className="group-icon" alt=""/>
    </Link>
    </>
  );
}

export default GroupIcon;
