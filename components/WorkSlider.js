// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';
import Link from 'next/link';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Clinica da Graca',
          path: '/clinica-da-graca.png',
          link: 'https://clinicadagraca.com.br/',
        },
        {
          title: 'Escola ENI',
          path: '/escola-eni.png',
          link: 'https://escolaeni.com.br/',
        },
        {
          title: 'Antony',
          path: '/antony.png',
          link: 'https://antonyspaintremodeling.com/',
        },
        {
          title: 'Dr.Deodato',
          path: '/Banner_4.png',
          link: 'https://drdeodatoortopedista.com/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Batista Filho',
          path: '/batista-filho.png',
          link: 'https://batistafilho.com/',
        },
        {
          title: 'Gallery',
          path: '/banner_2.png',
          link: 'https://bstyvison.github.io/Gallery/',
        },
        {
          title: 'IEG',
          path: '/ieg.png',
          link: 'https://ieg.org.br/',
        },
        {
          title: 'Construtora Castelus',
          path: '/banner_1.png',
          link: 'https://construtoracastelus.com.br/',
        },
      ],
    },
  ],
};
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={18}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      modules={[Pagination]}
      className="h-[283px] md:h-[488px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                >
                  <Link href={`${image.link}`} target="_blank" rel="external">
                    <div className=" flex items-center justify-center relative w-[297px] h-[170px] md:w-[345px] md:h-[197px] overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        fill={true}
                        className="object-cover"
                        alt=""
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4e22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title & desc */}
                      <div className="absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:lg:-translate-y-20 transition-all duration-300">
                        <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Veja o Projeto</div>
                          {/* title part 2 */}
                          {/* <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Project
                          </div> */}
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
      Service Slide
    </Swiper>
  );
};

export default WorkSlider;
