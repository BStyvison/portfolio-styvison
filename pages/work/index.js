// components
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// frame notion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <div className=" h-full bg-primary/38 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex lg:w-[30vw] flex-col lg:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:mt-12"
            >
              Meus Trabalhos<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[480px] mx-auto lg:max-0"
            >
              Arte e tecnologia unidas para uma experiência impactante
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:max-w-[63%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Work
