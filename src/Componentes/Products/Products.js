import { useEffect } from "react";
import AllProducts from "../FilterComponents/AllProducts";
import FilterSection from "../FilterComponents/FilterSection";

export default function Products() {
  const [productList, getAllProducts] = AllProducts();
  // eslint-disable-next-line no-unused-vars
  const [outpur , _] = FilterSection();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {outpur}
      <div className="separator"></div>
      <div className="ProductsContainer">{productList}</div>
    </>
  );
}
