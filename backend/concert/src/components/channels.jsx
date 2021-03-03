import "./../styles/sidebar.css";
import "./../styles/root.css";
import { Link } from "react-router-dom";
import { GoPlusSmall } from "react-icons/go";

function Channels () {
  return (
    <>
    {/*<!-- Display Channels -->*/}
    <div className="dash-section">

      <div className="sidebar-component">
      <h3 className="title">Channels</h3>
      <Link to=""><GoPlusSmall color ="white" /></Link>
      </div>

      <ul>
        <li>
          <Link to="" style={{ textDecoration: 'none', color: '#ffffff' }}># general</Link>
        </li>
        <li>
          <Link to="" style={{ textDecoration: 'none', color: '#ffffff' }}># Assignment 2</Link>
        </li>
        <li><Link to="" style={{ textDecoration: 'none', color: '#ffffff' }}># Quiz 3</Link>
      </li>
      </ul>
    </div>
    </>
  );
}

export default Channels;
