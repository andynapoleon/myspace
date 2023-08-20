import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  {
    /* import css into this ts file and use it like a javascript object - styles.main, the style won't bleed out to other components */
  }

  const session = await getServerSession(authOptions);

  console.log("SESSION:", session);

  if (!session) {
    redirect("/api/auth/signin");
    // return <p>You must be signed in...</p>
  }
  return (
    <div>
      <h1>Welcome to NextSpace!</h1>
      <p>
        A next-gen social media app to connect with frens inspired by MySpace
      </p>
      <p>To get started, sign up for an account</p>
    </div>
  );
}
