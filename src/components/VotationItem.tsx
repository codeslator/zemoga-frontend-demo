import { FC } from 'react';
import ThumbsUp from '../assets/img/thumbs-up.svg';
import ThumbsDown from '../assets/img/thumbs-down.svg';
import { Button } from './';

interface VotationItem {

}

const VotationItem: FC<VotationItem> = () => {
  return (
    <article className="votation__item mb-2 h-[180px] relative">
      <div className="votation__container w-full h-full flex justify-between">
        <div className="votation__picture w-full md:w-[30%] shrink-0 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="votation__info w-full md:w-[78%] h-full px-4 py-3 flex justify-between absolute right-0 votation-card-gradient text-white">
          <div className="votation__data w-[70%]">
            <h6 className="votation__name text-lg lg:text-3xl pb-2">Mark Zuckenberg</h6>
            <p className="votation__description text-base lg:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eaque atque reiciendis enim.</p>
          </div>
          <div className="votation__actions w-[30%]">
            <div className="votation__date text-[14px] text-right font-bold">1 month ago in Business</div>
            <div className="votation_buttons mt-3 flex justify-end">
              <Button
                type="button"
                color="hover:bg-main-teal bg-dark-teal"
                icon={ThumbsUp}
                classes="w-10 h-10 mr-2"
                iconClasses="w-5 h-5"
              />
              <Button
                type="button"
                color="hover:bg-main-yellow bg-dark-yellow"
                icon={ThumbsDown}
                classes="w-10 h-10 mr-2"
                iconClasses="w-5 h-5"
              />
              <Button
                type="button"
                color="bg-black-transparent-dark border-2 border-white text-white"
                text="Vote now"
                classes="h-10 px-5"
              // iconClasses="w-5 h-5"
              />
            </div>
          </div>
        </div>
        <div className="votation__bar absolute bottom-0 flex justify-between w-full h-12">
          <div className="votation__possitive w-[50%] h-full bg-dark-teal flex items-center justify-start px-4">
            <div className="votation__thumb">
              <img src={ThumbsUp} alt="thumbs_up" className="w-6 h-6" />
            </div>
            <div className="votation__value text-2xl pl-2 text-white">25.5%</div>
          </div>
          <div className="votation__negative  w-[50%] h-full bg-dark-yellow flex items-center justify-end px-4">
            <div className="votation__value text-2xl pr-2 text-white">25.5%</div>
            <div className="votation__thumb">
              <img src={ThumbsDown} alt="thumbs_down" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VotationItem;