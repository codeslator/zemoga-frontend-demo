import { FC } from 'react';
import PopePic from '../assets/img/pope-francis.@2x.png';
import HeroCard from './HeroCard';

interface HeroProps {

}

//absolute w-[160vw] h-full -top-20 sm:w-[160vw] sm:top-0 2xl:-top-10 lg:h-[104vh] lg:left-0 object-cover mb-3
//md:-top-10 lg:-top-10 lg:h-[104vh] lg:left-0

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <header className="relative h-[80vw] min-h-[35rem] max-h-[38rem] overflow-hidden lg:min-h-screen lg:max-h-screen">
      <img
        src={PopePic}
        alt="pope"
        className="absolute object-cover w-[160vw] h-full -top-20 sm:object-center md:w-[110vw] md:object-top lg:h-[106vh] lg:-top-10 lg:object-top mb-3" />
      <div className="relative xl:container w-full xl:w-[80%] pt-[68px] lg:pt-0 md:px-8 lg:px-4 xl:px-14 lg:mx-auto lg:mt-[21vh]">
        <div className="grid grid-cols-1">
          <HeroCard
            hairline="What's your opinion on"
            title="Pope Francis?"
            description="He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
            moreInfoLink="http://wikipedia.com"
            moreInfoTitle="More Information"
            callToAction="What’s Your Veredict?"
            thumbs
          />

        </div>
      </div>
    </header>
  );
};

export default Hero;