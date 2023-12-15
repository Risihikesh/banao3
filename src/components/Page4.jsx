import React from 'react'
import worldAward from '../assets/worldAward.png';
import nexgTv from '../assets/nexgTv.png';
import nexgTvEntertainment from '../assets/nexgTvEntertainment.png';
import paths4 from '../assets/paths4.svg';
import { motion } from 'framer-motion';

function Page4() {
  return (
    <div className='flex flex-row h-screen w-screen md:flex-col-reverse relative'>

      <div className=' flex flex-col w-2/4 space-y-16 md:h-3/6  sm:space-y-8 md:w-screen bg-purple-800 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16 md:-mb-8  sm:space-y-2'>
          <div className='md:z-10'><img className='md:z-10 md:h-20 md:ml-20 sm:ml-10' src={worldAward}></img></div>
          <div><p className='font-extrabold text-5xl sm:text-3xl'>ABC 123</p></div>
          <div><p className='text-xl font-normal md:text-lg'>We are the best <br /> web development company in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center lg:space-x-20  pb-24 pl-16 md:pb-8 '>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 1 }}>
            <div><p className='font-medium text-xl sm:text-base md:w-max sm:pt-16'>View Case Study ➡</p></div>
          </motion.div>
          <div><p className='font-medium text-xl md:invisible'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-purple-100 bg-cover md:h-1/2 md:w-screen relative'>

        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className='h-2/3 absolute top-32 right-20 md:h-60 md:top-8 md:right-8 sm:right-1' src={nexgTv}>

        </motion.img>


        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='h-2/3 absolute top-32 left-20 md:h-60 md:top-8 md:left-8 sm:left-1' src={nexgTvEntertainment}>

        </motion.img>



      </div>
      <div className='absolute left-4/10 top-24 md:invisible '>
        <img className='h-64 w-64 rounded-full' src={paths4}></img>
        <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl'>25M+ Downloads</p>
        </motion.div>

        <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-20 left-16'>on appstore</p>
        </motion.div>
      </div>

    </div>
  )
}

export default Page4
