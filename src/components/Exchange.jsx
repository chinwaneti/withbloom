import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Exchange() {
  const [state, setState] = useState({
    currencies: [
      'USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'INR', 'NGN',
      'BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'ADA',  'DOGE', 'XMR'
    ],
    base: 'USD',
    amount: '',
    convertTo: 'BTC',
    result: '',
    isConverting: false,
  });

  const { base, convertTo, amount, result, isConverting } = state;

  const onChangeInput = (e) => {
    const newAmount = e.target.value;
    setState({ ...state, amount: newAmount });
  };

  const handleSelectBase = (e) => {
    const newBase = e.target.value;
    setState({ ...state, base: newBase });
  };

  const handleSelectConvertTo = (e) => {
    const newConvertTo = e.target.value;
    setState({ ...state, convertTo: newConvertTo });
  };

  const handleConvert = async () => {
    if (amount === '' || isNaN(amount)) {
      return;
    }

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${base.toLowerCase()}&vs_currencies=${convertTo.toLowerCase()}`
      );
      const data = await response.json();

      if (data[base.toLowerCase()] && data[base.toLowerCase()][convertTo.toLowerCase()]) {
        const conversionRate = data[base.toLowerCase()][convertTo.toLowerCase()];
        setState({
          ...state,
          result: (amount * conversionRate).toFixed(4),
          isConverting: false,
        });
      } else {
        console.error('Conversion rate not available for the selected currency.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSwap = () => {
    const { base, convertTo } = state;
    setState({ ...state, base: convertTo, convertTo: base });
  };

  return (
    <div className="bg-gray-200 min-h-screen relative flex items-center justify-center">
      <Link to="/main"><span className='absolute top-3 left-4'><AiOutlineHome size={25}/></span></Link>
      <div className="bg-white shadow-md rounded-md p-10 w-full sm:w-[50%]">
        <h2 className="text-2xl font-bold mb-4 text-center p-5">Currency Converter</h2>
        <div className="mb-4">
          <h3 className="text-3xl font-semibold p-5 bg-gray-50 text-center">
            {amount === '' ? '' : isConverting ? 'Calculating...' :
              `${amount} ${base} = ${result} ${convertTo}`}
          </h3>
        </div>
        <form className="mb-4">
          <input
            type="number"
            value={amount}
            onChange={onChangeInput}
            className="w-full p-2 border rounded-md"
            placeholder="Enter amount"
          />
        </form>
        <form className="mb-4">
          <select
            name="base"
            value={base}
            onChange={handleSelectBase}
            className="w-full p-2 border rounded-md"
          >
            {state.currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </form>
        <form className="mb-4">
          <select
            name="convertTo"
            value={convertTo}
            onChange={handleSelectConvertTo}
            className="w-full p-2 border rounded-md"
          >
            {state.currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </form>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mb-4 sm:mb-0"
            onClick={handleConvert}
          >
            Convert
          </button>
          <div className="cursor-pointer w-full bg-gray-100 h-10 mb-4 sm:mb-0" onClick={handleSwap}>
            <span className="flex items-center justify-center py-2">
              <AiOutlineArrowUp size={25} /> <AiOutlineArrowDown size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
