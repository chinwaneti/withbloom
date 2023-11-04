import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { FaArrowUp } from 'react-icons/fa';

const VerticalBarChart = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Generate the data for the bar chart
    const data = [
      { month: 'Jan', portfolio: 15000, dollar: 6000, efts: 2000 },
      { month: 'Feb', portfolio: 13000, dollar: 6000, efts: 2500 },
      { month: 'Mar', portfolio: 12000, dollar: 7000, efts: 3000 },
      { month: 'Apr', portfolio: 13000, dollar: 8000, efts: 3500 },
      { month: 'May', portfolio: 14000, dollar: 9000, efts: 4000 },
      { month: 'Jun', portfolio: 11000, dollar: 10000, efts: 4500 },
      { month: 'Jul', portfolio: 16000, dollar: 11000, efts: 5000 },
      { month: 'Aug', portfolio: 17000, dollar: 12000, efts: 5500 },
      { month: 'Sep', portfolio: 18000, dollar: 13000, efts: 6000 },
      { month: 'Oct', portfolio: 19000, dollar: 14000, efts: 6500 },
      { month: 'Nov', portfolio: 20000, dollar: 15000, efts: 7000 },
      { month: 'Dec', portfolio: 11000, dollar: 16000, efts: 7500 },
    ];

    // Set the series data for the chart
    const seriesData = [
      {
        name: 'Portfolio',
        data: data.map((item) => item.portfolio),
        color: '#0074E4', // Blue
      },
      {
        name: 'Dollar',
        data: data.map((item) => item.dollar),
        color: '#87CEEB', // Skyblue
      },
      {
        name: 'ETFs',
        data: data.map((item) => item.efts),
        color: '#FF6347', // Red
      },
    ];

    setSeries(seriesData);

    // Set the options for the bar chart
    const chartOptions = {
      chart: {
        type: 'bar',
        height: 600, // Adjust the height as needed
        width: '100%', // Make the chart occupy the entire width
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
        barHeight: '3%',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((item) => item.month),
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },

    };

    setOptions(chartOptions);
  }, []);

  return (
    <div style={{ width: '100%' }} className='flex '>
      <Chart options={options} series={series} type="bar" height={300} width={450}/>
      <div className='flex flex-col text-sm ml-10'>
      <div className='mt-14 hidden sm:block'>
        <p>Portfolio Value 
        </p>
           <p className='font-semibold text-xl'>$ 986.34</p> 
        <div className='flex items-center space-x-2 text-xs text-cyan-400' >
            <FaArrowUp size={10}/> <p>234.33 (30.80%)</p> 
        </div>
      </div>
      <div>
        <div className='flex flex-col  text-xs mt-28  md:mt-5'>
            <div className=''><span className=' bg-red-400 px-1   '></span>  Portfolio</div>
            <div className='my-2'><span className='bg-blue-200 px-1   '></span> Dollar</div>
            <div className=''><span className=' px-1 bg-blue-600  '></span> EFTs</div>
        </div>
      </div></div>
    </div>
  );
};

export default VerticalBarChart;
