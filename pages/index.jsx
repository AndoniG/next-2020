import Navbar from "../components/navbar/Navbar";
import { useState, useEffect } from "react";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => setProductList(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Nextjs 2020</h1>
      {productList.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default Home;
