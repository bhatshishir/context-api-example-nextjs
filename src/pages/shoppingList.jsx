"useClient";
import React from "react";
// import Navbar from "@/components/navbar";
import { useContext } from "react";
import { useRef } from "react";
import cartQuantity from "@/components/cartContext";
import { Typography, TextField, InputAdornment, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Shopping = () => {
  const { items, setItems } = useContext(cartQuantity);
  const ref = useRef(null);
  function handleAdd() {
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: ref.current.value,
        count: 1,
      },
    ]);
    ref.current.value = "";
  }
  function handleKey(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }
  return (
    <div >
      {/* <Navbar /> */}
      <Typography variant="h4">Welcome to shopping page!</Typography>
      <div>
        {/* <input
          type="text"
          placeholder="Add item"
          ref={ref}
          onKeyDown={handleKey}
        /> */}
        <TextField
          inputRef={ref}
          onKeyDown={handleKey}
          id="filled-flexible-basic"
          color="success"
          label="Add an item"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddRoundedIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={handleAdd}
                />
              </InputAdornment>
            ),
          }}
        />
        {/* <Button onClick={handleAdd} color="primary" variant='contained'>Add</Button> */}
        {/* <button onClick={handleAdd}>Add</button> */}
      </div>

      <div>
        <TableContainer component={Paper} sx={{maxWidth:700}}>
           <Table sx={{ maxWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell align="center">Count</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.count}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
{/* 
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              &nbsp;
              {item.count}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Shopping;
