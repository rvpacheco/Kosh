import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "../component/Cards"; // Import the Cards component

export const Home = () => {
  const { store, actions } = useContext(Context);

  // Mock data for your jewelry items
  const jewelryData = [
    {
      uid: 1,
      name: "Jewelry 1",
      description: "Description for Jewelry 1",
      img: rigoImageUrl, // Replace with the actual image URL
    },
    {
      uid: 2,
      name: "Jewelry 2",
      description: "Description for Jewelry 2",
      img: rigoImageUrl, // Replace with the actual image URL
    },
    {
      uid: 3,
      name: "Jewelry 3",
      description: "Description for Jewelry 3",
      img: rigoImageUrl, // Replace with the actual image URL
    },
    // Add more jewelry items as needed
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="page_title">Kosh</h1>
          <p>Your one-stop shop for everything you need.</p>
          {/* Add any call-to-action buttons or elements */}
        </div>
        <img src={rigoImageUrl} alt="Hero Image" />
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Use the Cards component to display the jewelry items */}
        <Cards data={jewelryData} currentIndex={0} type="jewelry" />
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Categories</h2>
        {/* Display a grid of product categories */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        {/* Display customer testimonials */}
      </section>
    </div>
  );
};

export default Home;
