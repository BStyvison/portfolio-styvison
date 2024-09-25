// next image
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'

// components
import ParticlesContainer from '../components/ParticlesContainer'
import { ProjectsBtn } from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// frame motion
import { easeInOut, motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'

export const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center lg:pt-20 lg:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h3
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 text-lg"
          >
            Oi, Eu sou o Styvison
          </motion.h3>
          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-4"
          >
            Programador
            <span className="text-accent">
              {' '}
              <br /> Front-End{' '}
            </span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm lg:max-w-md mx-auto lg:mx-0 mb-10 lg:mb-8"
          >
            Tenho 26 anos e sou desenvolvedor frontend e experiencia em desenvolvimento de site e sistemas.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center lg:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden lg:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: easeInOut }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[1%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
