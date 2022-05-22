import { useAppSelector, useAppDispatch } from '.';
import { selectVotationsState } from '../store/selectors';

const useVotations = () => {
  const { candidates } = useAppSelector(selectVotationsState);
  const dispatch = useAppDispatch();

  
  return {

  };
};

export default useVotations;