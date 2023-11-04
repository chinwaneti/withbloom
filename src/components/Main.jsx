import React from 'react';
import Header from './Header';
import Footer from './Footer';
import pic from "./images/mobile-app.webp";
import './Main.css'; // Import a CSS file to define the animation
import Style from './Style';
import happy from "./images/happy.png"
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';


export default function Main() {
  return (
    <div className="h-[100vh] relative">
      <div>
        <Header />
      </div>
      <div>
        <p className='absolute top-36 hidden sm:block right-20 border-gray-100'>
<img src={happy} alt="happu" 
    className='mt-10 h-full'
/>
        </p>
        {/* <div className='absolute top-[22%] md:ml-20 ml-10'>
          <p className='font-bold text-[50px] text-blue-800'>The Better Way</p>
          <p className='font-bold text-[50px] text-blue-800'>To Trade & Invest</p>
        </div>

        <p className='md:w-[600px] md:ml-20 ml-10 top-[55%] absolute'>
          WithBloom: Simplify currency exchange and monitor crypto values effortlessly. Your comprehensive financial companion for efficient money management.
        </p>
        <p className='md:w-[500px]  md:ml-20  ml-10 top-[70%] absolute'>
          Bitcoin (BTC):

          Approximate Exchange Rate: 1 BTC = $40,000 USD
          Ethereum (ETH):

          Approximate Exchange Rate: 1 ETH = $2,500 USD
        </p> */}

        <div>
        <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className='font-extrabold md:text-[50px] text-[25px] md:w-[50%] w-full ml-[5%] mt-[7%]'
  >
    The Better Way
    <div className='text-blue-800'>To Trade and Invest.</div>
  </motion.p>

  <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='ml-[5%] md:w-[51.5%] mt-4'
    >
     WithBloom: Simplify currency exchange and monitor crypto values effortlessly. Your comprehensive financial companion for efficient money management.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className='ml-[5%] my-5 md:w-[51.5%]'
    >
      Bitcoin (BTC):

Approximate Exchange Rate: 1 BTC = $40,000 USD
Ethereum (ETH):

Approximate Exchange Rate: 1 ETH = $2,500 USD
    </motion.p>

        </div>

      </div>
      <div className="absolute top-[89%] md:w-full w-[100%] ">
        <div className="flex bg-gray-100 p-10">
          <img src="https://cdn-icons-png.flaticon.com/128/2592/2592317.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="pix" className="w-20 md:h-20 md:ml-56 " />
          <div className="ml-10">
            <p className="font-bold text-xl text-blue-800">Your Security is our Priority</p>
            <p className="md:w-[650px]">
              WithBloom uses the highest levels of Internet Security and is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.
            </p>
          </div>
        </div>
        <p className='text-blue-800 font-bold text-center text-4xl absolute top-[122%] py-7 md:ml-[31%] ml-5'>Your safe space for investing</p>
      </div>

      <div className='absolute md:top-[127%] top-[150%] ml-5'>
        <Style /></div>

      

      <div className='absolute md:top-[302%] top-[660%] md:ml-16 ml-6 py-10 px-5 w-[90%] rounded-3xl bg-gray-100'>
        <div className='flex w-[80%] mx-auto'>
          <div className='md:w-[50%] h-full ml-5 mt-7'>
            <p className='font-bold md:text-4xl text-2xl my-8'>Trade on the go with the WithBloom trading app</p>
            <p className='my-8'>
              Enjoy a smooth trading experience from any device. Download our app and keep track of your orders whether you're in the office, on vacation, or at home.
            </p>
            <p className='md:ml-0 '><img src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?size=626&ext=jpg&ga=GA1.1.1685298518.1695204527&semt=ais" alt="" className='w-28 h-28' /></p>
          </div>
          <div className='w-[50%] h-full hidden sm:block'>
            <img
              src={pic}
              alt="pic"
              className='ml-[20%]'
             
            />
          </div>
        </div>
      </div>
      <div className='absolute md:top-[400%] top-[760%]'>
        <Footer />
      </div>
    </div>
  );
}
