import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  IconButton,
  Typography,
  Chip,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const renderTag = ({ color, value }) => {
  return (
    <Chip
      label={value}
      style={{
        margin: '0',
        borderRadius: '0',
        padding: '5px',
        color: 'black',
        backgroundColor: `${color}`,
      }}
    />
  );
};

export const TableComponent = ({ students, handleRowClick }) => {
  const columns = [
    { id: 'scanName', label: 'Scan Name', width: '25%' },
    { id: 'url', label: 'Target URL', width: '20%' },
    { id: 'scanEngine', label: 'Scan Engine', width: '15%' },
    { id: 'status', label: 'Status', width: '10%' },
    { id: 'riskScore', label: 'Risk Score', width: '5%' },
    { id: 'totalVulnerabilities', label: 'Total Vulnerabilities', width: '10%' },
    { id: 'severity', label: 'Severity', width: '15%' },
    { id: 'link', label: '', width: '5%' },
  ];

  return (
    <TableContainer component={Paper} style={{ margin: '15px', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{ width: column.width }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.item_id}>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <Link component="button" variant="body2">
                  {student.scanName}
                </Link>
                <IconButton size="small">
                  <KeyboardArrowDown />
                </IconButton>
              </TableCell>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <Link href={student.url} target="_blank" rel="noopener">
                  {student.url}
                </Link>
              </TableCell>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {student.scanEngine}
              </TableCell>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {student.status}
              </TableCell>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {student.riskScore}
              </TableCell>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {student.totalVulnerabilities}
              </TableCell>
              <TableCell>
                <div>
                  {renderTag({ color: 'red', value: student.severity?.critical })}
                  {renderTag({ color: 'orange', value: student.severity?.high })}
                  {renderTag({ color: 'yellow', value: student.severity?.medium })}
                  {renderTag({ color: 'green', value: student.severity?.low })}
                </div>
              </TableCell>
              <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <Typography
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRowClick(student.item_id)}
                >
                  ...
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
