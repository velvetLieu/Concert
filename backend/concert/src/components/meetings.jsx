import "./../styles/sidebar.css";
import "./../styles/root.css";
import { Link } from "react-router-dom";
import { GoPlusSmall } from "react-icons/go";


function Meetings () {
  return (
    <>
    {/*<!-- Display Meetings -->*/}
    <div className="dash-section">

      <div className="sidebar-component">
      <h3 className="title" >Meetings</h3>
      <Link to=""><GoPlusSmall color ="white" /></Link>
      </div>

      <ul>
        <li>
          <Link to="" style={{ textDecoration: 'none', color: '#ffffff' }}>Meeting 1</Link>
      </li>
        <li>
          <Link to="" style={{ textDecoration: 'none', color: '#ffffff' }}>Meeting 2</Link>
        </li>
        <li>
          <Link to="" style={{ textDecoration: 'none', color: '#ffffff' }}>Meeting 3</Link>
        </li>
      </ul>

    </div>
    </>
  );
}

export default Meetings;
