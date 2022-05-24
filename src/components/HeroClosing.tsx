import { FC } from 'react'

interface HeroClosingProps {
  title: string;
  remainingTime: string;
}

const HeroClosing: FC<HeroClosingProps> = ({ title, remainingTime }) => {
  return (
    <section id="hero-closing" className="w-full">
      <div className="hero__closing-gauge">
        <div className="closing-gauge__left">
          <span className="closing-gauge__title">{title}</span>
        </div>
        <div className="closing-gauge__right">
          {/* <span className="closing-gauge__number">22</span> */}
          <span className="closing-gauge__desc">{remainingTime}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroClosing;