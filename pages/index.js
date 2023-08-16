//next image
import Image from "next/image";

//componets
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
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
          <h1 className="h1"> Transforming Ideas <br/> Intro{' '}
          <span className="text-accent">Digital Reality</span>
          </h1>
          {/* Subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Lorem ipsum dolor sit amet. Cum sint autem qui earum voluptates ut sapiente dolor nam nihil temporibus et sint galisum!
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative" >
            <ProjectsBtn/>
          </div>
        </div>
      </div>
      {/* Image */}
      <div>Image</div>
    </div>

  ) 
};

export default Home;
