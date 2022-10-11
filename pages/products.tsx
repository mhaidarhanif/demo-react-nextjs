import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Products: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>

      <main>
        <h1>Products</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </main>
    </div>
  );
};

export default Products;
