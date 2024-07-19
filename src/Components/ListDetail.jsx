/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "./Navbar"; // Ensure NavBar is correctly imported
import Boxs from "./Boxs";
import { Vulnerabilities } from '../constants';
import UserData from './UserData';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

// Register the CategoryScale with Chart.js
Chart.register(CategoryScale);

const ListDetail = () => {
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData")) || null
  );
  const [loading, setLoading] = useState(true); // Set loading true initially
  const selectedItemId = sessionStorage.getItem("selectedItemId");
  const students = useSelector((state) => state.auth.students); // Ensure the correct state slice is used

  const sumOfSeverities = () => {
    if (!userData) return 0;
    return (
      userData.severity.critical +
      userData.severity.high +
      userData.severity.medium +
      userData.severity.low
    );
  };

  useEffect(() => {
    // Check if the selectedItemId is valid
    if (selectedItemId) {
      const user = students.find(
        (student) => student.item_id.toString() === selectedItemId
      );

      if (user) {
        setLoading(true); // Start loading
        setTimeout(() => {
          setUserData(user);
          sessionStorage.setItem("userData", JSON.stringify(user)); // Save userData in sessionStorage
          setLoading(false); // Stop loading
        }, 1000); // Simulate a 1-second loading delay
      } else {
        setLoading(false); // Stop loading if no user found
      }
    } else {
      setLoading(false); // Stop loading if no selectedItemId
    }
  }, [selectedItemId, students]);

  // Destructure severity values with fallback defaults
  const {
    critical = 0,
    high = 0,
    medium = 0,
    low = 0,
    riskScore: Risk = 0
  } = userData ? userData.severity : {};

  const styles = {
    container: css`
      width: 100%;
      height: 100%;
    `,
    loadingContainer: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    riskScoreContainer: css`
      background-color: #fbbf24;
      font-weight: bold;
      font-size: 1.25rem;
      margin-top: 0.25rem;
      text-align: center;
      width: 5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };

  return (
    <div css={styles.container}>
      {loading ? (
        <div css={styles.loadingContainer}>
          <CircularProgress />
        </div>
      ) : userData ? (
        <div>
          <NavBar />
          <Boxs
            data={[
              { value: sumOfSeverities(), label: "Total Vulnerabilities", color: "purple" },
              { value: critical, label: "Critical", color: "red" },
              { value: high, label: "High", color: "orange" },
              { value: medium, label: "Medium", color: "#f7bc00" },
              { value: low, label: "Low", color: "green" },
            ]}
          />
          <UserData
            Risk={Risk}
            userData={userData}
            critical={critical}
            high={high}
            medium={medium}
            low={low}
            Vulnerabilities={Vulnerabilities}
          />
        </div>
      ) : (
        <div>No user data available.</div>
      )}
    </div>
  );
};

export default ListDetail;
