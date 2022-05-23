import { useAppSelector, useAppDispatch } from '.';
import { selectWebsiteState } from '../store/selectors';

const useWebsite = () => {
  const { title, heroCard, bannerTop, bannerBottom } = useAppSelector(selectWebsiteState);
  const dispatch = useAppDispatch();
  
  return {
    title,
    heroCard,
    bannerTop,
    bannerBottom,
  };
};

export default useWebsite;