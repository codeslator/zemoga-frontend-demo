import { FC } from 'react';
import PopePic from '../assets/img/pope-francis.@2x.png';

interface HeroProps {

}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className="h-[80vh]">
      <img src={PopePic} alt="pope" className="absolute w-full -top-10 object-cover mb-3" />
    </header>
  );
};

export default Hero;