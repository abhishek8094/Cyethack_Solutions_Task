import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import SearchBar from "./SearchBar";
import TableComponent from "./TableComponent";

const Lists = () => {
  const students = useSelector((state) =>state.auth.students);
  console.log(students)
 
  const navigate = useNavigate();

  //function handleRowClick
  const handleRowClick = (itemId) => {
    sessionStorage.setItem("selectedItemId", itemId);
    navigate("/list/details");
  };

  return (
    <div>
      <div>
        <SearchBar />
        <NavBar />
      </div>
      <TableComponent students={students} handleRowClick={handleRowClick} />
    </div>
  );
};

export default Lists;

