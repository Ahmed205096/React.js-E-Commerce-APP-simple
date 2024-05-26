import ProductContent from "../Products/ProductContent";
import FilterSection from "./FilterSection";
export default function FilterResult(){
    const [output , productsInCategory] = FilterSection();
    console.log(productsInCategory);
    return(
       productsInCategory.map((product) => {
            return (
              <ProductContent
                key={product.id}
                id={product.id}
                btn_state={true}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            );
          })
    );
}