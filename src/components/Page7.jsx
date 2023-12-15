import React from 'react'
import karavan2 from '../assets/karavan_2.png';
import karavanNetworking from '../assets/karavanNetworking.png';
import socialNetworking from '../assets/socialNetworking.png';
import karavanAppScreen from '../assets/karavanAppScreen.png';
import developerSocial from '../assets/developerSocial.png';
import paths7 from '../assets/paths7.svg';
import { motion } from 'framer-motion';
function Page7() {
  return (
    <div className='flex flex-row md:flex-col-reverse h-screen w-screen relative '>

      <div className=' flex flex-col w-2/4 space-y-16 md:h-3/6 sm:space-y-8 md:w-screen bg-blue-950 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16 md:-mb-8  sm:space-y-2 '>
          <div><p className='font-extrabold text-5xl sm:text-3xl '>ABC 567</p></div>
          <div><p className='sm:text-lg text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 lg:space-x-40 align-center lg:space-x-20 pb-24 pl-16 md:pb-8'>
          <div><p className='font-medium text-xl sm:text-base md:w-max sm:pt-16 '>View Case Study➡</p></div>
          <div><p className='font-medium text-xl md:invisible'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-sky-500 bg-cover md:h-1/2 md:w-screen relative'>
        <motion.img 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4 absolute top-0 left-20 md:left-8' src={karavanAppScreen}>

        </motion.img>

        <motion.img
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }} 
        className='h-2/4 absolute bottom-0 left-20 md:left-8' src={karavan2}>

        </motion.img>

        <motion.img 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4 absolute bottom-0 left-80 md:right-8 jt:right-80 ' src={karavanNetworking}>

        </motion.img>

        <motion.img 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4 absolute top-0 left-80  md:right-8 jt:right-80 ' src={socialNetworking}>

        </motion.img>

        <motion.img 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4  absolute right-1 top-40 md:invisible' src={developerSocial}>

        </motion.img>


      </div>

      <div className='absolute left-4/10 top-24 md:invisible'>
        <img className='h-64 w-64 rounded-full' src={paths7}></img>

        <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Text Headline</p>
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
          <p className='absolute bottom-20 left-16'>Footer Headline</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Page7
