import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Favorites(){
    const [favorites, setFavorites] = useState([])
    const [allCoins, setAllCoins] = useState([])

 const url= `${import.meta.env.VITE_API_URL}/assets?apiKey=${import.meta.env.VITE_API_KEY}`;
        
 
            useEffect (() =>{
            const favs = JSON.parse(localStorage.getItem("favorites")) || [];
            setFavorites(favs);

        fetch(url)
        .then(res => res.json())
        .then(data => setAllCoins(data.data))
        .catch(err => console.error(err));

    }, []);

    const filter = allCoins.filter(coin => favorites.includes(coin.id));

    return (
        <div>
            <h1>Favoritas:</h1>
            {filter.length === 0 ? (
                <p>No tienes criptomonedas favoritas!!</p>
            ) : (
                <ul>
                    {filter.map(coin => (
                        <li key={coin.id}>
                            <Link to={`/coin/${coin.id}`}>
                            {coin.name} - {parseFloat(coin.priceUsd).toFixed(2)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );



}

export default Favorites;