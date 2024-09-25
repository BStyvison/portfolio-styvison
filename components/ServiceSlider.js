// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// icons
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxUpdate,
} from 'react-icons/rx';

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Desenvolvimento',
    description:
      'Transformo ideias em código, criando sites e aplicativos impactantes.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description:
      'Experiências visuais únicas. Interfaces intuitivas que destacam sua marca.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description:
      'Dê destaque ao seu projeto com palavras envolventes e persuasivas.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Posicione sua marca. Aumente visibilidade online para atrair o público certo.',
  },
  {
    icon: <RxUpdate />,
    title: 'Manutenção',
    description:
      'Manter o site ou aplicação atualizado com as últimas tecnologias.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      Service Slide
    </Swiper>
  );
};

export default ServiceSlider;
