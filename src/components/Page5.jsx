import React from 'react'
import entrepreneur from '../assets/entrepreneur.png';
import melltoo2 from '../assets/melltoo-img2.png';
import melltoo1 from '../assets/melltoo-img1.png';
import paths5 from '../assets/paths5.svg';
import { motion } from 'framer-motion';
function Page5() {
  return (
    <div className='flex flex-row h-screen w-screen  md:flex-col-reverse relative'>

      <div className=' flex flex-col w-2/4 space-y-16 md:h-3/6 sm:space-y-8 md:w-screen bg-emerald-800 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16 md:-mb-8  sm:space-y-2 '>
          <div className='md:z-10'><img className='md:z-10 md:h-20 md:ml-20 sm:ml-12' src={entrepreneur}></img></div>
          <div><p className='font-extrabold text-5xl sm:text-3xl'>ABC 23478</p></div>
          <div><p className='text-xl md:text-lg font-normal'>We are the best <br /> web development company in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center lg:space-x-20  pb-24 pl-16 md:pb-8'>
          <div><p className='font-medium text-xl sm:text-base md:w-max sm:pt-16'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl md:invisible'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-emerald-600 bg-cover md:h-1/2 md:w-screen relative'>

        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className='h-2/3 absolute top-32 right-10 md:h-60 md:top-8 md:right-8' src={melltoo1}>

        </motion.img>


        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className='h-2/3 absolute top-40 left-40 md:h-60 md:top-8 md:left-8' src={melltoo2}>

        </motion.img>



      </div>
      <div className='absolute left-4/10 top-24 md:invisible '>
        <img className='h-64 w-64 rounded-full' src={paths5}></img>
        <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Biggest Classifieds</p>
        </motion.div>

        <motion.div
         initial={{ y: -20 }}
         animate={{ y: 0 }}
         transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl'>East Asia</p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-20 left-16'>Countries</p>
        </motion.div>

      </div>

    </div>
  )
}

export default Page5
