import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Navbar from "@/components/navbar";
import Link from "next/link";
import { CssBaseline, Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CssBaseline />
      <section style={{ paddingTop: 70 }}>
        <h1>My App!</h1>
        <Link href="./shoppingList">
          <Button color="success" variant="contained">
            ShoppingList
          </Button>
          {/* <button>shoppingList</button> */}
        </Link>
      </section>
    </>
  );
}
