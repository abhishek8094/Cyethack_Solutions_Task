/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactSpeedometer from "react-d3-speedometer";
import { Bar } from "react-chartjs-2";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
} from '@mui/material';

const dashboardContainer = css`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around;
`;

const speedometerSection = css`
  display: flex;
  flex-direction: column;
`;

const speedometerWrapper = css`
  display: flex;
  width: 10rem;
`;

const riskScoreContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const riskScore = css`
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
`;

const chartContainer = css`
  margin-top: 1rem;
`;

const tableContainer = css`
  width: 60%;
`;

const UserData = ({ Risk, userData, critical, high, medium, low, Vulnerabilities }) => {
  return (
    <div css={dashboardContainer}>
      <div css={speedometerSection}>
        <div css={speedometerWrapper}>
          <ReactSpeedometer
            value={Risk}
            minValue={0}
            maxValue={10}
            width={250}
            height={200}
          />
          <div css={riskScoreContainer}>
            <div css={riskScore}>{userData.severity.riskScore}</div>
            <p>Risk Score</p>
          </div>
        </div>

        <div css={chartContainer}>
          <Bar
            data={{
              labels: ["critical", "high", "medium", "low"],
              datasets: [
                {
                  label: "severity",
                  data: [critical, high, medium, low],
                  backgroundColor: ["red", "orange", "yellow", "green"],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Severity Distribution",
                },
              },
            }}
          />
        </div>
      </div>

      <div css={tableContainer}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Top Vulnerabilities</TableCell>
                <TableCell>Most Common CVE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Vulnerabilities.map((vulnerability) => (
                <TableRow key={vulnerability.type}>
                  <TableCell>
                    <Chip
                      label={vulnerability.type}
                      style={{
                        backgroundColor: vulnerability.color,
                        color: 'black',
                      }}
                    />
                  </TableCell>
                  <TableCell>{vulnerability.content}</TableCell>
                  <TableCell>{vulnerability.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UserData;
