import React, { Suspense, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/Slices/authSlice";

const LoginPage = React.lazy(() => import("../Components/LoginPage"));
const Dashboard = React.lazy(() => import("../Components/Dashboard"));

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.student);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const onFinish = ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      dispatch(login());
      setSnackbarMessage('Logged In Successfully');
      setSnackbarSeverity('success');
    } else {
      setSnackbarMessage('Login Failed. Please try again.');
      setSnackbarSeverity('error');
    }
    setSnackbarOpen(true);
  };

  const Spinner = () => (
    <CircularProgress size="large" />
  );

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {!isLoggedIn ? (
          <LoginPage onFinish={onFinish} />
        ) : (
          <Dashboard />
        )}
      </Suspense>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
