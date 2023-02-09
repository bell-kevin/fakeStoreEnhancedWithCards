import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import "./global.css";

const App = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(productsArray => {
                const newProductsState = productsArray.map((product) => {
                    return product.title + " " + product.price + " " + product.description + " " + product.image;
            })
            setProductsState(newProductsState);
        }, 500);
    }, []);

    const hasProducts = productsState.length > 0;

    return (
        <div>
            <h1>Fake Store Products</h1>
            {  hasProducts ? <SearchBar products={productsState} /> : <p>Loading...</p> }
        </div>
    );
};

export default App;
