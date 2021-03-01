import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";


function HomeButton () {
  return (
    <>
    <Link to="">
      <Button style={{ background: 'none', border: 'none' }}>
        <TiHomeOutline />
        Home
      </Button>
    </Link>
    </>
  );
}

export default HomeButton;
