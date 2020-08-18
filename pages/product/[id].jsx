import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>Esta el la página del producto: {id}</h1>
    </div>
  );
};

export default ProductItem;
