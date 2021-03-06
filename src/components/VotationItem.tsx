import { FC } from 'react';
import ReactTimeAgo from 'react-time-ago'
import ThumbsUp from '../assets/img/thumbs-up.svg';
import ThumbsDown from '../assets/img/thumbs-down.svg';
import { Button, VotationBar } from './';
import { CandidateData } from '../global/interfaces';
import { useVotations } from '../hooks';
import { parseISO } from 'date-fns';

interface VotationItem {
  type: string;
  candidate: CandidateData;
}

const VotationItem: FC<VotationItem> = ({ type, candidate }) => {
  const { handleNegativeVote, handlePositiveVote, handleVoteAgain, handleVoteFinish } = useVotations();
  const { id, name, picture, description, lastUpdated, hasVoted, votes } = candidate;

  return (
    <article className={`votation__item mb-4 h-[400px] ${type === 'list' ? 'md:h-[200px]' : 'mr-4'} relative`}>
      <div className="votation__container w-full h-full flex justify-between">
        <div className={`votation__picture w-full ${type === 'list' && 'md:w-[25%]'} shrink-0 `}>
          <div className={`votation_winning bg-dark-teal w-16 h-16 flex justify-center items-center absolute top-[25%] sm:top-[30%] ${type === 'list' && 'md:w-12 md:h-12 md:top-0'} z-10`}>
            <img src={ThumbsUp} alt="votation_winning" className="w-8 h-8 md:w-6 md:h-6" />
          </div>
          <img
            src={picture}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className={`votation__info w-full h-full px-4 py-3 
                flex flex-col justify-center  items-center absolute right-0 
                ${type === 'list' ? 'md:w-[80%] votation-card-gradient' : 'md:w-full votation-card-gradient-dark'} text-white 
                ${type === 'list' && 'md:flex-row md:justify-between md:items-start'}`}
        >
          <div className={`votation__data w-[75%] ${type === 'list' ? 'md:w-[70%]' : 'md:w-[70%]'}`}>
            <h6 className="votation__name text-5xl md:text-3xl pb-2">{name}</h6>
            <p className="votation__description text-[16px] md:text-md">{description}</p>
          </div>
          <div className={`votation__actions w-[90%] mt-3 ${type === 'list' ? 'md:w-[30%] md:mt-0' : 'md:w-full'}`}>
            <div className="votation__date text-[14px] text-right font-bold">{hasVoted ? 'Thank you for your vote!' : <ReactTimeAgo date={parseISO(lastUpdated)} locale="en-US"/>}</div>
            <div className="votation_buttons mt-3 flex justify-end items-center">
              {!hasVoted && (
                <>
                  <Button
                    type="button"
                    color="hover:bg-main-teal bg-dark-teal focus:border-2 focus:border-white"
                    icon={ThumbsUp}
                    classes="w-16 h-16 md:w-10 md:h-10 mr-5 md:mr-2"
                    iconClasses="w-8 h-8 md:w-5 md:h-5"
                    onClick={() => handlePositiveVote(id)}
                  />
                  <Button
                    type="button"
                    color="hover:bg-main-yellow bg-dark-yellow focus:border-2 focus:border-white"
                    icon={ThumbsDown}
                    classes="w-16 h-16 md:w-10 md:h-10 mr-5 md:mr-2"
                    iconClasses="w-8 h-8 md:w-5 md:h-5"
                    onClick={() => handleNegativeVote(id)}
                  />
                </>
              )}
              <Button
                type="button"
                color="bg-black-transparent-dark border-2 border-white text-white"
                text={hasVoted ? 'Vote Again' : 'Vote Now'}
                classes="h-20 w-48 md:h-10 md:w-auto px-5 md:px-2 lg:px-5"
                onClick={() => hasVoted ? handleVoteAgain(id) : handleVoteFinish(id)}
              // iconClasses="w-5 h-5"
              />
            </div>
          </div>
        </div>
        <VotationBar votes={votes} />
      </div>
    </article>
  );
};

export default VotationItem;