import  { useEffect } from 'react';
import axios from 'axios';

export default function CurrencyConverter({ base, convertTo, amount, onConversion }) {
  useEffect(() => {
    const getCurrencyConverter = async () => {
      if (amount === '' || isNaN(amount)) {
        return;
      }

      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${base.toLowerCase()}&vs_currencies=${convertTo.toLowerCase()}`
        );

        if (response.data && response.data[base.toLowerCase()] && response.data[base.toLowerCase()][convertTo.toLowerCase()]) {
          const conversionRate = response.data[base.toLowerCase()][convertTo.toLowerCase()];
          onConversion(amount * conversionRate);
        } else {
          console.error('Conversion rate not available for the selected currency.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCurrencyConverter();
  }, [base, convertTo, amount, onConversion]);

  return null;
}
