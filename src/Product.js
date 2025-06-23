import { Link } from "react-router-dom";

function Product(props) {
   
    return (
        <div className="card  card1" style={{ width: 180 }}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
                <h5 className="card-title">{props.id}</h5>
                <p className="card-text">{props.name}</p>
                <p className="card-text">{props.category}</p>
                <p className="card-text">{props.price}</p>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Click</a>
                <Link to={`/pdetail/${props.id}`}>Read more</Link>

            </div>
        </div>
    );
}

export default Product;