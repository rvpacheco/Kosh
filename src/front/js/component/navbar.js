import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

export const Navbar = () => {
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
        </Container>
      </BootstrapNavbar>

      {/* Page Title and Breadcrumbs */}
      <div className="top_panel_title">
        <div className="top_panel_title_inner">
          <Container>
            {/* Replace the following code with the page title */}
			
            <h1 className="page_title">Kosh</h1>

            {/* Replace the following code with your breadcrumbs */}
            <div className="breadcrumbs">Breadcrumbs</div>
          </Container>
        </div>
      </div>      
    </Fragment>
  );
};

export default Navbar;
