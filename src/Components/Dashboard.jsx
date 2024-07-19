import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import withHeader from "./withHeader";

const Dashboard = () => {
  const navigate = useNavigate();

  const containerStyles = {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const titleStyles = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const buttonStyles = {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container style={containerStyles}>
      <Box style={contentStyles}>
        <div>
          <Typography variant="h4" style={titleStyles}>
            Hello User !!!
          </Typography>
          <Button
            variant="contained"
            size="large"
            style={buttonStyles}
            onClick={() => {
              console.log("hi")
              navigate("/list")
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Go to the Dashboard!
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default withHeader(Dashboard);
