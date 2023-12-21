// ModalProfile.tsx
import React from 'react';
import {
  Modal,
  Slide,
  Paper,
  Typography,
  Divider,
  Button,
} from '@mui/material';

interface ModalProfileProps {
  open: boolean;
  onClose: () => void;
  profileData: {
    fullName: string;
    username: string;
    runningDistance: string;
    cyclingDistance: string;
    swimmingDistance: string;
  };
}

const ModalProfile: React.FC<ModalProfileProps> = ({ open, onClose, profileData }) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: 'absolute',
            top: '30%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            borderRadius: 8,
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
          }}
        >
          <Typography variant="h6">Profile</Typography>
          <Divider />
          <Typography>Full Name: {profileData.fullName}</Typography>
          <Typography>Username: {profileData.username}</Typography>
          <Typography>Running Distance: {profileData.runningDistance}</Typography>
          <Typography>Cycling Distance: {profileData.cyclingDistance}</Typography>
          <Typography>Swimming Distance: {profileData.swimmingDistance}</Typography>
          <Button onClick={onClose}>Close</Button>
        </Paper>
      </Slide>
    </Modal>
  );
};

export default ModalProfile;
