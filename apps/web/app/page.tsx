import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import NoirComponent from "../components/noir";
import Link from "next/link";



export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <NoirComponent />
      <a href="/api/auth/login">Login</a>
    </main>
  );
}
