import { FC } from 'react';
import PopePic from '../assets/img/pope-francis.@2x.png';

interface HeroProps {

}

//absolute w-[160vw] h-full -top-20 sm:w-[160vw] sm:top-0 2xl:-top-10 lg:h-[104vh] lg:left-0 object-cover mb-3
//md:-top-10 lg:-top-10 lg:h-[104vh] lg:left-0

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className="relative h-[80vw] min-h-[35rem] max-h-[38rem] overflow-hidden lg:min-h-screen lg:max-h-screen">
      <img
        src={PopePic}
        alt="pope"
        className="absolute object-cover w-[160vw] h-full -top-20 sm:object-center md:w-[110vw] md:object-top lg:h-[106vh] lg:-top-10 lg:object-top mb-3" />
    </header>
  );
};

export default Hero;