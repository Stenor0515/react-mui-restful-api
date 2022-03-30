import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "../App.css"

export default function BasicButtonGroup({ submitUserInfo, formData, updateFormData }) {

  const [open, setOpen] = React.useState(false);

  const handleClickDialogOpen = () => {
    setOpen(true);
  };

  const handleClickDialogClose = () => {
    setOpen(false);
  };

  return (
    <div className='button-group'>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={handleClickDialogOpen}>Create</Button>
        <Button color="error">Delete</Button>
      </ButtonGroup>
      <Dialog open={open} onClose={handleClickDialogClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) =>
              updateFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) =>
              updateFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            id="gender"
            label="Gender"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) =>
              updateFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            id="status"
            label="Status"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) =>
              updateFormData({
                ...formData,
                status: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose}>Cancel</Button>
          <Button onClick={submitUserInfo}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
