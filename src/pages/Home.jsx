import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Home (){
    const [coins, setCoins] = useState([]);

    const url= `${import.meta.env.VITE_API_URL}assets?apiKey=${import.meta.env.VITE_API_KEY}`;
    


    useEffect (() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setCoins(data.data))
        .catch(err => console.error(err));

    }, []);

    return (
        <div>
            <h1>Criptomonedas</h1>
            <ul>
                {coins.map(coin =>(
                    <li key={coin.id}>
                        <Link to={`/coin/${coin.id}`}>
                        {coin.name} - ${parseFloat(coin.priceUsd).toFixed(2)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;