import { DetailsOfSpecificProduct } from "../APIs/APIsRequests";
import ProductContent from "../Products/ProductContent";

export default function SpecificProduct() {
  const [singleProduct, getSpecificProduct] = DetailsOfSpecificProduct();


  const specificProduct = (
    <ProductContent
      key={singleProduct.id}
      id={singleProduct.id}
      btn_state = {false}
      title={singleProduct.title}
      price={singleProduct.price}
      image={singleProduct.image}
      description={singleProduct.description}
    />
  );

  return [specificProduct, getSpecificProduct];
}
