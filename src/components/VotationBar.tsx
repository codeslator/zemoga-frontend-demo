import { FC } from 'react'
import ThumbsUp from '../assets/img/thumbs-up.svg';
import ThumbsDown from '../assets/img/thumbs-down.svg';
import { Votes } from '../global/interfaces';

interface VotationBar {
  votes: Votes;
}

const VotationBar: FC<VotationBar> = ({ votes }) => {
  const { positive, negative } = votes;

  
  const getTotalPercentPositiveVotes = () => {
    const totalVotes = positive + negative;
    const percent = (positive * 100) / totalVotes;
    return percent;
  };

  const getTotalPercentNegativeVotes = () => {
    const totalVotes = positive + negative;
    const percent = (negative * 100) / totalVotes;
    return percent;
  };

  return (
    <div className="votation__bar absolute bottom-0 flex justify-between w-full h-20 md:h-12">
      <div className="votation__possitive w-[50%] h-full bg-dark-teal flex items-center justify-start px-6 md:px-4">
        <div className="votation__thumb">
          <img src={ThumbsUp} alt="thumbs_up" className="w-10 h-10 md:w-6 md:h-6" />
        </div>
        <div className="votation__value text-4xl pl-4 md:text-2xl md:pl-2 text-white">{getTotalPercentPositiveVotes()}%</div>
      </div>
      <div className="votation__negative  w-[50%] h-full bg-dark-yellow flex items-center justify-end px-6 md:px-4">
        <div className="votation__value text-4xl pr-4 md:text-2xl md:pr-2 text-white">{getTotalPercentNegativeVotes()}%</div>
        <div className="votation__thumb">
          <img src={ThumbsDown} alt="thumbs_down" className="w-10 h-10 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
};

export default VotationBar;