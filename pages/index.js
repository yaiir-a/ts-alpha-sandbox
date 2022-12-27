import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Retool from "react-retool";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        <main className={styles.main}>
          <Retool
            url="https://tsalpha.retool.com/apps/868f8306-85d2-11ed-bbd2-477497ad87b5/test-admin-app"
            height="700px"
          />
        </main>
      </div>
    );
  }
  return <a href="/api/auth/login">Login</a>;
}
