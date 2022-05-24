import { useAppSelector, useAppDispatch } from '.';
import { selectVotationsState } from '../store/selectors';
import { INCREMENT_NEGATIVE_VOTES, INCREMENT_POSITIVE_VOTES, VOTE_AGAIN, VOTE_FINISH } from '../store/votations';

const useVotations = () => {
  const { candidates } = useAppSelector(selectVotationsState);
  const dispatch = useAppDispatch();

  const handlePositiveVote = (id: string) => {
    dispatch(INCREMENT_POSITIVE_VOTES(id));
  };

  const handleNegativeVote = (id: string) => {
    dispatch(INCREMENT_NEGATIVE_VOTES(id));
  };

  const handleVoteAgain = (id: string) => {
    dispatch(VOTE_AGAIN(id));
  };

  const handleVoteFinish = (id: string) => {
    dispatch(VOTE_FINISH(id));
  };
  
  return {
    candidates,
    handlePositiveVote,
    handleNegativeVote,
    handleVoteAgain,
    handleVoteFinish,
  };
};

export default useVotations;