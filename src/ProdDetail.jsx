import { useNavigate, useParams } from "react-router-dom";
import useApi from "./Hooks/useApi";

function ProdDetail() {
  const { pid } = useParams();
  const { Product1: prod, loading } = useApi(`http://localhost:3000/products/${pid}`);
  const navigate = useNavigate(); // fixed spelling

  return (
    <>
      <h2>Product Details</h2>
      {loading && <p>Loading...</p>}

      {prod ? (
        <>
          <p><strong>ID:</strong> {prod.id}</p>
          <p><strong>Name:</strong> {prod.name}</p>
          <p><strong>Category:</strong> {prod.category}</p>
          <p><strong>Price:</strong> {prod.price}</p>
          <p><strong>Description:</strong> {prod.description}</p>
          <button onClick={() => {
            setTimeout(() => {
              navigate("/product"); // fixed spelling
            }, 2000);
          }}>
            Go Back to Product List
          </button>
        </>
      ) : (
        !loading && <p>No product found.</p>
      )}
    </>
  );
}

export default ProdDetail;