import SpecificProduct from "./FilterComponents/SpecificProduct";
import { useEffect } from "react";

export default function Details() {
  const [specificProduct, getSpecificProduct] = SpecificProduct();

  useEffect(() => {
    getSpecificProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="ProductsContainer">{specificProduct}</div>;
}
