import fetch from "isomorphic-unfetch";
import Layout from "@/components/Layout/Layout";
import KawaiiHeader from "@/components/KawaiiHeader/KawaiiHeader";
import ProductList from "@/components/ProductList/ProductList";

export const getServerSideProps = async (params) => {
  const res = await fetch("https://platzi-avo.vercel.app/api/avo");
  const { data: productList } = await res.json();

  return {
    props: {
      productList,
    },
  };
};

const HomePage = ({ productList }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
