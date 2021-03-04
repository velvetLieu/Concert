import Button from 'react-bootstrap/Button';
import { GoPlus } from 'react-icons/go';
import { IoPeopleCircleSharp } from "react-icons/io5";
import { GoPlusSmall } from "react-icons/go";

function CreateChannelButton ({onButtonClick}) {
  return (
    <>
    
      <Button style={{ background: 'none', border: 'none' }} onClick={onButtonClick}>
        <GoPlusSmall color="white"/>
      </Button>
    
    </>
  );
}

export default CreateChannelButton;
