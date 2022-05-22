import { useAppSelector, useAppDispatch } from '.';
import { selectWebsiteState } from '../store/selectors';

const useWebsite = () => {
  const { title } = useAppSelector(selectWebsiteState);
  const dispatch = useAppDispatch();
  
  return {

  };
};

export default useWebsite;