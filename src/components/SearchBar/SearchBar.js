import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const products = props.products;

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const shouldDisplayButton = searchTerm.length > 0;

    const handleClear = () => {
        setSearchTerm("");
    }

    const filteredProducts = products.filter((product) => {
        return product.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search Products" />
            <br></br>
            {shouldDisplayButton && <button onClick={handleClear}>Clear</button>}

 
                {filteredProducts.map((product) => {
                    return <div key={product}>{product}</div>;
                })}

        </div>
    );
};

export default SearchBar;
