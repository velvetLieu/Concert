import "./../styles/taskbar.css";
import "./../styles/root.css";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Icon from "./../images/profile-user.png";


function AccountIcon () {
  return (
    <>
    <Link to="/account" style={{ textDecoration: 'none' }}>
        <Image src={ Icon } className="account-icon" alt=""/>
        <p className="account-text">Account</p>
    </Link>
    </>
  );
}

export default AccountIcon;
