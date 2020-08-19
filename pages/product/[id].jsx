import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState({});

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div>
      <h1>Esta el la página del producto: {product.name}</h1>
    </div>
  );
};

export default ProductItem;
