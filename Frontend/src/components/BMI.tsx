// src/BMIForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface BMIFormProps {
  onCalculate: (height: number, weight: number) => void;
}

const BMIForm: React.FC<BMIFormProps> = ({ onCalculate }) => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleCalculate = () => {
    onCalculate(height, weight);
  };

  return (
    <Box>
      <TextField
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        margin="normal"
      />
      <TextField
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate BMI
      </Button>
    </Box>
  );
};

export default BMIForm;
