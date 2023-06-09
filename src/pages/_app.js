import "@/styles/globals.css";
import { useContext } from "react";
import cartContext from "@/components/cartContext";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { Typography, AppBar, CssBaseline, Toolbar, Grid } from "@mui/material";
// import Stack from "@mui/joy/Stack";

// const items = [
//   { id: 1, name: "potato", count: 4 },
//   { id: 2, name: "tomamto", count: 2 },
//   { id: 3, name: "apple", count: 3 },
// ];
export default function App({ Component, pageProps }) {
  const [items, setItems] = useState([{ id: 1, name: "potato", count: 4 }]);
  // console.log(items);
  let total = 0;
  items.map((item) => (total += item.count));
  return (
    <cartContext.Provider value={{ total, items, setItems }}>
      <CssBaseline />

      <AppBar position="relative">
        <Navbar />
      </AppBar>

      <Component {...pageProps} />
    </cartContext.Provider>
  );
}
