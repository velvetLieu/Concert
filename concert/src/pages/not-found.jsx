/// Image imports
import { ReactComponent as Lotus } from "../images/lotus.svg";

/// CSS imports
import "./../styles/not-found.css";

function NotFound () {
  return (
    <>
    <div style={{ textAlign: 'center' }}>
      <Lotus className="lotus-svg" />
          <p style={{ fontSize: '2em' }}>404</p>
      <p>You look lost, why not hang around here for a bit?</p>
      <footer>
        <div style={{ fontSize: '0.7em' }}>Icons made by
          <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      </footer>
    </div>
    </>
  );
}

export default NotFound;
