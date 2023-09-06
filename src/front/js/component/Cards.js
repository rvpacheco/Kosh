import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Cards = ({ data, currentIndex, type }) => {
  const { store, actions } = useContext(Context);

  function checkFavorites(index, uid) {
    return store.favorites.some(person => person.id === `${type}/${index}/${uid}`);
  }

  const handleBuyNow = (item) => {
    // Llama a la acción para agregar al carrito en lugar de usar un estado local
    actions.addToCart(item.uid, item.name);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {data &&
        data
          .slice(currentIndex * 3, (currentIndex + 1) * 3)
          .map((item, index) => (
            <div className="card m-4" style={{ width: "18rem" }} key={index}>
              <Link to={`/details/${type}/${item.uid}`} className="card-link">
                <img src={item.img} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  href="#"
                  className="btn btn-outline-warning me-2"
                  onClick={() => actions.markFavorite(`${type}/${index}/${item.uid}`, item.name)}
                >
                  <FontAwesomeIcon icon={faHeart} className={checkFavorites(index, item.uid) ? "text-danger" : ""} />
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleBuyNow(item)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Comprar Ahora
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Cards;
