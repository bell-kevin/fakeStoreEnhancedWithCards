import React, { useState } from "react";
import "./SearchBar.css";
import Card from "../Card/Card";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const products = props.products;
    if (!Array.isArray(products)) {
      return <p>No products to display</p>;
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const shouldDisplayButton = searchTerm.length > 0;

    const handleClear = () => {
        setSearchTerm("");
    }

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search Products" />
            <br></br>
            {shouldDisplayButton && <button onClick={handleClear}>Clear</button>}
            <Card products={filteredProducts} />

        </div>
    );
};

export default SearchBar;