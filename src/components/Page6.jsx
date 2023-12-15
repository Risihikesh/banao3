import React from 'react'
import erpApp from '../assets/erpApp.png';
import paths6 from '../assets/paths6.svg';
import { motion } from 'framer-motion';
function Page6() {
  return (
    <div className='flex flex-row h-screen w-screen md:flex-col-reverse relative'>

      <div className=' flex flex-col w-2/4 space-y-16 md:h-3/6 sm:space-y-8 md:w-screen bg-blue-900 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16 md:-mb-8  sm:space-y-2 '>
          <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1 }}>
            <div><p className='font-extrabold text-5xl sm:text-3xl'>ABC 678</p></div>
          </motion.div>
          <div><p className='text-xl md:text-lg font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center lg:space-x-20  pb-24 pl-16 md:pb-8'>
          <div><p className='font-medium text-xl sm:text-base md:w-max sm:pt-16'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl md:invisible'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-yellow-600 bg-cover md:h-1/2 md:w-screen relative'>

        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='h-full absolute w-full ' src={erpApp}>

        </motion.img>






      </div>

      <div className='absolute left-4/10 top-24 md:invisible'>
        <img className='h-64 w-64 rounded-full' src={paths6}></img>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Developing ERP</p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl'>Text Headline</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-20 left-16'>in furniture industry</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Page6
