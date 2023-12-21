import { useState } from 'react';
import BMIForm from '../../../components/BMI';

function App() {
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = async (height: number, weight: number) => {
    const response = await fetch('http://localhost:5000/calculateBMI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ height, weight }),
    });

    const data = await response.json();
    setBMI(data.bmi);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <BMIForm onCalculate={calculateBMI} />
      {bmi !== null && <p>Your BMI is: {bmi.toFixed(2)}</p>}
    </div>
  );
}

export default App;
