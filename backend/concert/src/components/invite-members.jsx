import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { RiCloseLine } from "react-icons/ri";
import './../styles/invite-members-dialog.css';
import InviteButton from "./invite-button";


const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: {
          borderRadius: '10px',
      }
    },
    MuiTypography: {
      h6: {
        fontSize: '2.3rem',
        fontFamily: 'Quicksand',
        paddingBottom: '0px',
      }
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: '5px',
        paddingBottom: '5px',
      }
    },
    MuiDialog: {
      paper: {
        outlineStyle: 'dashed',
        outlineOffset: '-15px',
        outlineColor: '#959595',
        borderStyle: 'solid',
        borderColor: '#959595',
        maxHeight: '70vh',
        minHeight: '70vh',
        textAlign: 'center',
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#75A8CB',
      },
      textPrimary: {
        color: '#75A8CB',
      }
    }
  },
  breakpoints: {
    values: {
      xs: 500,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }
});

const useStyles = makeStyles(theme =>({
    root: {
    },

    buttonPos: {
        padding: "0 10px 30px 0",
        position: 'absolute',
        bottom: '0px',
        right: '20px',
    },
  }));

  const SelectedMemberButton = withStyles({
    root: {
      "&:hover": {
        fontFamily: "Quicksand",
        color: '#EAF0FC',
        background: '#0770a3',
      },
      fontFamily: 'Quicksand, sans-serif',
      fontSize: "0.8em",
      color: "#ffffff",
      background: "#75a8cb",
      padding: "0.2em 0.5em",
      margin: "0.2em",
      border: "none",
      borderRadius: "20px",
    },
  })(Button);

export default function InviteMember() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
          <InviteButton onButtonClick={handleClickOpen} />

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth = {'xs'}
        >

          <DialogTitle id="invite-form-dialog-title">Invite Members
          <div className="invite-members-text">to Room Name</div>
          </DialogTitle>


          <DialogContent>
              <div className="invite-dialog-container">
              <div className="invite-textfield-container">
                <h6 className="invite-members-h6">Add Member</h6>
                {/* TODO: Change text field to dropdown and search */}
                  <TextField
                    margin="dense"
                    id="textfield-invite"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Type to search members..."
                  />
              </div>

              <div className="selected-members-container">
                <SelectedMemberButton>Member Name<RiCloseLine /></SelectedMemberButton>
                <SelectedMemberButton>Member Name<RiCloseLine /></SelectedMemberButton>
                <SelectedMemberButton>Member Name<RiCloseLine /></SelectedMemberButton>
                  </div>
              </div>
          </DialogContent>

          <DialogActions className={classes.buttonPos}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            <Button variant="contained" onClick={handleClose} color="primary">
              Invite
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
