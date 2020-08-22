import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import KawaiiHeader from "../components/KawaiiHeader/KawaiiHeader";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
