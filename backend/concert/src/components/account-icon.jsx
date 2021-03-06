import "./../styles/taskbar.css";
import "./../styles/root.css";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Icon from "./../images/profile-user.png";


function AccountIcon () {
  return (
    <>
    <Link to="">
        <Image src={ Icon } className="account-icon" alt=""/>
    </Link>
    </>
  );
}

export default AccountIcon;
