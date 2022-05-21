import { FC } from 'react'

interface HeroClosingProps {
  title: string;
  remainingTime: string;
}

const HeroClosing: FC<HeroClosingProps> = ({ title, remainingTime }) => {
  return (
    <div className="flex absolute bottom-20 lg:bottom-0 h-10 lg:h-[3.25rem] w-full">
      <div
        className="relative w-[30%] bg-black-transparent text-white flex 
                    justify-end items-center px-1 after:absolute after:-right-[.75rem]
                    after:block after:content-[' '] after:w-3 after:h-3 after:rounded-br
                    after:rounded-tr after:bg-black-transparent after:border-solid 
                    after:border-transparent"
      >
        <span className="text-base lg:text-2xl">{title}</span>
      </div>
      <div className="relative w-[70%] bg-white-transparent text-black flex justify-start items-center px-1 pl-4">
        <span className="text-base lg:text-3xl">{remainingTime}</span>
      </div>
    </div>
  );
};

export default HeroClosing;