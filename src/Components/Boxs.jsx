/** @jsxImportSource @emotion/react */
import { Card, Typography, Box } from '@mui/material';

const Boxs = ({ data }) => {
  
  const boxContainerStyles = {
    display: 'flex',
    margin: '15px',
    gap: '20px',
  };

  const boxStyles = {
    width: '25%',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const cardStyles = (color) => ({
    width: '100%',
    border: '1px solid',
    textAlign: 'center',
    backgroundColor: color,
    borderRadius: 0,
    fontSize: '30px',
    color: 'white',
    padding: '20px', 
    overflow: 'hidden', 
  });

  const titleStyles = {
    border: '1px solid',
    fontSize: '20px',
    marginTop: '10px', 
    overflow: 'hidden',
  };

  return (
    <Box sx={boxContainerStyles}>
      {data.map((element, idx) => (
        <Box key={idx} sx={boxStyles}>
          <Card sx={cardStyles(element.color)}>{element.value}</Card>
          <Typography variant="h6" sx={titleStyles}>{element.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Boxs;
