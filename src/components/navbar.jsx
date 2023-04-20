import React from "react";
import { useContext } from "react";
import cartQuantity from "./cartContext";
import { Typography, Stack } from "@mui/material";
const Navbar = () => {
  const { total } = useContext(cartQuantity);
  return (
    <Stack align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Typography variant="h4">This is the navbar</Typography>
      <p>{total}</p>
    </Stack>
  );
};

export default Navbar;
