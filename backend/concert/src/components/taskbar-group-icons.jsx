import "./../styles/taskbar.css";
import "./../styles/root.css";
import GroupIcon from "./group-icon";


function TaskBarGroupIcons () {
  return (
    <>
    <ul>
      <li>
        <GroupIcon />
      </li>
      <li>
          <GroupIcon />
      </li>
      <li>
          <GroupIcon />
      </li>
    </ul>
    </>
  );
}

export default TaskBarGroupIcons;
