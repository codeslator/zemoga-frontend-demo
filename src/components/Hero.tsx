import { FC } from 'react';
import PopePic from '../assets/img/pope-francis.@2x.png';
import HeroCard from './HeroCard';
import HeroClosing from './HeroClosing';

const Hero: FC = ({ }) => {
  return (
    <header className="hero lg:min-h-screen">
      <img
        className="hero__background max-w-none"
        src={PopePic}
        alt="Pope Francis" />
      <div className="relative xl:container w-full xl:w-[80%] pt-[68px] lg:pt-0 md:px-8 lg:px-4 xl:px-14 lg:mx-auto lg:mt-[21vh]">
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
      <HeroClosing title="CLOSING IN" remainingTime="22 days" />
    </header>
  );
};

export default Hero;