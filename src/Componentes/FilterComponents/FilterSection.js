import { useEffect } from "react";
import { GetAllCategories, GetSpecificProduct } from "../APIs/APIsRequests";
import "./FilterSectionStyling.css";


export default function FilterSection() {
  const [categories, getAllCategories] = GetAllCategories();
  const [productsInCategory, setProductsInCategory] = GetSpecificProduct();

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const output = (
    <div className="filter-section">
      {Array.from({ length: categories.length }).map((_, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setProductsInCategory(categories[i]);
            }}
            className="filter-button"
          >
            {categories[i]}
          </button>
        );
      })}
    </div>
  );
  // console.log(productsInCategory);

  return [output, productsInCategory];
}
