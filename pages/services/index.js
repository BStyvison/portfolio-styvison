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
      <div className="container mx-auto"></div>
      <Bulb />
    </div>
  )
}

export default Services
