import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar as BootstrapNavbar, Nav, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleDeleteFavorite = (elementId) => {
    actions.markFavorite(elementId);
  };

  // Estado para mostrar/ocultar el dropdown de carrito
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const handleRemoveFromCart = (itemId) => {
    actions.removeFromCart(itemId);
  };

  return (
    <Fragment>
      {/* Top Panel */}
      <div className="top_panel_fixed_wrap"></div>

      {/* Header */}
      <BootstrapNavbar className="top_panel_wrap top_panel_style_5">
        <Container fluid>
          {/* Contact Logo */}
          <BootstrapNavbar.Brand className="contact_logo">
            {/* Replace with your logo */}
            Your Logo
          </BootstrapNavbar.Brand>

          {/* Main Menu */}
          <Nav className="menu_main_wrap clearfix">
            <Nav className="menu_main_nav_area menu_hover">
              {/* Replace the following code with your menu items */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/demo">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Nav>

          {/* Favorites Dropdown */}
          <Dropdown className="ms-auto me-2">
            <Dropdown.Toggle variant="secondary" id="favorites-dropdown">
              Favorites ({store.favorites.length})
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              {store.favorites.map((favorite, index) => (
                <Dropdown.Item key={index}>
                  <Link to={`/details/${favorite.id}`} className="dropdown-item">
                    {favorite.name}
                  </Link>
                  <button className="btn btn-link" onClick={() => handleDeleteFavorite(favorite.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Carrito Dropdown */}
          <Dropdown className="me-2">
            <Dropdown.Toggle variant="primary" id="cart-dropdown">
              Ver Carrito ({store.cart.length})
            </Dropdown.Toggle>
            <Dropdown.Menu show={showCartDropdown}>
              {store.cart.map((item, index) => (
                <Dropdown.Item key={index}>
                  {/* Mostrar detalles del producto en el carrito */}
                  <span>{item.name}</span>
                  <button className="btn btn-link" onClick={() => handleRemoveFromCart(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </BootstrapNavbar>

      {/* Page Title and Breadcrumbs */}
    </Fragment>
  );
};

export default Navbar;
