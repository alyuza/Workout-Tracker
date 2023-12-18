import React, { useEffect, useState } from 'react';
import SideNav from '../../../../components/SideNavbar';
import {
  Divider,
  Paper,
  TablePagination,
  Typography,
} from '@mui/material';
import Footer from '../../../../components/Footer';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../../utils/API';

interface Activity {
  _id: string;
  title: string;
  description: string;
  distance: number;
  time: number;
  calorie: number;
  activityType: string; // Assuming there is an "activityType" property in your Activity interface
}

const CyclingDashboard: React.FC = () => {
  const navigate = useNavigate();
  const validate = localStorage.getItem('token');
  if (!validate) {
    navigate('/');
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [dataList, setData] = useState<Activity[]>([]);
  const [filteredData, setFilteredData] = useState<Activity[]>([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Filter data based on the "activityType" property
    const runningActivities = dataList.filter(
      (activity) => activity.activityType === "cycling"
    );
    setFilteredData(runningActivities);
  }, [dataList]);

  const totalDistance = filteredData.reduce(
    (acc, activity) => acc + activity.distance,
    0
  );
  const totalTime = filteredData.reduce((acc, activity) => acc + activity.time, 0);
  const totalCalorie = filteredData.reduce(
    (acc, activity) => acc + activity.calorie,
    0
  );

  const fetchData = async () => {
    try {
      const response = await axios.get(API + '/api/tasks', {
        headers: { Authorization: `Bearer ${validate}` },
      });
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <SideNav />
      <Box>
        <Paper
          sx={{
            borderRadius: '20px',
            height: '100vh',
            backgroundColor: 'white',
            color: 'black',
            minHeight: '1500px',
            margin: '40px',
          }}
          elevation={5}
        >
          <Box sx={{ display: 'flex', padding: '30px' }}>
            <Box sx={{ backgroundColor: 'white', width: '600px' }}>
              <Typography variant="h3" gutterBottom>
                Cycling Activity
              </Typography>
              <Typography variant="h5" gutterBottom>
                Total Distances: {totalDistance.toFixed(2)} km
              </Typography>
              <Typography variant="h5" gutterBottom>
                Total Workout: {totalTime.toFixed(2)} minutes
              </Typography>
              <Typography variant="h5" gutterBottom>
                Total Calorie Burn: {totalCalorie.toFixed(2)} cal
              </Typography>
            </Box>
          </Box>

          <Divider />

          {/* Activities History */}
          <Box>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((activity, index) => (
                <Paper
                  key={index}
                  sx={{
                    borderRadius: '15px',
                    margin: '10px',
                    padding: '20px',
                    backgroundColor: 'white',
                  }}
                  elevation={2}
                >
                  <Typography variant="h5" gutterBottom>
                    Title: {activity.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Description: {activity.description}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Distance: {activity.distance.toFixed(2)} km
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Time: {activity.time.toFixed(2)} minutes
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Calorie Burn: {activity.calorie.toFixed(2)} cal
                  </Typography>
                </Paper>
              ))}
          </Box>

          {/* Pagination component */}
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={() => { }} // Disable rows per page change
          />
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default CyclingDashboard;
