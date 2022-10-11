import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { ExampleProduct } from "../../components/product";

const ProductId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Product ID: {id}</title>
      </Head>

      <main>
        <h1>Product ID: {id}</h1>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <ExampleProduct id={String(id)} />
      </main>
    </div>
  );
};

export default ProductId;
