import React from 'react';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Search, Add } from '@mui/icons-material';

function SearchBar() {
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      margin: "15px",
    }}>
      <TextField
        variant="outlined"
        placeholder="Search something.."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
        size="large"
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        size="large"
        style={{ width: '20%' }}
      >
        Add New Profile
      </Button>
    </div>
  );
}

export default SearchBar;
