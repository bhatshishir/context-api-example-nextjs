"useClient";
import React from "react";
// import Navbar from "@/components/navbar";
import { useContext } from "react";
import { useRef } from "react";
import cartQuantity from "@/components/cartContext";
import { Typography, TextField, InputAdornment, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
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
    <div style={{ paddingTop: 120 }}>
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
                <AddRoundedIcon sx={{
                  cursor:"pointer"
                }} onClick={handleAdd}/>
              </InputAdornment>
            ),
          }}
        />
        {/* <Button onClick={handleAdd} color="primary" variant='contained'>Add</Button> */}
        {/* <button onClick={handleAdd}>Add</button> */}
      </div>
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
      </div>
    </div>
  );
};

export default Shopping;
