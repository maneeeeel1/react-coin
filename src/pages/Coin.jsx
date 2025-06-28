import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Coin (){
    const { id } = useParams();
    const [coin, setCoin] = useState({});

    const url= `${import.meta.env.VITE_API_URL}assets/${id}?apiKey=${import.meta.env.VITE_API_KEY}`;

        useEffect (() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data.data))
        .catch(err => console.error(err));

    }, []);

    return (
        <div>
            <h1>{coin.name} ({coin.symbol})</h1>
            <p>Precio: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
            <p>Ranking: {coin.rank}</p>
            <p>Market cap: ${parseFloat(coin.marketCapUsd).toLocaleString()}</p>

        </div>

    )
}

export default Coin;