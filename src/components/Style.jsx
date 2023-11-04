import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import codigo1 from "./images/codigo1.webp";
import codigo2 from "./images/codigo2.webp";
import codigo3 from "./images/codigo3.webp";
// import codigo4 from "./images/codigo4.webp";
import codigo5 from "./images/codigo5.webp";
import codigo6 from "./images/codigo6.webp";
import codigo7 from "./images/codigo7.webp";
import codigo8 from "./images/codigo8.webp";

export default function Style() {
    const [hoverStates, setHoverStates] = useState([false, false, false, false, false, false, false, false]);
    const controls = useAnimation();
    const textControls = useAnimation();


   const handleHover = async (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
    await controls.start({ scale: 1.8 });
    await textControls.start({ y: -250 });
  };


  const handleHoverExit = async (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
    await controls.start({ scale: 1 });
    await textControls.start({ y: 0 });
  };



  const textSize = '';

  const roundedDivs = [
    { image: codigo8, text1: "Transperent Trading Conditions", text: "0% swaps No commissions Secure deposits and withdrawals via your preferred payment methods", text2: "User Experience", backgroundColor: "#680A54" },
    { image: codigo2, text: "You have complete control on the type of investments you want to engage. All opportunities are pre-vetted by WithBloom", backgroundColor: '#E2C4D5', text2: "Decide on what to invest" },
    { image: codigo3, text1: "Transperent Trading Conditions", text: "Watch our course on the basic aspects of trading. Attend regular webinars and live trading sessions for beginners and pros.", backgroundColor: '#c4443f', text2: "Consultancy" },
    { image: codigo7, text: "Receive valuable tips for more profitable trading.", text2: "Trading Ideas", backgroundColor: "#50273E" },
    { image: codigo5, text: "Easily monitor the progress of your investments from your WithBloom dashboard.", text2: "Watch your portfolio grow", backgroundColor: "#CA6C35" },
    { image: codigo6, text: "Join other withBloom users to co-invest in guaranteed fixed income investments & other amazing projects.", text2: "Co-invest in opportunities", backgroundColor: "#0A681E" },
    
  
  ];

  return (
    <div>
      <div className='grid md:grid-cols-3 grid-cols-1 p-20 gap-y-40 mt-[9%] gap-x-32 '>
        {roundedDivs.map((roundedDiv, index) => (
          <motion.div
            key={index}
            className={`rounded-full ml-[12%] border-yellow-400 w-[250px] h-[250px]  mb-4 relative rounded-div`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHoverExit(index)}
            style={{ backgroundColor: roundedDiv.backgroundColor }}
            initial={{ scale: 1 }}
            animate={hoverStates[index] ? { scale: 1.3, y: 100 } : { scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            {hoverStates[index] && (
              <motion.div
                className={`absolute inset-0 flex justify-center hover:text-${textSize} items-center text-center text-white font-bold text-${textSize}`}
                style={{ fontSize: "6px", marginTop: "30px", width: "100px", textAlign: "center", marginLeft: "70px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {roundedDiv.text}
              </motion.div>
            )}
            <motion.div
              initial={{ scale: 1 }}
              animate={hoverStates[index] ? { scale: 0.5, y: 100 } : { scale: 1, y: 0 }}
              className="absolute inset-0"
            >
              <img src={roundedDiv.image} alt='codigo' width={150} height={150} className='mx-auto mt-3' loading='lazy'></img>
            </motion.div>
            <motion.div
              className='font-bold mt-[100%] text-center'
            >
              {roundedDiv.text2}
            </motion.div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
