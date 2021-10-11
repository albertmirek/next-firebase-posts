import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";

export default function Home() {
  return (
    // <div>
    //   <Link
    //     prefetch={true}
    //     href={{
    //       pathname: "/[username]",
    //       query: { username: "albert123" },
    //     }}
    //   >
    //     <a>Alberts profile</a>
    //   </Link>
    // </div>
    <div>
      <Loader show />
    </div>
  );
}
