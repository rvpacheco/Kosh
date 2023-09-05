import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar as BootstrapNavbar, Nav, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleDeleteFavorite = (elementId) => {
    actions.markFavorite(elementId);
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
          <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="secondary" id="favorites-dropdown">
              Favorites
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {store.favorites.map((favorite, index) => (
                <Dropdown.Item key={index}>
                  <Link to={`/details/${favorite.id}`} className="dropdown-item">
                    {favorite.name}
                  </Link>
                  <button className="btn btn-link" onClick={() => handleDeleteFavorite(favorite.id)}>
                    <i className="bi bi-trash"></i>
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
