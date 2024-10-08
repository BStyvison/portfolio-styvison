// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'

// icons
import { FaQuoteLeft } from 'react-icons/fa'

// next image
import Image from 'next/image'

// testimonial data
const testimonialData = [
  {
    image: '/profile-deodato.jpg',
    name: 'Dr. Deodato Narciso',
    position: 'Medico Ortopedista',
    message:
      'Trabalhar com Styvison foi uma experiência transformadora. Ele demonstrou uma habilidade excepcional em entender as necessidades da minha prática médica e transformá-las em soluções digitais eficazes. Meu site nunca foi tão funcional e atraente!',
  },
  {
    image: '/profile-marques.png',
    name: 'Marcio Santana',
    position: 'empresario',
    message:
      'Fiquei extremamente satisfeito com o trabalho realizado por Styvison. Ele capturou perfeitamente a essência do meu negócio e entregou um site que não só parece incrível, mas também funciona de maneira impecável. Recomendo fortemente seus serviços a quem procura qualidade e profissionalismo!',
  },
  {
    image: '/profile-tainan.png',
    name: 'Tainan Breno',
    position: 'CEO',
    message:
      'A colaboração com Styvison foi fundamental para a renovação da nossa presença online. Sua atenção aos detalhes e capacidade de adaptar-se às mudanças foram impressionantes. O resultado final superou nossas expectativas, trazendo mais clientes para nosso negócio!',
  },
]

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      modules={[Pagination, Navigation]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col lg:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* Position */}
                  <div className="text-[10px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & msg */}
              <div className=" flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      Service Slide
    </Swiper>
  )
}

export default TestimonialSlider
