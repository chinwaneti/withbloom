import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { PulseLoader } from 'react-spinners'; // Import the PulseLoader component
import './Main.css'; // You can create a separate CSS file for styling the loader

export default function Coins() {
  const [state, setState] = useState({
    currencies: [
      'bitcoin', 'ethereum', 'ripple', 'litecoin', 'bitcoin-cash', 'cardano', 'dogecoin', 'monero'
    ],
    coinData: {},
    isLoading: true,
  });

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${state.currencies.join(',')}`
        );
        const data = await response.json();
        const coinData = {};
        data.forEach((coin) => {
          coinData[coin.id] = {
            name: coin.name,
            symbol: coin.symbol,
            price: coin.current_price,
            image: coin.image
          };
        });
        setState({ ...state, coinData, isLoading: false });
      } catch (error) {
        console.error('Error fetching data:', error);
        setState({ ...state, isLoading: false });
      }
    };

    fetchCryptoData();
  }, [state.currencies]);

  const { currencies, coinData, isLoading } = state;

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
       <Link to="/main"><span className='absolute top-3 left-4'><AiOutlineHome size={25}/></span></Link>
      <div className="bg-white shadow-md rounded-md p-4 md:p-10 w-full md:w-[50%]">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center p-3 md:p-5">Cryptocurrency Prices</h2>
        {isLoading ? (
          <div className="text-center loader-container">
            <PulseLoader color="#007BFF" size={15} margin={2} /> {/* Use PulseLoader from react-spinners */}
            <p>Loading...</p>
          </div>
        ) : (
          <div className="mb-2 md:mb-4">
            {currencies.map((currency) => (
              <div key={currency} className="flex flex-col md:flex-row hover:bg-gray-100 items-center justify-between p-2 border-b">
                <div className="flex items-center mb-2 md:mb-0 ">
                  <img
                    src={coinData[currency]?.image}
                    alt={currency}
                    width="32"
                    height="32"
                    className="mr-2"
                  />
                  <span>{coinData[currency]?.name} ({coinData[currency]?.symbol})</span>
                </div>
                <div>
                  <span>${coinData[currency]?.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
