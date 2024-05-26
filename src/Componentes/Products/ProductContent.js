import "./ProductStyling.css";
import { Link } from "react-router-dom";

export default function ProductContent(props) {
  return (
    <div className="ProductCard" key={props.id}>
      <div className="img-container">
        <img src={props.image} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Price {props.price}</p>
      {props.btn_state && (
        <div className="btn-container">
          <Link to={`/product/${props.id}`}>
            <button className="details-btn">Details</button>
          </Link>
        </div>
      )}
    </div>
  );
}
