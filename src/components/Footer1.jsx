import React from 'react'
import { motion } from 'framer-motion'

export default function Footer1() {
  return (
    <div><div className='mt-[35%] '>
    <motion.div
     initial={{ x: -1000 }} 
     animate={{ x: 0 }} 
     transition={{ duration: 1 }} 
    >
  <span className='font-bold flex items-center text-[18px] justify-center'>discover new coins and their market rates <img src="https://cdn-icons-png.flaticon.com/128/2219/2219299.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="plane" className='w-10 h-10' />
  </span>  
  <span className='text-[14px] text-gray-300'> WB Capital Limited is a fintech company duly  lincensed by  the security and exchange Commision (SEC) of Nigeria. </span>
    </motion.div>
 </div></div>
  )
}
