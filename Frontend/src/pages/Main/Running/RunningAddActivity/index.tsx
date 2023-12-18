import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

interface Activity {
  title: string;
  description: string;
  distance: number;
  time: number;
  calorie: number;
}

interface YourModalProps {
  open: boolean;
  handleClose: () => void;
  handleAddActivity: () => void;
  newActivity: Activity;
  setNewActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const YourModal: React.FC<YourModalProps> = ({
  open,
  handleClose,
  handleAddActivity,
  newActivity,
  setNewActivity,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddActivity();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Activity</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={newActivity.title}
            onChange={(e) =>
              setNewActivity({ ...newActivity, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            value={newActivity.description}
            onChange={(e) =>
              setNewActivity({
                ...newActivity,
                description: e.target.value,
              })
            }
          />
          <TextField
            label="Distance (km)"
            fullWidth
            margin="normal"
            type="number"
            value={newActivity.distance}
            onChange={(e) =>
              setNewActivity({
                ...newActivity,
                distance: Number(e.target.value),
              })
            }
          />
          <TextField
            label="Time (hours)"
            fullWidth
            margin="normal"
            type="number"
            value={newActivity.time}
            onChange={(e) =>
              setNewActivity({
                ...newActivity,
                time: Number(e.target.value),
              })
            }
          />
          <TextField
            label="Calorie Burn (cal)"
            fullWidth
            margin="normal"
            type="number"
            value={newActivity.calorie}
            onChange={(e) =>
              setNewActivity({
                ...newActivity,
                calorie: Number(e.target.value),
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            sx={{
              background: '#a7ffeb',
              color: 'black',
              '&:hover': {
                background: '#1de9b6',
                color: 'black',
              },
            }}
            type="submit"
          >
            Add Activity
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default YourModal;
