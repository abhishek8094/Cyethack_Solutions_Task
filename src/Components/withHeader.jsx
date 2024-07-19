import React, { Fragment } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Header from "./Header";

const withHeader = (WrappedComponent) => {
  return (props) => {
    return (
      <Fragment>
        <AppBar position="static" style={{ backgroundColor: "#1876d1" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
            <Header />
          </Toolbar>
        </AppBar>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withHeader;
