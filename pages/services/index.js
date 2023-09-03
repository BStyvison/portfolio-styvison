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
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <h2 className="h2 xl:mt-8">
              My Services <span className="text-accent"></span>
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="w-full xl:max-w-[63%]">
            {/* slider */}
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
