import {GetAllProducts} from "../APIs/APIsRequests";
import ProductContent from "../Products/ProductContent";

export default function AllProducts() {
  const [products, getAllProducts] = GetAllProducts();

  const productList = products.map((product) => {
    return (
      <ProductContent
        key={product.id}
        id = {product.id}
        btn_state = {true}
        title={product.title}
        price={product.price}
        image={product.image}
        description={product.description}
      />
    );
  });

  return [productList , getAllProducts];
}
