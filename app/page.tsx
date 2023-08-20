import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  {
    /* import css into this ts file and use it like a javascript object - styles.main, the style won't bleed out to other components */
  }

  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
    // return <p>You must be signed in...</p>
  }
  return <main></main>;
}
