import { useState } from "react";
import { useParams } from "react-router-dom";

const api_url = "https://fakestoreapi.com/products";

function fetchFunction(api, setFunction) {
  fetch(api)
    .then((response) => response.json())
    .then((products) => setFunction(products))
    .catch((error) => console.log(error));
}

export function GetAllProducts() {
  const [products, setProducts] = useState([]);

  return [
    products,
    function getAllProducts() {
      fetchFunction(api_url, setProducts);
    },
  ];
}

export function DetailsOfSpecificProduct() {
  const params = useParams([]);
  const [singleProduct, setSingleProduct] = useState([]);

  return [
    singleProduct,
    function getSpecificProduct() {
      fetchFunction(api_url + `/${params.Id}`, setSingleProduct);
    },
  ];
}

export function GetAllCategories() {
  const [categories, setCategories] = useState([]);

  return [
    categories,
    function getAllCategories() {
      fetchFunction(api_url + `/categories`, setCategories);
    },
  ];
}


export function GetSpecificProduct(){
  const [productsInCategory, setProductsInCategory] = useState([]);

  return [
    productsInCategory,
    function getAllCategories(val) {
      fetchFunction(api_url + `/category/${val}`, setProductsInCategory);
    },
  ];
}