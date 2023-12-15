import React from 'react'
import { motion } from 'framer-motion';
import paths1 from '../assets/paths1.svg';



import dominosBread from '../assets/dominos-bread.png';
import domi1 from '../assets/domi-img1.png';
import dominosBreadSticks from '../assets/dominos-bread1.png';
import pizzaBox from '../assets/pizza_box.png';
import domi2 from '../assets/dominosImg2.png';

function Page1() {
  return (

    <div className='flex flex-row md:flex-col-reverse  h-screen  w-screen relative  '>

      <div className=' flex flex-col w-2/4 space-y-16  sm:space-y-8 md:h-3/6 md:w-screen bg-slate-900 justify-end  '>
        
          <div className='flex flex-col space-y-6 mb-10 pl-16 md:-mb-8  sm:space-y-2 '>
            <div><p className='font-extrabold text-5xl sm:text-3xl '>ABC 456</p></div>
            <div><p className='text-xl md:text-lg sm:text-sm font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
          </div>
       

        <div className='flex flex-row space-x-56 lg:space-x-20 align-center  pb-24 md:pb-8 pl-16'>
          <div><p className='font-medium text-xl sm:text-base md:w-max sm:pt-16'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl md:invisible'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-slate-950 bg-cover relative  md:h-1/2 md:w-screen'>

        
          <motion.img 
           initial={{ y: -30,x:-30, opacity: 0 }}
           animate={{ y: 0,x:0, opacity: 1 }}
           transition={{ type: "tween", duration: 1 }}
          className='h-2/6 h-2/7 kt:2/8 absolute top-0 left-0' src={pizzaBox}>

          </motion.img>

        <motion.img 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-3/6 lg:h-3/7 sm:h-60 md:w-28 absolute top-28 right-32 ' src={domi2}>

        </motion.img>

        <motion.img 
         initial={{ y: -30,x:30, opacity: 0 }}
         animate={{ y: 0,x:0, opacity: 1 }}
         transition={{ type: "tween", duration: 1 }}
        className='h-1/5 lg:h-1/6 md:h-28 md:w-28 absolute right-16 top-0' src={dominosBread}>

        </motion.img>

        <motion.img 
         initial={{ y: 30, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ type: "tween", duration: 1 }}
        className='h-3/6 lg:h-3/7 md:h-28 md:w-28 absolute bottom-0 left-8 ' src={domi1}>

        </motion.img>

        <motion.img 
         initial={{ y: 30,x:30, opacity: 0 }}
         animate={{ y: 0,x:0, opacity: 1 }}
         transition={{ type: "tween", duration: 1 }}
        className='h-2/6  lg:h-2/7 md:h-96 absolute md:h-28 md:w-28 right-0 bottom-0 ' src={dominosBreadSticks}>

        </motion.img>


      </div>

      <div className='absolute left-4/10 top-24 md:invisible'>
        <img className='h-64 w-64 rounded-full' src={paths1}></img>
        <motion.div 
        initial={{y:20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"tween",duration:1}}>
          <p className='absolute bottom-40 left-0 '>Redefining</p>
        <p className='absolute bottom-28 left-0 text-4xl'>UX Strategy</p>
        <p className='absolute bottom-20 left-16'>and UI design</p>
        </motion.div>
        </div>

    </div>

    
    

  )
}

export default Page1
