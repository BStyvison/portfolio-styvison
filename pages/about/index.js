// components
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { icons } from 'react-icons';

// counter
import CountUp from 'react-countup';
import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaSass,
  FaNodeJs,
  FaLaravel,
  FaVuejs,
  FaPhp,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiGulp,
  SiTailwindcss,
  SiVuetify,
  SiMysql,
} from 'react-icons/si';

//  data
export const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          <FaHtml5 key={1} title="HTML5" />,
          <FaCss3 key={2} title="CSS3" />,
          <FaJs key={3} title="JavaScript" />,
          <FaReact key={4} title="React" />,
          <FaVuejs key={5} title="Vue.js" />,
          <SiNextdotjs key={6} title="Next.js" />,
          <SiVuetify key={7} title="Vuetify" />,
          <SiTailwindcss key={8} title="Tailwind CSS" />,
          <FaSass key={9} title="Sass" />,
        ],
      },
      {
        title: 'Backend',
        icons: [
          <FaNodeJs key={10} title="Node.js" />,
          <FaLaravel key={11} title="Laravel" />,
          <SiMysql key={12} title="MySQL" />,
          <SiTypescript key={13} title="TypeScript" />,
          <FaPhp key={14} title="PHP" />,
        ],
      },
      {
        title: 'Ferramentas de Versionamento e Build',
        icons: [
          <SiGit key={15} title="Git" />,
          <SiGithub key={16} title="GitHub" />,
          <SiGulp key={17} title="Gulp" />,
        ],
      },
      {
        title: 'Sistema para Gerenciamento de Conteúdo',
        icons: [<FaWordpress key={18} title="WordPress" />],
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
    title: 'Experiências',
    info: [
      {
        title: 'Desenvolvedor Web - XP Mídia',
        stage: 'Abril de 2022 - Março de 2023',
      },
      {
        title: 'Desenvolvedor Web - Autônomo',
        stage: 'Março de 2023 - Atualmente',
      },
      {
        title: 'Desenvolvedor Web - Agência 87',
        stage: 'Junho de 2023 - Agosto de 2023',
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
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center lg:text-left">
      <Circles />
      {/* avatar img */}
      <div className="container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center lg:mt-8">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl sm:text-5xl"
          >
            <span className="text-accent">Arte e tecnologia </span> unidas para
            uma experiência impactante!
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0"
          >
            Há quase 2 anos, comecei a trabalhar como desenvolvedor freelancer.
            Desde então, tenho realizado trabalhos para agências e produtoras.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-8"
          >
            <div className="flex flex-1 lg:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Ano de experiência
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clientes Satisfeitos
                </div>
              </div>
              {/* Projects Finished */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                  +
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos finalizados
                </div>
              </div>
              {/* Awards */}
              <div className="relative flex-1">
                <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />%
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clientes Satisfeitos
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
          className="flex flex-col w-full lg:max-w-[48%] h-[480px] lg:mt-14"
        >
          <div className="flex gap-x-4 lg:gap-x-8 mx-auto lg:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 lg:py-6 lg:pr-14 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-bold text-lg text-accent">
                  {item.title}
                </div>
                <div className="hidden md:flex">-</div>
                {/* stage */}
                <div>{item.stage}</div>
                {/* description */}
                {item.description && (
                  <div className="text-sm mt-2">{item.description}</div>
                )}
                <div className="flex gap-x-4 flex-wrap">
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-2xl text-white lg:pb-4"
                    >
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
  );
};

export default About;
