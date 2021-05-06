import Link from "next/link";
import Layout from "../components/Layout";
import Hello from "./components/Hello";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hello />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
