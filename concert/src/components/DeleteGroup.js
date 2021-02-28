import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import './../styles/DeleteGroup.css'

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
        textAlign: 'center'
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
        maxHeight: '40vh',
        minHeight: '40vh',
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

export default function DeleteGroup() {
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
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Delete Group
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth = {'xs'}
        >
          <DialogTitle id="form-dialog-title">Delete Group</DialogTitle>
          <DialogContent>
            <div className="dialog-container">
                <div className="text-container">
                  <p className='delete-group-p'>Are you sure you want to delete [Group-Name]?</p>
                  <p className='delete-group-p'>All contents will be deleted.</p>
                </div>
            </div>
          </DialogContent>
          <DialogActions className={classes.buttonPos}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
              Delete Group
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
