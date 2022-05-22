import { FC } from 'react';
import ThumbsUp from '../assets/img/thumbs-up.svg';
import ThumbsDown from '../assets/img/thumbs-down.svg';
import Button from './Button';

interface HeroCardProps {
  hairline?: string;
  title: string;
  description: string;
  moreInfoTitle?: string;
  moreInfoLink?: string;
  callToAction?: string;
  thumbs?: boolean;
}

const HeroCard: FC<HeroCardProps> = ({ hairline, title, description, moreInfoTitle, moreInfoLink, callToAction, thumbs }) => {
  return (
    <article id="hero-card" className="w-[58%] md:w-[55%] text-left hero-card-background border-none dark:bg-gray-800 dark:border-gray-700 p-3 md:py-8 md:px-6 text-white ml-3 lg:ml-0">
      {Boolean(hairline) && (
        <p className=" text-[12px] md:text-base lg:text-lg xl:text-sm dark:text-gray-400">{hairline}</p>
      )}
      <h5 className="text-[3rem] leading-[2.5rem] lg:text-5xl dark:text-white ">{title}</h5>
      <p className="mt-4 max-w-[90%] sm:max-w-full lg:max-w-[90%] text-lg leading-[16px] md:text-lg md:leading-[18px] lg:text-xl lg:leading-[26px] dark:text-gray-400">{description}</p>
      {Boolean(moreInfoTitle) && (
        <a href={moreInfoLink} className="mt-4 hidden md:block">
          <div className="flex align-center">
            <svg className="w-[1.5rem] h-[1.5rem] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18"><path d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z" fill="#FFF" fill-rule="nonzero" /></svg>
            <span className="text-md underline">{moreInfoTitle}</span>
          </div>
        </a>
      )}
      {Boolean(callToAction) && (
        <h6 className="mb-3 text-[12px] md:text-base lg:text-3xl font-bold mt-4  dark:text-white">{callToAction}</h6>
      )}
      <div className="flex content-between mt-0 -mb-3 -mx-3 md:-mb-8 md:-mx-6">
        {thumbs ? (
          <>
            <Button
              type="button"
              color="hover:bg-main-teal bg-dark-teal"
              icon={ThumbsUp}
              fullWidth
              classes="lg:py-10"
              iconClasses="lg:w-8 lg:h-8"
            />
            <Button
              type="button"
              color="hover:bg-main-yellow bg-dark-yellow"
              icon={ThumbsDown}
              fullWidth
              classes="lg:py-10"
              iconClasses="lg:w-8 lg:h-8"
            />
          </>
        ) : (
          <Button
              type="button"
              color="bg-gray-600"
              text="Click here"
              fullWidth
              classes="lg:py-10"
            />
        )}
      </div>
    </article>
  );
};

export default HeroCard;