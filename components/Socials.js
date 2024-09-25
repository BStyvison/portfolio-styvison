// Links
import Link from 'next/link';

// icons
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://www.linkedin.com/in/styvison/'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://github.com/BStyvison'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'https://www.instagram.com/styvisonviana/'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={
          'https://api.whatsapp.com/send?phone=5586995358729&text=Ol%C3%A1%20Styvison,%20conheci%20seu%20portf%C3%B3lio%20e%20estou%20interessado%20em%20saber%20mais%20sobre%20suas%20habilidades.%20Podemos%20conversar?'
        }
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
