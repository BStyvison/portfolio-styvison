// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { icons } from 'react-icons'

// counter
import CountUp from 'react-countup'
import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaSass,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiGulp,
} from 'react-icons/si'

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Desenvolvimento Web',
        icons: [
          <SiNextdotjs key={5} />,
          <SiTypescript key={8} />,
          <FaReact key={4} />,
          <FaJs key={3} />,
          <FaSass key={9} />,
          <FaCss3 key={2} />,
          <FaHtml5 key={1} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: 'Outras tecnologias',
        icons: [<SiGit key={4} />, <SiGithub key={5} />, <SiGulp key={6} />],
      },
    ],
  },
  {
    title: 'Formação',
    info: [
      {
        title: 'ADS - Universidade Católica de Brasília',
        stage: 'Cursando',
      },
    ],
  },
  {
    title: 'experiencias',
    info: [
      {
        title: 'Progamador Web - XP Mídia',
        stage: 'Abril de 2022 - Atualmente',
      },
      {
        title: 'Programador web - Autonomo',
        stage: 'Março de 2023 - Atualmente',
      },
      {
        title: 'Progamador Web - Agencia 87',
        stage: 'junho de 2023 - Atualmente',
      },
    ],
  },
  {
    title: 'Cursos',
    info: [
      {
        title: 'Ignite - Rocketseat',
        stage: '2023',
      },
      {
        title: 'JavaScript Completo ES6 - Origamid',
        stage: '2022',
      },
      {
        title: 'CSS com SASS - Origamid',
        stage: '2022',
      },
      {
        title: 'HTML e CSS para Iniciantes - Origamid',
        stage: '2022',
      },
      {
        title: 'Scrum Fundamentals Certified - SCRUMstudy',
        stage: '2022',
      },
    ],
  },
]

const About = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] z-10"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designers.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then, i ve
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Anos de experiencia
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clientes Sastifeitos
                </div>
              </div>
              {/* Projects Finished */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos finalizados
                </div>
              </div>
              {/* Awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos finalizados
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
