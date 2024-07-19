/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const navBarStyle = css`
  margin: 10px;
  .MuiToggleButtonGroup-root {
    width: 100%;
    .Mui-selected {
      background-color: #1876d1 !important;
      color: white !important;
      font-weight: bold;
    }
    .MuiToggleButton-root {
      color: black;
      padding: 10px;
    }
  }
`;

function NavBar() {
  const [selected, setSelected] = useState('home');

  const handleSelection = (event, newSelected) => {
    if (newSelected !== null) {
      setSelected(newSelected);
    }
  };

  return (
    <div css={navBarStyle}>
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelection}
        aria-label="navigation"
      >
        <ToggleButton value="home" aria-label="home">
          Home
        </ToggleButton>
        <ToggleButton value="scan" aria-label="scan" disabled>
          Scan Result
        </ToggleButton>
        <ToggleButton value="report" aria-label="report" disabled>
          Report
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default NavBar;
