import { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import { CoinContext } from "../../context/CoinContext";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  //   filtering api data using input data

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Platform
        </h1>
        <p>
          Welcome to the largest cryptocurrency marketplace. Signup to explore
          more about crypto.
        </p>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Search crypto.."
            value={input}
            onChange={inputHandler}
            required
            list="coinlist"
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>

      {/* crypto table */}
      <div className="table">
        <div className="layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hr Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {/* slicing the multiple data */}
        {displayCoin.slice(0, 20).map((item, index) => (
          <NavLink to={`/coin/${item.id}`} className="layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="image" />
              <p>
                {item.name} ({item.symbol})
              </p>
            </div>
            <p>
              {currency.symbol}
              {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {item.price_change_percentage_24h.toFixed(2)}
            </p>
            <p className="market-cap">{item.market_cap.toLocaleString()}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
