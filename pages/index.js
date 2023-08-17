//next image
import Image from "next/image";

//componets
import ParticlesContainer from '../components/ParticlesContainer'
import { ProjectsBtn } from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//frame motion
import { motion } from "framer-motion";

//variants
import {fadeIn} from '../variants'

export const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/*Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/*Title */}
          <motion.h1    
            variants={fadeIn('down', 0.2)} initial="hidden" 
            animate='show' 
            exit='hidden'
            className="h1"
          > 
            Transforming Ideas <br/> Intro{' '}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p             
            variants={fadeIn('down', 0.2)} initial="hidden" 
            animate='show' 
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Lorem ipsum dolor sit amet. Cum sint autem qui earum voluptates ut sapiente dolor nam nihil temporibus et sint galisum!
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative" >
            <ProjectsBtn/>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.3)} initial="hidden" 
            animate='show' 
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      </div>
    </div>

  ) 
};

export default Home;
