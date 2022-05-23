import { FC } from 'react';
import PopePic from '../assets/img/pope-francis.@2x.png';
import HeroCard from './HeroCard';
import HeroClosing from './HeroClosing';
import { useWebsite } from '../hooks';

const Hero: FC = () => {
  const { heroCard: { title, hairline, description, callToAction } } = useWebsite();

  return (
    <header className="hero lg:min-h-screen">
      <img
        className="hero__background max-w-none"
        src={PopePic}
        alt="Pope Francis" />
      <div className="relative xl:container w-full xl:w-[80%] pt-[68px] md:pt-[80px] lg:pt-0 md:px-1 lg:px-4 xl:px-14 2xl:mx-auto lg:mt-[21vh]">
        <HeroCard
          hairline={hairline}
          title={title}
          description={description}
          moreInfoLink="http://wikipedia.com"
          moreInfoTitle="More Information"
          callToAction={callToAction}
          thumbs
        />
      </div>
      <HeroClosing title="CLOSING IN" remainingTime="22 days" />
    </header>
  );
};

export default Hero;