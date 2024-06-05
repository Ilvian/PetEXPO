import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm, label }) => {
  return (
    <TextField
      label={`Search ${label}`}
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
