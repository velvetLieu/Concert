import Button from 'react-bootstrap/Button';
import { IoPeopleCircleSharp } from "react-icons/io5";


function CreateGroupButton ({onButtonClick}) {
  return (
    <>
      {/* Create group button */}
      <Button style={{ background: 'none', border: 'none' }} onClick={onButtonClick}>
        <IoPeopleCircleSharp />
        Create Group
      </Button>

    </>
  );
}

export default CreateGroupButton;
