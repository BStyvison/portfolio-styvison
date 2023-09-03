// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from 'react-icons/rx'

// components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// frame notion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Brandin',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print',
  },
  {
    icon: <RxPencil2 />,
    title: 'Designer',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print',
  },
]

const Services = () => {
  return (
    <div className=" h-full bg-primary/38 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[480px] mx-auto lg:max-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[63%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
