import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import './../styles/CreateGroup.css'
import CreateChannelButton from './../components/create-channel-button';
import { brown } from "@material-ui/core/colors";

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
        maxHeight: '50vh',
        minHeight: '50vh',
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
      xs: 0,
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

export default function CreateChannel() {
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

        {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Click
        </Button> */}
        <CreateChannelButton  onButtonClick={handleClickOpen} />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth = {'sm'}
        >
          <DialogTitle id="form-dialog-title">Add Channel
          </DialogTitle>
          <p>to COMP491 Concert</p>
          <DialogContent>
            <div className="dialog-container">
              <div className="textfield-container">
                  <p>Channel Name: #</p>
                  <TextField
                    margin="dense"
                    id="textfield-name"
                    type="text"
                    variant="outlined"
                    size="small"
                  />
                </div>
            </div>
          </DialogContent>
          <DialogActions className={classes.buttonPos}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
