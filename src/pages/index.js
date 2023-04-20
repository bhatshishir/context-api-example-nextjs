import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Navbar from "@/components/navbar";
import Link from "next/link";
import { CssBaseline, Button, Typography, Stack } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CssBaseline />
      <br/>
      <section>
        <Typography align="center" color="textPrimary" variant="h4">
          My App!
        </Typography>
        <br />
        <br />
        <Stack align="center">
          <Link href="./shoppingList">
            <Button color="success" variant="contained">
              ShoppingList
            </Button>
          </Link>
        </Stack>
      </section>
    </>
  );
}
